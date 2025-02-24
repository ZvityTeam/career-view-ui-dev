import { Button } from '../ui/Button.tsx';
import { FlipWords } from '../ui/flip-words.tsx';
import { Podcast } from '../rotating-items/podcast.tsx';
import { Ebook } from '../rotating-items/ebook.tsx';
import { LiveStream } from '../rotating-items/live-stream.tsx';
import { OrbitingCircles } from '../ui/orbiting-circles.tsx';
import bg1 from '../svgs/bg-1.svg';
import bg2 from '../svgs/bg-2.svg';

const flipWords = ['Opportunities', 'Pathways', 'Connections', 'Potential'];
export const Hero = () => {
  return (
    <section
      className='z-10 flex h-screen flex-col items-center justify-center gap-52 space-y-32 py-16 pt-32 text-center'
      style={{
        background: `linear-gradient(351deg, #FFFBF0, #F1CE7E, #767676, #000000)`,
      }}
    >
      <img
        src={bg1}
        alt={''}
        className={'pointer-events-none absolute -left-[10%] top-1/3 z-10'}
      />
      <img
        src={bg2}
        alt={''}
        className={'pointer-events-none absolute -top-1/3 right-0 z-10'}
      />
      {/* Heading */}
      <div className='space-y-18 z-30'>
        <h1 className='text-[100px] text-white'>
          Unlock{' '}
          <FlipWords
            duration={1500}
            words={flipWords}
            className={'text-yellow-500'}
          />
        </h1>

        {/* Subheading */}
        <p className='mt-4 max-w-5xl text-xl text-gray-300'>
          CareerView helps students connect with industry mentors to gain
          practical, relatable and honest career insights to make more informed
          decisions about their future careers
        </p>
      </div>

      <div className='relative flex h-[400px] w-full items-center justify-center'>
        <OrbitingCircles iconSize={40}>
          <Ebook />
          <Podcast />
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={30}
          radius={100}
          reverse
          speed={2}
        >
          <Ebook />
          <LiveStream />
        </OrbitingCircles>
        <Button className='scale-125'>Browse Mentors</Button>
      </div>
    </section>
  );
};
