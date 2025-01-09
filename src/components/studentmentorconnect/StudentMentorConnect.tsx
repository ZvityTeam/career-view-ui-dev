import { Button } from '../button/Button.tsx';

export const StudentMentorConnect = () => {
  return (
    <section className='grid min-h-[120vh] place-items-center bg-gradient-to-tr from-yellow-500 via-gray-700 to-black pt-44'>
      <div className='flex min-h-screen w-full p-32'>
        <div className='flex-1'>Styled design</div>
        <div className='flex-1 text-white'>
          <div className='flex flex-col gap-5'>
            <p className='text-4xl italic'>Boost your Career with</p>
            <h3 className='text-6xl'>Student-Mentor Connect</h3>
            <div className='my-6 h-0.5 w-[95%] bg-white' />
            <p className='text-xl'>
              A glimpse of what students and mentors can experience with this
              platform. Explore UI features that highlight what students and
              mentors can expect and achieve.
            </p>
            <div className='flex gap-6'>
              <Button>Browse Mentors</Button>
              <Button variant='secondary'>Become Mentor</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
