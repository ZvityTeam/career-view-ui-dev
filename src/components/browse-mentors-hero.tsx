import bg1 from '../components/svgs/bg-1.svg';
import bg2 from '../components/svgs/bg-2.svg';
import NetworkVisualization from './network-visualization.tsx';

export const BrowseMentorsHero = () => {
  return (
    <section
      className={
        'relative flex min-h-[35dvh] w-full flex-col items-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-700 md:min-h-[50dvh] md:min-h-[60dvh]'
      }
    >
      <img
        src={bg1}
        alt=''
        className='pointer-events-none absolute left-0 top-0 z-10 w-1/3 md:w-auto'
      />
      <img
        src={bg2}
        alt=''
        className='pointer-events-none absolute right-0 top-0 z-10 w-1/3 md:w-auto'
      />
      <div className='z-20 mt-12 w-full max-w-[1024px] px-4 text-center md:mt-24 md:space-y-16'>
        <div className='hidden md:block'>
          <NetworkVisualization />
        </div>
        <div className='mt-20 md:hidden'>
          <h1 className='text-2xl font-bold text-white'>
            Connect with Top Mentors
          </h1>
          <p className='mt-4 text-slate-300'>
            Browse and find the perfect mentor to guide you.
          </p>
        </div>
      </div>
    </section>
  );
};
