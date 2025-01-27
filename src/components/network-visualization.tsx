'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  size: number;
}

interface Connection {
  from: number;
  to: number;
}

// Adjusted positions to spread the network across the full width
const avatarPositions: Point[] = [
  { x: 1, y: 35, size: 80 }, // Larger, leftmost
  { x: 15, y: 20, size: 50 },
  { x: 30, y: 30, size: 60 },
  { x: 45, y: 15, size: 50 },
  { x: 60, y: 25, size: 70 }, // Bigger to make hierarchy clearer
  { x: 75, y: 20, size: 50 },
  { x: 95, y: 35, size: 80 }, // Larger, rightmost
  { x: 20, y: 60, size: 60 },
  { x: 38, y: 65, size: 50 },
  { x: 55, y: 58, size: 70 }, // More prominence
  { x: 72, y: 65, size: 50 },
  { x: 88, y: 55, size: 60 },
];

const connections: Connection[] = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 6 },
  { from: 0, to: 7 },
  { from: 2, to: 8 },
  { from: 4, to: 9 },
  { from: 6, to: 11 },
  { from: 7, to: 8 },
  { from: 8, to: 9 },
  { from: 9, to: 10 },
  { from: 10, to: 11 },
];

export default function NetworkVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLines = () => {
      const container = containerRef.current;
      if (!container) return;

      const avatars = container.querySelectorAll('.avatar-container');
      const svg = container.querySelector('svg');
      if (!svg) return;

      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      connections.forEach(({ from, to }) => {
        const fromAvatar = avatars[from];
        const toAvatar = avatars[to];
        if (!fromAvatar || !toAvatar) return;

        const fromRect = fromAvatar.getBoundingClientRect();
        const toRect = toAvatar.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const line = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'line'
        );
        line.setAttribute(
          'x1',
          (fromRect.left + fromRect.width / 2 - containerRect.left).toString()
        );
        line.setAttribute(
          'y1',
          (fromRect.top + fromRect.height / 2 - containerRect.top).toString()
        );
        line.setAttribute(
          'x2',
          (toRect.left + toRect.width / 2 - containerRect.left).toString()
        );
        line.setAttribute(
          'y2',
          (toRect.top + toRect.height / 2 - containerRect.top).toString()
        );
        line.setAttribute('stroke', 'rgba(0,0,0,1)'); // White for dark background
        line.setAttribute('stroke-width', '2');
        line.setAttribute('stroke-dasharray', '4 2');

        svg.appendChild(line);
      });
    };

    updateLines();
    window.addEventListener('resize', updateLines);

    return () => {
      window.removeEventListener('resize', updateLines);
    };
  }, []);

  return (
    <div className='relative flex h-[40vh] w-full items-center justify-center'>
      <div
        ref={containerRef}
        className='relative h-full w-full max-w-5xl'
      >
        <svg className='absolute inset-0 h-full w-full'>
          {/* Lines dynamically drawn */}
        </svg>
        {avatarPositions.map((position, index) => (
          <div
            key={index}
            className='avatar-container absolute'
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
              width: `${position.size}px`,
              height: `${position.size}px`,
            }}
          >
            <div className='relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg'>
              <img
                src='https://i.pravatar.cc/100'
                alt={`Avatar ${index + 1}`}
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
