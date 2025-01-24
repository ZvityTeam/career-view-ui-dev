import { Button } from '../button/Button.tsx';

export const SchoolHero = () => {
  return (
    <section
      className='relative min-h-screen bg-cover bg-center bg-no-repeat pt-32'
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg')",
      }}
    >
      <div
        className={
          'absolute left-0 top-20 flex h-96 flex-col justify-center gap-6 rounded-br-full px-24 pb-60 pt-72 text-white backdrop-blur-3xl'
        }
      >
        <h1 className='text-8xl'>School x Connect</h1>
        <p className='max-w-2xl text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
          explicabo itaque necessitatibus. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aspernatur, ex expedita illum laboriosam
          mollitia optio perferendis quod? Officiis.
        </p>
        <Button className='w-36 border-white text-white'>Get a Callback</Button>
      </div>
    </section>
  );
};
