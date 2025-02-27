import NetworkVisualization from './network-visualization.tsx';
import bg1 from '../components/svgs/bg-1.svg';
import bg2 from '../components/svgs/bg-2.svg';

export const BrowseMentorsHero = () => {
  return (
    <section
      className={
        'via-slate-0 relative flex h-[60vh] w-full flex-col items-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700'
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
      <div className='z-20 mt-24 w-[1024px] space-y-16 text-center'>
        <NetworkVisualization />
      </div>
    </section>
  );
};
