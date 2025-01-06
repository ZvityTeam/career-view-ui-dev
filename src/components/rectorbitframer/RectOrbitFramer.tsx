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
   * The corner radius if you want *visual* corners on the rectangle’s outline.
   * (In this simple example, we do NOT actually use arcs for the path math—just straight edges.)
   */
  cornerRadius?: number;
  /** If true, show an SVG rectangle in the background for debugging. */
  showPath?: boolean;
  /**
   * If true, items travel *counter-clockwise* (reverse).
   * If false, they go clockwise in our simplified logic.
   */
  reverse?: boolean;
  /** The children (icons, images, etc.) that will orbit. */
  children?: React.ReactNode;
}

/**
 * Demonstrates orbiting items around a rectangular track using Framer Motion.
 * We do *not* rely on offset-path. Instead, we animate a shared “progress” in [0..1]
 * for each child’s position. They loop infinitely and can be reversed.
 *
 * Currently, the path is a simple rectangle (no arcs).
 * If you need arcs, you can approximate them or break it into more segments.
 */
export function RectOrbitFramer({
  width = 400,
  height = 250,
  duration = 25,
  cornerRadius = 0,
  showPath = true,
  reverse = false,
  children,
}: RectOrbitFramerProps) {
  // Convert `children` to an array so we can offset each item’s start.
  const items = React.Children.toArray(children);

  // 1) We keep a single motion value that goes 0..1 in a loop, representing
  // one complete orbit around the rectangle.
  const orbitProgress = useMotionValue(0);

  // 2) On mount, animate orbitProgress from 0..1 repeatedly.
  React.useEffect(() => {
    const controls = animate(orbitProgress, 1, {
      duration,
      repeat: Infinity,
      ease: 'linear',
      // If reverse=true, we can run the animation backward each iteration:
      // But that actually does a “ping-pong” effect. Usually we want continuous same direction,
      // so we can just multiply by -1 in our getPositionOnRect function if reverse = true.
    });
    return () => controls.stop();
  }, [orbitProgress, duration]);

  /**
   * Given t in [0..1], returns (x, y) on the perimeter of a rectangle (no arcs).
   * We assume:
   * - 0   => top-left corner
   * - 0.25 => top-right corner
   * - 0.5  => bottom-right corner
   * - 0.75 => bottom-left corner
   * - 1.0  => top-left again
   *
   * If `reverse` is true, we interpret t in the opposite direction.
   *
   * This is a simplistic approach that doesn’t incorporate arcs.
   * To do arcs, you’d break each edge into more segments or do parametric arc math.
   */
  function getPositionOnRect(
    t: number,
    w: number,
    h: number
  ): { x: number; y: number } {
    if (reverse) {
      // Just flip t so it goes backwards
      t = 1 - t;
    }

    // There are 4 edges, each is 0.25 of the perimeter:
    // 0..0.25 => top edge left->right
    // 0.25..0.5 => right edge top->bottom
    // 0.5..0.75 => bottom edge right->left
    // 0.75..1 => left edge bottom->top
    const segment = t * 4; // from 0..4
    if (segment < 1) {
      // top edge: x from 0..w, y=0
      const progress = segment; // 0..1
      return { x: progress * w, y: 0 };
    } else if (segment < 2) {
      // right edge: x=w, y from 0..h
      const progress = segment - 1; // 0..1
      return { x: w, y: progress * h };
    } else if (segment < 3) {
      // bottom edge: x from w..0, y=h
      const progress = segment - 2; // 0..1
      return { x: w - progress * w, y: h };
    } else {
      // left edge: x=0, y from h..0
      const progress = segment - 3; // 0..1
      return { x: 0, y: h - progress * h };
    }
  }

  return (
    <div className='absolute'>
      <div
        style={{
          position: 'relative',
          width,
          height,
        }}
      >
        {/* If showPath = true, draw the rectangle for debugging */}
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
            <rect
              x={0}
              y={0}
              width={width}
              height={height}
              rx={cornerRadius}
              ry={cornerRadius}
              fill='none'
              stroke='rgba(0,0,0,0.2)'
              strokeWidth={2}
            />
          </svg>
        )}

        {/* Render each child, offset so they don’t overlap exactly. */}
        {items.map((child, i) => {
          // e.g. if we have 2 children, they start 0% and 50% around the loop
          const offsetFraction = i / items.length;

          // We create two derived transforms (x, y) from orbitProgress
          // that factor in the offsetFraction.
          const xValue = useTransform(orbitProgress, (latest) => {
            // (latest + offset) mod 1 => the actual fraction for this item
            const t = (latest + offsetFraction) % 1;
            return getPositionOnRect(t, width, height).x;
          });

          const yValue = useTransform(orbitProgress, (latest) => {
            const t = (latest + offsetFraction) % 1;
            return getPositionOnRect(t, width, height).y;
          });

          // The item is absolutely positioned at (x,y) relative to the container.
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
