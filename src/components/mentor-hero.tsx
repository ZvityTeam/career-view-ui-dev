import { useNavigate } from 'react-router-dom';
import mentorHeroBg from '../assets/CareerView -3137.jpg';
import { Button } from './ui/Button.tsx';

export const MentorHero = () => {
  const navigate = useNavigate();
  return (
    <section
      className='relative min-h-screen bg-cover bg-center bg-no-repeat pt-32'
      style={{
        backgroundImage: `url(${mentorHeroBg})`,
      }}
    >
      <div
        className={
          'absolute left-0 top-20 flex h-96 flex-col justify-center gap-6 rounded-br-full bg-black/10 px-24 pb-60 pt-72 text-white backdrop-blur-3xl'
        }
      >
        <h1 className='text-8xl'>Share Your Journey</h1>
        <p className='max-w-2xl text-2xl'>
          Join CareerView as a mentor and make a difference by guiding students
          toward their dreams with your expertise.
        </p>
        <Button
          className='w-36 border-white text-white'
          onClick={() => navigate(`/become-a-mentor`)}
        >
          Become a mentor
        </Button>
      </div>
    </section>
  );
};
