import { Button } from './ui/Button.tsx';
import NetworkVisualization from './network-visualization.tsx';

export const BrowseMentorsHero = () => {
  return (
    <section
      className={
        'flex min-h-screen w-full flex-col items-center bg-zinc-700 pt-44'
      }
    >
      <div className='mt-24 space-y-16 text-center'>
        <h1 className='text-8xl font-bold text-white'>
          Mentor <span className={'text-yellow-500'}>Network</span>{' '}
        </h1>

        <p className='mt-4 max-w-5xl text-xl text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed diam nonumy eirmod tempor.
        </p>

        <Button variant={'outline'}>Ask a question</Button>
        <NetworkVisualization />
      </div>
    </section>
  );
};
