import { FlipWords } from '../ui/flip-words.tsx';
import MentorshipConnection from './mentorship-connection.tsx';

const flipWords = ['Opportunities', 'Pathways', 'Connections', 'Potential'];
export const Hero = () => {
  return (
    <section
      className='z-10 flex h-screen flex-col items-center justify-center gap-5 py-16 pt-32 text-center'
      style={{
        background: `linear-gradient(351deg,rgb(196, 192, 182),rgb(225, 193, 117), #767676, #000000)`,
      }}
    >
      {/* <img
        src={bg1}
        alt={''}
        className={'pointer-events-none absolute -left-[10%] top-1/3 z-10'}
      />
      <img
        src={bg2}
        alt={''}
        className={'pointer-events-none absolute -top-1/3 right-0 z-10'}
      /> */}
      {/* Heading */}
      <div className='z-30'>
        <h1 className='text-[100px] text-white'>
          Unlock{' '}
          <FlipWords
            duration={1500}
            words={flipWords}
            className={'text-yellow-500'}
          />
        </h1>

        {/* Subheading */}
        <p className='mt-4 max-w-5xl text-xl text-gray-100'>
          CareerView helps students connect with industry mentors to gain
          practical, relatable and honest career insights to make more informed
          decisions about their future careers
        </p>
      </div>
      <MentorshipConnection />

      {/* <div className='relative z-10 flex h-[601vh] w-full items-center justify-center'>
        <OrbitingCircles iconSize={40}>
          <Ebook />
          <Podcast />
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={40}
          radius={300}
          reverse
          speed={2}
        >
          <Ebook />
          <LiveStream />
        </OrbitingCircles>
        <Button className='scale-125'>Browse Mentors</Button>
      </div> */}
    </section>
  );
};
