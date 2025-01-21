import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Example timeline data (You can expand or edit as needed).
 */
const TIMELINE_ITEMS = [
  {
    id: 1,
    side: 'left',
    title: 'School | Year - Logo',
    content: `Helps in Lorem Epsom | Highly qualified | Studied at Loren Epsom 
              | Available 9-5pm on weekdays, Lorem ipsum...`,
    top: '15%',
  },
  {
    id: 2,
    side: 'right',
    title: 'Graduation | Year - Logo',
    content: `Helps in Lorem Epsom | Studied at Loren Epsom | Lorem ipsum dolor...`,
    top: '35%',
  },
  {
    id: 3,
    side: 'left',
    title: 'School | Year - Logo',
    content: `More content describing timeline event, etc...`,
    top: '55%',
  },
  {
    id: 4,
    side: 'right',
    title: 'Graduation | Year - Logo',
    content: `Even more content describing timeline event, etc...`,
    top: '75%',
  },
];

const BigBrushTimeline: React.FC = () => {
  // Keep track of the total path length to manage the stroke & brush icon movement
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  // This hook gives us [0..1] scroll progress over the entire page
  const { scrollYProgress } = useScroll();

  // Once mounted, measure the total length of the path
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // We'll map scroll progress (0..1) → drawn length (0..pathLength)
  const drawValue = useTransform(scrollYProgress, [0, 1], [0, pathLength]);

  // Our stroke “dash offset” goes from pathLength (completely hidden) down to 0 (fully drawn)
  const dashOffset = useTransform(drawValue, (latest) => {
    return pathLength - latest;
  });

  // Track the brush position & angle along the path, so it looks like it's “painting”
  const [brushPos, setBrushPos] = useState({ x: 0, y: 0, angle: 0 });

  // Whenever the drawn length updates, figure out the (x, y) and angle on the path
  useEffect(() => {
    if (!pathRef.current) return;

    const unsubscribe = drawValue.onChange((lengthSoFar) => {
      const len = pathRef.current!.getTotalLength();
      // clamp it in case of over/under
      const clamped = Math.min(Math.max(lengthSoFar, 0), len);

      // Get the exact point on the path
      const point = pathRef.current!.getPointAtLength(clamped);

      // Get a point slightly further to compute tangent angle
      const delta = 2;
      const nextPoint = pathRef.current!.getPointAtLength(
        Math.min(clamped + delta, len)
      );

      const dx = nextPoint.x - point.x;
      const dy = nextPoint.y - point.y;
      const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);

      setBrushPos({ x: point.x, y: point.y, angle: angleDeg });
    });

    return () => unsubscribe();
  }, [drawValue]);

  // @ts-expect-error
  return (
    <div
      className='relative w-full bg-gray-50'
      style={{ height: '300vh' }}
    >
      {/* Heading */}
      <h1 className='pt-10 text-center text-3xl font-bold'>Experience</h1>

      {/* Sticky container for the big path */}
      <div className='pointer-events-none sticky top-0 flex h-screen items-center justify-center'>
        <svg
          width='800'
          height='1200'
          viewBox='0 0 800 1200'
          xmlns='http://www.w3.org/2000/svg'
          className='overflow-visible'
        >
          {/* Big thick path from top to bottom. Adjust the path “d” if you want a different curve. */}
          <motion.path
            ref={pathRef}
            d='M400,0 C 100,300 700,900 400,1200'
            fill='none'
            stroke='#409eff'
            strokeWidth={60}
            strokeLinecap='round'
            strokeDasharray={pathLength}
            style={{ strokeDashoffset: dashOffset }}
          />

          {/* The big brush icon. We'll scale it up around 10×. */}
          <motion.g
            style={{
              translateX: brushPos.x,
              translateY: brushPos.y,
              rotate: brushPos.angle,
              // Center the brush around the contact point:
              translateXPercent: -50,
              translateYPercent: -50,
              scale: 10,
            }}
          >
            {/* Example: text emoji brush, but you can swap with a <image> or <svg> */}
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

      {/* TIMELINE ITEMS: absolutely position them so they appear left or right of the center path */}
      {TIMELINE_ITEMS.map((item) => {
        const isLeft = item.side === 'left';
        return (
          <div
            key={item.id}
            className={`absolute w-[40%] ${isLeft ? 'left-0' : 'right-0'}`}
            style={{ top: item.top }}
          >
            {/* Dashed connector from the item to the path center */}
            <div
              className={`flex items-center ${
                isLeft ? 'justify-end pr-4' : 'justify-start pl-4'
              }`}
            >
              <div className='h-0 w-16 border-t-2 border-dashed border-gray-400'></div>
            </div>
            {/* The item “card” */}
            <div
              className={`mt-2 rounded-md bg-white p-4 shadow-md ${
                isLeft ? 'ml-auto text-right' : 'mr-auto text-left'
              }`}
            >
              <h2 className='mb-1 text-lg font-semibold'>{item.title}</h2>
              <p className='text-sm text-gray-600'>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BigBrushTimeline;
