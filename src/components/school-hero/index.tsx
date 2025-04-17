import { useEffect } from 'react';
import schoolHero from '../../assets/schoolHreroBg.png';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';
import { Button } from '../ui/Button.tsx';

export const SchoolHero = () => {
  const { setBgBlur } = useNavbarContext();
  useEffect(() => {
    setBgBlur(true);

    return () => setBgBlur(false);
  }, [setBgBlur]);
  return (
    <section
      className='relative min-h-screen bg-cover bg-center bg-no-repeat pt-32'
      style={{
        backgroundImage: `url(${schoolHero})`,
      }}
    >
      <div
        className={
          'absolute left-0 top-20 flex h-96 flex-col justify-center gap-6 rounded-br-full px-24 pb-60 pt-72 text-white backdrop-blur-3xl'
        }
      >
        <h1 className='text-8xl'>School x Connect</h1>
        <p className='max-w-2xl text-2xl'>
          Struggling to find industry speakers for your students? Save time and
          effort—connect with our network of Young Professionals who can deliver
          insightful talks to your school via livestream!
        </p>
        <Button className='w-36 border-white text-white'>
          Schedule a Session
        </Button>
      </div>
    </section>
  );
};
