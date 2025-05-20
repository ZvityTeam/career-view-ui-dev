import { useNavigate } from 'react-router-dom';
import mentorHeroBg from '../assets/CareerView -3137.jpg';
import { Button } from './ui/Button.tsx';

export const MentorHero = () => {
  const navigate = useNavigate();
  return (
    <section
      className='relative min-h-[90dvh] bg-cover bg-center bg-no-repeat pt-16 sm:min-h-screen sm:pt-32'
      style={{
        backgroundImage: `url(${mentorHeroBg})`,
      }}
    >
      <div
        className={
          'top-22 absolute left-0 flex h-auto flex-col justify-center gap-4 rounded-br-[10rem] bg-black/10 px-6 py-8 text-white backdrop-blur-3xl sm:top-20 sm:h-96 sm:gap-6 sm:rounded-br-full sm:px-24 sm:pb-60 sm:pt-72'
        }
      >
        <h1 className='text-4xl sm:text-8xl'>Share Your Journey</h1>
        <p className='max-w-lg text-lg sm:max-w-2xl sm:text-2xl'>
          Join CareerView as a mentor and make a difference by guiding students
          toward their dreams with your expertise.
        </p>
        <Button
          className='w-36 border-white text-white'
          onClick={() => navigate(`/mentors?scrollTo=become-mentor`)}
        >
          Become a mentor
        </Button>
      </div>
    </section>
  );
};
