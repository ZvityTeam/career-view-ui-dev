import React from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

interface RectOrbitFramerProps {
  /** Width of the orbit rectangle in px */
  width?: number;
  /** Height of the orbit rectangle in px */
  height?: number;
  /**
   * How many seconds each full loop lasts.
   * e.g. 20 = takes 20s to go fully around once.
   */
  duration?: number;
  /**
   * Corner radius for the corners, in px.
   * If r>0, the edges become arcs at the corners.
   */
  cornerRadius?: number;
  /** If true, show an SVG path in the background for debugging. */
  showPath?: boolean;
  /**
   * If true, items travel *counter-clockwise* (reverse).
   * If false, they go clockwise in our path logic.
   */
  reverse?: boolean;
  /** The children (icons, images, etc.) that will orbit. */
  children?: React.ReactNode;

  /**
   * Tailwind (or other) class name for the rectangle stroke,
   * e.g. "stroke-blue-500" or "stroke-[rgba(0,0,0,0.2)]".
   * If not provided, we default to a light gray stroke.
   */
  rectangleClassName?: string;

  /**
   * Numeric stroke width for the rectangle path, e.g. 2, 4, etc.
   * Defaults to 2 if not specified.
   */
  rectangleStrokeWidth?: number;
}

/**
 * Orbiting items around a *rounded rectangle* using Framer Motion,
 * with correct arcs on corners. The icons will exactly follow the same
 * path we draw in the background (if showPath=true).
 */
export function RectOrbitFramer({
  width = 400,
  height = 250,
  duration = 8,
  cornerRadius = 0,
  showPath = true,
  reverse = false,
  children,

  // NEW PROPS
  rectangleClassName,
  rectangleStrokeWidth,
}: RectOrbitFramerProps) {
  // Convert `children` to an array so we can offset each item’s start.
  const items = React.Children.toArray(children);

  // 1) We keep a single motion value that goes 0..1 in a loop, representing
  // one complete orbit around the rectangle perimeter.
  const orbitProgress = useMotionValue(0);

  // 2) On mount, animate orbitProgress from 0..1 repeatedly (one loop).
  React.useEffect(() => {
    const controls = animate(orbitProgress, 1, {
      duration,
      repeat: Infinity,
      ease: 'linear',
    });
    return () => controls.stop();
  }, [orbitProgress, duration]);

  /**
   * The perimeter of a rounded rectangle:
   *   P = 2(w + h) - 8r + 2πr
   */
  function getPerimeter(w: number, h: number, r: number) {
    if (r === 0) {
      return 2 * (w + h); // no arcs
    }
    return 2 * (w + h) - 8 * r + 2 * Math.PI * r;
  }

  const perimeter = getPerimeter(width, height, cornerRadius);

  /**
   * Given a fraction t in [0..1], returns (x, y) on the perimeter of a rectangle
   * with corner radius = r. We break the perimeter into 8 segments:
   *   - 4 straight edges
   *   - 4 quarter-circle arcs
   *
   * The path starts at (r,0) if r>0 (the top-left arc start).
   * If r=0, that collapses to (0,0).
   */
  function getPositionOnRoundedRect(
    t: number,
    w: number,
    h: number,
    r: number
  ) {
    // If reversing, we just flip t -> (1 - t).
    if (reverse) {
      t = 1 - t;
    }

    // Convert t in [0..1] to distance s along perimeter
    const s = t * perimeter;

    // Segment lengths:
    // Straight edges = (w - 2r) or (h - 2r)
    // Corner arcs = π/2 * r
    const topEdge = Math.max(w - 2 * r, 0); // if r>0, the top edge is shortened by 2*r for corners
    const rightEdge = Math.max(h - 2 * r, 0);
    const bottomEdge = topEdge;
    const leftEdge = rightEdge;
    const arcLen = r > 0 ? (Math.PI / 2) * r : 0;

    // 8 segments: top edge, top-right arc, right edge, bottom-right arc,
    // bottom edge, bottom-left arc, left edge, top-left arc.
    const segments = [
      topEdge,
      arcLen,
      rightEdge,
      arcLen,
      bottomEdge,
      arcLen,
      leftEdge,
      arcLen,
    ];
    let cum = 0;
    const cumulatives = segments.map((segLen) => {
      cum += segLen;
      return cum;
    });

    let segIndex = 0;
    for (let i = 0; i < cumulatives.length; i++) {
      if (s <= cumulatives[i]) {
        segIndex = i;
        break;
      }
    }
    const prevCum = segIndex === 0 ? 0 : cumulatives[segIndex - 1];
    const distInSeg = s - prevCum;

    // 0) top edge: from (r, 0) to (w - r, 0)
    if (segIndex === 0) {
      const x = r + distInSeg;
      const y = 0;
      return { x, y };
    }
    // 1) top-right arc
    else if (segIndex === 1) {
      const theta = (distInSeg / arcLen) * (Math.PI / 2);
      const x = w - r + r * Math.sin(theta);
      const y = r - r * Math.cos(theta);
      return { x, y };
    }
    // 2) right edge: from (w, r) to (w, h - r)
    else if (segIndex === 2) {
      const x = w;
      const y = r + distInSeg;
      return { x, y };
    }
    // 3) bottom-right arc
    else if (segIndex === 3) {
      const theta = (distInSeg / arcLen) * (Math.PI / 2);
      const x2 = w - r + r * Math.cos(theta);
      const y2 = h - r + r * Math.sin(theta);
      return { x: x2, y: y2 };
    }
    // 4) bottom edge
    else if (segIndex === 4) {
      const x = w - r - distInSeg;
      const y = h;
      return { x, y };
    }
    // 5) bottom-left arc
    else if (segIndex === 5) {
      const theta = (distInSeg / arcLen) * (Math.PI / 2);
      const x2 = r - r * Math.sin(theta);
      const y2 = h - r + r * Math.cos(theta);
      return { x: x2, y: y2 };
    }
    // 6) left edge
    else if (segIndex === 6) {
      const x = 0;
      const y = h - r - distInSeg;
      return { x, y };
    }
    // 7) top-left arc
    else {
      const theta = (distInSeg / arcLen) * (Math.PI / 2);
      const x = r - r * Math.cos(theta);
      const y = r - r * Math.sin(theta);
      return { x, y };
    }
  }

  // Build the debug path for the rectangle
  const pathData = React.useMemo(() => {
    const r = cornerRadius;
    if (r <= 0) {
      return `M 0,0 H ${width} V ${height} H 0 V 0 Z`;
    }
    return `
      M ${r},0
      H ${width - r}
      A ${r},${r} 0 0 1 ${width},${r}
      V ${height - r}
      A ${r},${r} 0 0 1 ${width - r},${height}
      H ${r}
      A ${r},${r} 0 0 1 0,${height - r}
      V ${r}
      A ${r},${r} 0 0 1 ${r},0
      Z
    `;
  }, [width, height, cornerRadius]);

  return (
    <div className='absolute'>
      <div style={{ position: 'relative', width, height }}>
        {/* Show the path visually, for debugging */}
        {showPath && (
          <svg
            viewBox={`0 0 ${width} ${height}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            <path
              d={pathData}
              fill='none'
              /*
                Use the new props for stroke and strokeWidth.
                If `rectangleClassName` is provided, it can include Tailwind color classes
                like "stroke-red-500", "stroke-black/20", etc.
                If not provided, we fallback to "stroke-gray-300".
              */
              className={rectangleClassName ?? 'stroke-gray-300'}
              strokeWidth={rectangleStrokeWidth ?? 2}
            />
          </svg>
        )}

        {/* Map over children and position them around the perimeter */}
        {items.map((child, i) => {
          const offsetFraction = i / items.length;

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const xValue = useTransform(orbitProgress, (latest) => {
            const t = (latest + offsetFraction) % 1;
            return getPositionOnRoundedRect(t, width, height, cornerRadius).x;
          });

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const yValue = useTransform(orbitProgress, (latest) => {
            const t = (latest + offsetFraction) % 1;
            return getPositionOnRoundedRect(t, width, height, cornerRadius).y;
          });

          return (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                x: xValue,
                y: yValue,
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
