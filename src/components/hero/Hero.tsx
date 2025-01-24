import { RectOrbitFramer } from '../rect-orbit-framer/RectOrbitFramer.tsx';
import { Button } from '../button/Button.tsx';
import { FlipWords } from '../ui/flip-words.tsx';

const flipWords = ['Opportunities', 'Pathways', 'Connections'];
export const Hero = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-52 space-y-32 bg-gradient-to-b from-slate-900 via-slate-800 to-yellow-100 py-16 pt-32 text-center'>
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
        <RectOrbitFramer
          width={700}
          height={400}
          cornerRadius={200}
          rectangleClassName='stroke-white'
          rectangleStrokeWidth={2}
        >
          <div className='h-16 w-16 rounded-full bg-white'>E-Books</div>
          <div className='h-16 w-16 rounded-full bg-white'>Livestream</div>
        </RectOrbitFramer>
        <RectOrbitFramer
          duration={12}
          width={500}
          height={300}
          cornerRadius={150}
          rectangleClassName='stroke-white'
          rectangleStrokeWidth={2}
        >
          <div className='h-16 w-16 rounded-full bg-white'>E-Books</div>
          <div className='h-16 w-16 rounded-full bg-white'>Livestream</div>
        </RectOrbitFramer>
        <RectOrbitFramer
          duration={10}
          width={300}
          height={150}
          cornerRadius={80}
          rectangleClassName='stroke-white'
          rectangleStrokeWidth={2}
        >
          <div className='h-16 w-16 rounded-full bg-white'>E-Books</div>
          <div className='h-16 w-16 rounded-full bg-white'>Livestream</div>
        </RectOrbitFramer>
        <Button className='scale-125'>Browse Mentors</Button>
      </div>
    </section>
  );
};
