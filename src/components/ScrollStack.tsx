import Lenis from 'lenis';
import React, { ReactNode, useCallback, useLayoutEffect, useRef } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  style = {},
}) => (
  <div
    className={`scroll-stack-card relative my-8 box-border w-full origin-top rounded-[40px] p-12 shadow-[0_0_30px_rgba(0,0,0,0.1)] ${itemClassName || 'h-80'}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.1s ease-out, filter 0.1s ease-out',
      ...style,
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  // Smooth interpolation values
  const currentTransformsRef = useRef(
    new Map<
      number,
      {
        translateY: number;
        scale: number;
        rotation: number;
        blur: number;
      }
    >()
  );

  const targetTransformsRef = useRef(
    new Map<
      number,
      {
        translateY: number;
        scale: number;
        rotation: number;
        blur: number;
      }
    >()
  );

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === 'string' && value.includes('%')) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value as string);
    },
    []
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  // Lerp function for smooth interpolation
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const calculateTargetTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );

    const endElement = useWindowScroll
      ? (document.querySelector('.scroll-stack-end') as HTMLElement | null)
      : (scrollerRef.current?.querySelector(
          '.scroll-stack-end'
        ) as HTMLElement | null);

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart =
            jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      // Store target values
      targetTransformsRef.current.set(i, {
        translateY,
        scale,
        rotation,
        blur,
      });

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  const animateTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const lerpFactor = 0.15; // Smoothness factor (lower = smoother but slower)

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const target = targetTransformsRef.current.get(i);
      if (!target) return;

      // Initialize current transform if not exists
      if (!currentTransformsRef.current.has(i)) {
        currentTransformsRef.current.set(i, { ...target });
      }

      const current = currentTransformsRef.current.get(i)!;

      // Smoothly interpolate to target values
      const newTransform = {
        translateY: lerp(current.translateY, target.translateY, lerpFactor),
        scale: lerp(current.scale, target.scale, lerpFactor),
        rotation: lerp(current.rotation, target.rotation, lerpFactor),
        blur: lerp(current.blur, target.blur, lerpFactor),
      };

      // Check if we're close enough to the target (to avoid infinite tiny updates)
      const threshold = 0.01;
      const isClose =
        Math.abs(newTransform.translateY - target.translateY) < threshold &&
        Math.abs(newTransform.scale - target.scale) < 0.0001 &&
        Math.abs(newTransform.rotation - target.rotation) < threshold &&
        Math.abs(newTransform.blur - target.blur) < threshold;

      if (isClose) {
        // Snap to target when very close
        newTransform.translateY = target.translateY;
        newTransform.scale = target.scale;
        newTransform.rotation = target.rotation;
        newTransform.blur = target.blur;
      }

      // Apply transform
      const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
      const filter =
        newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

      card.style.transform = transform;
      card.style.filter = filter;

      // Update current transform
      currentTransformsRef.current.set(i, newTransform);
    });
  }, [lerp]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: false,
      });

      lenis.on('scroll', calculateTargetTransforms);

      const raf = (time: number) => {
        lenis.raf(time);
        animateTransforms(); // Animate independently of scroll events
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientation: 'vertical',
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: false,
      });

      lenis.on('scroll', calculateTargetTransforms);

      const raf = (time: number) => {
        lenis.raf(time);
        animateTransforms(); // Animate independently of scroll events
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [calculateTargetTransforms, animateTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
    ) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';

      // Initialize transforms
      currentTransformsRef.current.set(i, {
        translateY: 0,
        scale: 1,
        rotation: 0,
        blur: 0,
      });
      targetTransformsRef.current.set(i, {
        translateY: 0,
        scale: 1,
        rotation: 0,
        blur: 0,
      });
    });

    setupLenis();
    calculateTargetTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      currentTransformsRef.current.clear();
      targetTransformsRef.current.clear();
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    calculateTargetTransforms,
  ]);

  return (
    <div
      className={`relative h-full w-full overflow-y-auto overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
      }}
    >
      <div className='scroll-stack-inner min-h-screen overflow-hidden px-2 pb-[50rem] pt-[20vh] md:px-20'>
        {children}
        <div className='scroll-stack-end h-px w-full' />
      </div>
    </div>
  );
};

export default ScrollStack;
