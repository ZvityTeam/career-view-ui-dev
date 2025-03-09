import { Button } from '../ui/Button.tsx';
import { Avatar } from './randomlyplacedcomponents/avatar.tsx';
import { AvatarProfileCard } from './randomlyplacedcomponents/avatar-profile.tsx';
import { QACard } from './randomlyplacedcomponents/qa-card.tsx';
import SearchFieldComponent from './randomlyplacedcomponents/search-field.tsx';
import { useMentorStore } from '../../store/useMentorStore.ts';

export const StudentMentorConnect = () => {
  const mentors = useMentorStore((state) => state.mentors);
  const firstMentor = mentors[0];
  const secondMentor = mentors[1];
  const fifthMentor = mentors[4];
  const fourthMentor = mentors[3];

  return (
    <section className='grid min-h-[120vh] place-items-center bg-gradient-to-tr from-yellow-500 via-gray-700 to-black pt-44'>
      <div className='flex min-h-screen w-full gap-20 p-32'>
        <div className='relative flex-1 pr-20'>
          <div className={'float-animation absolute right-0 -translate-y-1/2'}>
            <Avatar
              image={firstMentor?.profileImage || 'https://placehold.co/400'}
              alt={firstMentor?.name || 'Mentor Image'}
              isActive={true}
            />
          </div>
          <div className={'float-animation absolute left-0 top-[10%]'}>
            <Avatar
              size={'sm'}
              image={secondMentor?.profileImage || 'https://placehold.co/400'}
              alt={firstMentor?.name || 'Mentor Image'}
              isActive={true}
            />
          </div>
          <div className={'float-animation absolute -top-[20%] right-[30%]'}>
            <AvatarProfileCard mentor={fourthMentor || {}} />
          </div>{' '}
          <div
            className={
              'float-animation absolute -left-[10%] bottom-[25%] scale-75'
            }
          >
            <QACard mentor={fifthMentor || {}} />
          </div>{' '}
          <div className={'float-animation absolute bottom-[10%] right-0'}>
            <SearchFieldComponent />
          </div>
        </div>
        <div className='flex-1 text-white'>
          <div className='flex flex-col gap-5'>
            <p className='text-4xl italic'>Student-Mentor Connect:</p>
            <h3 className='text-6xl'>Your Career Compass</h3>
            <div className='my-6 h-0.5 w-[95%] bg-white' />
            <p className='text-xl'>
              {firstMentor?.name
                ? `${firstMentor.name} is a ${firstMentor.role} at ${firstMentor.company}.`
                : 'CareerView’s Student-Mentor Connect brings students and mentors together on an interactive platform. Students gain real-world insights, while mentors share their expertise through 1:1 mentoring.'}
            </p>
            {firstMentor?.email && (
              <p className='text-lg'>Contact: {firstMentor.email}</p>
            )}
            {firstMentor?.socialLinks && (
              <div className='flex gap-4'>
                {firstMentor.socialLinks.linkedin && (
                  <a
                    href={firstMentor.socialLinks.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 underline'
                  >
                    LinkedIn
                  </a>
                )}
                {firstMentor.socialLinks.twitter && (
                  <a
                    href={firstMentor.socialLinks.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 underline'
                  >
                    Twitter
                  </a>
                )}
                {firstMentor.socialLinks.github && (
                  <a
                    href={firstMentor.socialLinks.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 underline'
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
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
