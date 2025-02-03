import { Button } from './ui/Button.tsx';
import NetworkVisualization from './network-visualization.tsx';
import bg1 from '../components/svgs/bg-1.svg';
import bg2 from '../components/svgs/bg-2.svg';

export const BrowseMentorsHero = () => {
  return (
    <section
      className={
        'via-slate-0 relative flex min-h-screen w-full flex-col items-center bg-gradient-to-br from-slate-900 to-slate-700 pt-44'
      }
    >
      <img
        src={bg1}
        alt={''}
        className={'pointer-events-none absolute left-0 top-0 z-10'}
      />
      <img
        src={bg2}
        alt={''}
        className={'pointer-events-none absolute right-0 top-0 z-10'}
      />
      <div className='z-20 mt-24 space-y-16 text-center'>
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
