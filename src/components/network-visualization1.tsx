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
  { x: 15, y: 20, size: 80 },
  { x: 35, y: 20, size: 80 },
  { x: 55, y: 20, size: 80 },
  { x: 75, y: 20, size: 80 },
  { x: 10, y: 35, size: 80 },
  { x: 30, y: 35, size: 80 },
  { x: 50, y: 35, size: 80 },
  { x: 70, y: 35, size: 80 },
  { x: 15, y: 50, size: 80 },
  { x: 35, y: 50, size: 80 },
  { x: 55, y: 50, size: 80 },
  { x: 75, y: 50, size: 80 },
  { x: 10, y: 65, size: 80 },
  { x: 30, y: 65, size: 80 },
  { x: 50, y: 65, size: 80 },
  { x: 70, y: 65, size: 80 },
];

const generateConnections = (): Connection[] => {
  const numNodes = 16;
  const visited = new Array(numNodes).fill(false);
  const treeEdges: Connection[] = [];

  const getNeighbors = (index: number): number[] => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    const neighbors: number[] = [];
    if (col > 0) neighbors.push(index - 1); // Left
    if (col < 3) neighbors.push(index + 1); // Right
    if (row < 3) {
      neighbors.push(index + 4); // Below
      if (col > 0) neighbors.push(index + 3); // Below-Left
      if (col < 3) neighbors.push(index + 5); // Below-Right
    }
    return neighbors;
  };

  // Random spanning tree
  const startNode = Math.floor(Math.random() * numNodes);
  visited[startNode] = true;
  const frontier: Connection[] = getNeighbors(startNode).map((to) => ({
    from: startNode,
    to,
  }));
  while (frontier.length > 0) {
    const idx = Math.floor(Math.random() * frontier.length);
    const { from, to } = frontier[idx];
    if (!visited[to]) {
      visited[to] = true;
      treeEdges.push({ from, to });
      getNeighbors(to)
        .filter((n) => !visited[n])
        .forEach((n) => frontier.push({ from: to, to: n }));
    }
    frontier.splice(idx, 1);
  }

  // Track degrees
  const degrees = new Array(numNodes).fill(0);
  treeEdges.forEach(({ from, to }) => {
    degrees[from]++;
    degrees[to]++;
  });

  // Add a few extra edges
  const extraEdges: Connection[] = [];
  const allEdges: Connection[] = [];
  for (let i = 0; i < numNodes; i++) {
    getNeighbors(i).forEach((j) => {
      if (
        j > i &&
        !treeEdges.some(
          (e) => (e.from === i && e.to === j) || (e.from === j && e.to === i)
        )
      ) {
        allEdges.push({ from: i, to: j });
      }
    });
  }
  const shuffled = allEdges.sort(() => Math.random() - 0.5);
  let extraCount = 0;
  for (const { from, to } of shuffled) {
    if (degrees[from] < 3 && degrees[to] < 3 && extraCount < 3) {
      // Limit to 3 extra
      extraEdges.push({ from, to });
      degrees[from]++;
      degrees[to]++;
      extraCount++;
    }
  }

  return [...treeEdges, ...extraEdges];
};

const connections = generateConnections();

export default function NetworkVisualization1() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { getRandomMentors } = useMentorStore();
  const mentors = getRandomMentors(16);
  const avatarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineElements, setLineElements] = useState<SVGLineElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const avatars =
      container.querySelectorAll<HTMLDivElement>('.avatar-container');
    const svg = container.querySelector<SVGSVGElement>('svg');
    if (!svg) return;

    svg.innerHTML = '';
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
      ) as SVGLineElement;
      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top + toRect.height / 2 - containerRect.top;

      line.setAttribute('x1', x1.toString());
      line.setAttribute('y1', y1.toString());
      line.setAttribute('x2', x2.toString());
      line.setAttribute('y2', y2.toString());
      line.setAttribute('stroke', 'rgba(0, 0, 0, 1)');
      line.setAttribute('stroke-width', '2');
      line.setAttribute('stroke-dasharray', '4 2');

      svg.appendChild(line);
      newLines.push(line);
    });
    setLineElements(newLines);
  }, []);

  useEffect(() => {
    if (lineElements.length === 0) return;
    lineElements.forEach((line, i) => {
      const length = Math.hypot(
        parseFloat(line.getAttribute('x2') || '0') -
          parseFloat(line.getAttribute('x1') || '0'),
        parseFloat(line.getAttribute('y2') || '0') -
          parseFloat(line.getAttribute('y1') || '0')
      );
      line.style.strokeDasharray = String(length);
      line.style.strokeDashoffset = String(length);
      line.style.animation = 'drawLine 1s ease forwards';
      line.style.animationDelay = `${0.3 * i}s`;

      const { from, to } = connections[i];
      const fromEl = avatarRefs.current[from];
      const toEl = avatarRefs.current[to];
      if (fromEl) fromEl.style.animation = 'fadeIn 0.6s forwards';
      setTimeout(
        () => {
          if (toEl) toEl.style.animation = 'fadeIn 0.6s forwards';
        },
        (0.3 * i + 0.5) * 1000
      );
    });
  }, [lineElements]);

  return (
    <div className='relative flex h-[80dvh] w-full items-center justify-center'>
      <div
        ref={containerRef}
        className='relative h-[80dvh] w-full'
      >
        <svg className='absolute inset-0 h-full w-full'></svg>
        {avatarPositions.map((position, index) => (
          <div
            key={index}
            ref={(el) => (avatarRefs.current[index] = el)}
            className='avatar-container absolute flex flex-col items-center opacity-0'
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className='relative overflow-hidden rounded-full border-4 border-white shadow-lg'
              style={{
                width: `${position.size}px`,
                height: `${position.size}px`,
              }}
            >
              <img
                src={mentors[index]?.profileImage}
                alt={`Avatar ${index + 1}`}
                className='h-full w-full bg-white object-cover'
              />
            </div>
            <p className='mt-2 text-center text-sm'>
              {mentors[index]?.role || 'Career Title'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
