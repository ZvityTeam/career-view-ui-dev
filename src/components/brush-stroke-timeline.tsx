import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrushStrokeFiller: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const { scrollYProgress } = useScroll();

  // Measure the total length of our path once the component mounts
  const [pathLength, setPathLength] = useState(0);
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Convert scroll progress (0..1) into a “draw” length (0..pathLength)
  const drawValue = useTransform(scrollYProgress, [0, 1], [0, pathLength]);

  // We’ll store where the brush icon should be (x, y, angle along the path)
  const [brushPos, setBrushPos] = useState({ x: 0, y: 0, angle: 0 });

  // As “drawValue” changes, read that length from the path and compute position + angle
  useEffect(() => {
    if (!pathRef.current) return;
    const unsubscribe = drawValue.onChange((drawLen) => {
      const len = pathRef.current!.getTotalLength();
      // Clamp to [0..len]
      const clampedLen = Math.max(0, Math.min(drawLen, len));
      const point = pathRef.current!.getPointAtLength(clampedLen);

      // Calculate a small offset to find the tangent angle
      const delta = 1; // “step” for angle
      const nextLen = Math.min(clampedLen + delta, len);
      const nextPoint = pathRef.current!.getPointAtLength(nextLen);
      const dx = nextPoint.x - point.x;
      const dy = nextPoint.y - point.y;
      const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);

      setBrushPos({ x: point.x, y: point.y, angle: angleDeg });
    });
    return () => unsubscribe();
  }, [drawValue]);

  // For the path “reveal”: offset goes from pathLength (hidden) down to 0 (fully drawn)
  const dashOffset = useTransform(drawValue, (v) => pathLength - v);

  return (
    <div className='h-[200vh] bg-gray-50'>
      {/* A large container so we have room to scroll */}
      <div className='sticky top-0 flex h-screen items-center justify-center'>
        <svg
          width='400'
          height='600'
          viewBox='0 0 400 600'
          xmlns='http://www.w3.org/2000/svg'
          className='overflow-visible'
        >
          {/* Thick path that looks like a “filled stroke” once revealed */}
          <motion.path
            ref={pathRef}
            d='M200,50 C 50,150 350,300 200,500'
            fill='none'
            stroke='#409eff' /* your stroke color */
            strokeWidth='30' /* make it thick to appear “filled” */
            strokeDasharray={pathLength}
            style={{ strokeDashoffset: dashOffset }}
            strokeLinecap='round'
          />

          {/* Brush icon (emoji or your own <svg> or <img>) traveling the path */}
          <motion.g
            style={{
              translateX: brushPos.x,
              translateY: brushPos.y,
              rotate: brushPos.angle,
            }}
          >
            {/* Example: text emoji. Swap with your brush graphic if desired. */}
            <text
              x='0'
              y='0'
              fontSize='24'
              textAnchor='middle'
              dominantBaseline='middle'
            >
              🖌️
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default BrushStrokeFiller;
