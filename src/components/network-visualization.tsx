import { useEffect, useRef, useState } from 'react';
import { useMentorStore } from '../store/useMentorStore';

interface Point {
  x: number;
  y: number;
  size: number;
}

interface Connection {
  from: number;
  to: number;
}

const avatarPositions: Point[] = [
  { x: 1, y: 35, size: 150 }, // Larger, leftmost
  { x: 15, y: 20, size: 90 },
  { x: 30, y: 30, size: 100 },
  { x: 45, y: 15, size: 90 },
  { x: 60, y: 25, size: 110 }, // Bigger to make hierarchy clearer
  { x: 75, y: 20, size: 90 },
  { x: 95, y: 35, size: 120 }, // Larger, rightmost
  { x: 20, y: 60, size: 100 },
  { x: 38, y: 65, size: 90 },
  { x: 55, y: 58, size: 110 }, // More prominence
  { x: 72, y: 65, size: 90 },
  { x: 88, y: 55, size: 100 },
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
  const { getRandomMentors } = useMentorStore();
  const mentors = getRandomMentors(avatarPositions.length);

  // Keep track of avatar refs
  const avatarRefs = useRef<(HTMLDivElement | null)[]>([]);
  // We track <line> elements after creation
  const [lineElements, setLineElements] = useState<SVGLineElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const avatars =
      container.querySelectorAll<HTMLDivElement>('.avatar-container');
    const svg = container.querySelector('svg');
    if (!svg) return;

    // Clear any existing lines
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    // For storing newly created lines
    const newLines: SVGLineElement[] = [];

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

      // Compute line positions
      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top + toRect.height / 2 - containerRect.top;

      line.setAttribute('x1', x1.toString());
      line.setAttribute('y1', y1.toString());
      line.setAttribute('x2', x2.toString());
      line.setAttribute('y2', y2.toString());

      // Basic line style
      line.setAttribute('stroke', 'rgb(0, 0, 0)');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('stroke-dasharray', '4 2');
      line.style.strokeLinecap = 'round';

      svg.appendChild(line);
      newLines.push(line);
    });

    setLineElements(newLines);
  }, []);

  // Animate lines and avatars once we have lineElements
  useEffect(() => {
    if (lineElements.length === 0) return;

    lineElements.forEach((line, i) => {
      // 1) Calculate length
      const x1 = parseFloat(line.getAttribute('x1') || '0');
      const y1 = parseFloat(line.getAttribute('y1') || '0');
      const x2 = parseFloat(line.getAttribute('x2') || '0');
      const y2 = parseFloat(line.getAttribute('y2') || '0');
      const length = Math.hypot(x2 - x1, y2 - y1);

      // 2) Set dash properties
      line.style.strokeDasharray = String(length);
      line.style.strokeDashoffset = String(length);

      // 3) Animate strokeDashoffset -> 0
      line.style.animationName = 'drawLine';
      line.style.animationDuration = '1s';
      line.style.animationTimingFunction = 'ease';
      line.style.animationFillMode = 'forwards';
      // Stagger them slightly by index
      line.style.animationDelay = `${0.3 * i}s`;

      // 4) Once the line is about halfway drawn, reveal the target avatar
      const { to } = connections[i];
      setTimeout(
        () => {
          const toEl = avatarRefs.current[to];
          if (toEl) {
            toEl.style.animationName = 'fadeIn';
            toEl.style.animationDuration = '0.6s';
            toEl.style.animationFillMode = 'forwards';
          }
        },
        (0.3 * i + 0.5) * 1000
      );

      // Optionally also reveal the from-avatar right when the line starts
      const { from } = connections[i];
      const fromEl = avatarRefs.current[from];
      if (fromEl) {
        fromEl.style.animationName = 'fadeIn';
        fromEl.style.animationDuration = '0.6s';
        fromEl.style.animationFillMode = 'forwards';
      }
      setTimeout(
        () => {
          line.style.strokeDasharray = '4 2';
          line.style.strokeDashoffset = '0';
        },
        (0.3 * i + 1) * 1000
      );
    });
  }, [lineElements]);

  return (
    <div className='relative flex h-[60dvh] w-full items-center justify-center'>
      <div
        ref={containerRef}
        className='relative h-full w-full max-w-7xl'
      >
        {/* The SVG for our lines */}
        <svg className='absolute inset-0 h-full w-full'>
          {/* Lines are dynamically created in useEffect */}
        </svg>

        {/* Avatars: initially hidden (opacity: 0 via Tailwind or your own CSS) */}
        {avatarPositions.map((position, index) => (
          <div
            key={index}
            ref={(el) => (avatarRefs.current[index] = el)}
            className='avatar-container absolute opacity-0'
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
              width: `${position.size}px`,
              height: `${position.size}px`,
            }}
          >
            <div className='group relative h-full w-full overflow-hidden rounded-3xl border-4 border-white shadow-lg'>
              <img
                src={mentors[index]?.profileImage}
                alt={`Avatar ${index + 1}`}
                className='h-full w-full bg-white object-cover'
              />
              <div
                className='overflow-truncate absolute inset-0 mx-auto flex items-end justify-center bg-gradient-to-b from-black/0 via-black/10 to-yellow-400/80 text-center font-semibold italic leading-tight tracking-tight text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover:opacity-100'
                style={{ fontSize: `${position.size * 0.12}px` }}
              >
                {mentors[index]?.role}
              </div>
            </div>
            {/* {mentors[index]?.role} */}
          </div>
        ))}
      </div>
    </div>
  );
}
