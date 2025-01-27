import { Button } from '../ui/Button.tsx';
import { Avatar } from './randomlyplacedcomponents/avatar.tsx';
import { AvatarProfileCard } from './randomlyplacedcomponents/avatar-profile.tsx';
import { QACard } from './randomlyplacedcomponents/qa-card.tsx';
import SearchFieldComponent from './randomlyplacedcomponents/search-field.tsx';

export const StudentMentorConnect = () => {
  return (
    <section className='grid min-h-[120vh] place-items-center bg-gradient-to-tr from-yellow-500 via-gray-700 to-black pt-44'>
      <div className='flex min-h-screen w-full gap-20 p-32'>
        <div className='relative flex-1 pr-20'>
          <div className={'absolute right-0 -translate-y-1/2'}>
            <Avatar
              image={'https://placehold.co/400'}
              alt={'Image'}
              isActive={true}
            />
          </div>
          <div className={'absolute left-0 top-[10%]'}>
            <Avatar
              size={'sm'}
              image={'https://placehold.co/400'}
              alt={'Image'}
              isActive={true}
            />
          </div>
          <div className={'absolute -top-[20%] right-[30%]'}>
            <AvatarProfileCard />
          </div>{' '}
          <div className={'absolute -left-[10%] bottom-[25%] scale-75'}>
            <QACard />
          </div>{' '}
          <div className={'absolute bottom-[10%] right-0'}>
            <SearchFieldComponent />
          </div>
        </div>
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
