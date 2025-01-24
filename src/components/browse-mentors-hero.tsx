import { Button } from './button/Button.tsx';

export const BrowseMentorsHero = () => {
  return (
    <section
      className={'flex min-h-screen flex-col items-center bg-zinc-900 pt-44'}
    >
      <div className='mt-24 space-y-16 text-center'>
        <h1 className='text-8xl font-bold text-white'>
          Mentor <span className={'text-yellow-500'}>Network</span>{' '}
        </h1>

        <p className='mt-4 max-w-5xl text-xl text-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed diam nonumy eirmod tempor.
        </p>

        <Button variant={'outline'}>Ask a question</Button>
      </div>
    </section>
  );
};
