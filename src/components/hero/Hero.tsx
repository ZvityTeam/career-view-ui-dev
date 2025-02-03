import { Button } from '../ui/Button.tsx';
import { FlipWords } from '../ui/flip-words.tsx';
import { Podcast } from '../rotating-items/podcast.tsx';
import { Ebook } from '../rotating-items/ebook.tsx';
import { LiveStream } from '../rotating-items/live-stream.tsx';
import { OrbitingCircles } from '../ui/orbiting-circles.tsx';

const flipWords = ['Opportunities', 'Pathways', 'Connections'];
export const Hero = () => {
  return (
    <section className='z-10 flex min-h-screen flex-col items-center justify-center gap-52 space-y-32 bg-gradient-to-b from-slate-900 via-slate-800 to-yellow-100 py-16 pt-32 text-center'>
      {/* Heading */}
      <div className='space-y-24'>
        <h1 className='text-8xl font-bold text-white'>
          Unlock{' '}
          <FlipWords
            duration={1500}
            words={flipWords}
            className={'text-yellow-500'}
          />
        </h1>

        {/* Subheading */}
        <p className='mt-4 max-w-5xl text-xl text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed diam nonumy eirmod tempor.
        </p>
      </div>

      <div className='relative grid place-items-center'>
        <OrbitingCircles
          iconSize={40}
          path={true}
        >
          <Ebook />
          <Podcast />
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={30}
          radius={100}
          path={true}
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
