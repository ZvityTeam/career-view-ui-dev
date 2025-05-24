import { useNavigate } from 'react-router-dom';
import BgEllipse from '../../assets/Ellipse 10@2x.png';
import screenShotImg from '../../assets/Group 318@2x.png';
import { useMentorStore } from '../../store/useMentorStore.ts';
import { Button } from '../ui/Button.tsx';
import { AvatarProfileCard } from './randomlyplacedcomponents/avatar-profile.tsx';
import { Avatar } from './randomlyplacedcomponents/avatar.tsx';
import { QACard } from './randomlyplacedcomponents/qa-card.tsx';
import SearchFieldComponent from './randomlyplacedcomponents/search-field.tsx';

export const StudentMentorConnect = () => {
  const mentors = useMentorStore((state) => state.mentors);
  const navigate = useNavigate();
  const firstMentor = mentors[0];
  const secondMentor = mentors[1];
  const fifthMentor = mentors[4];
  const fourthMentor = mentors[3];

  return (
    <section
      className='grid place-items-center py-32 md:min-h-[100dvh] md:pt-60'
      style={{
        background:
          'linear-gradient(220deg, #000000 0%, #767676 33%, #F1CE7E 71%, #FFFBF0 100%)',
      }}
    >
      <div className='flex w-full gap-20 overflow-hidden px-8 pb-14 pt-10 md:min-h-screen md:overflow-visible md:p-32'>
        {/* Left Side: Floating Elements */}
        <div className='relative hidden flex-1 pr-20 lg:block'>
          {/* Background Ellipses */}
          <div className='float-animation absolute left-[-5%] top-[-30%] z-0 mix-blend-overlay'>
            <img
              src={BgEllipse}
              alt='Bg Ellipse Top'
              className='h-[500px] w-[500px]'
            />
          </div>
          <div className='float-animation absolute bottom-[-35%] right-[-25%] z-0 mix-blend-overlay'>
            <img
              src={BgEllipse}
              alt='Bg Ellipse Bottom'
              className='h-[450px] w-[450px]'
            />
          </div>

          {/* Screenshot Image */}
          <div className='float-animation absolute left-[55%] top-[20%] z-10'>
            <img
              src={screenShotImg}
              alt='Student-Mentor interactions'
              className='h-full w-[1000px]'
            />
          </div>

          {/* Avatar Profile Card */}
          <div className='float-animation absolute left-[15%] top-[-15%] z-20'>
            <AvatarProfileCard mentor={fourthMentor || {}} />
          </div>

          {/* Avatars */}
          <div className='float-animation absolute right-[15%] top-[-5%] z-30'>
            <Avatar
              image={firstMentor?.profileImage || 'https://placehold.co/400'}
              alt={firstMentor?.name || 'Mentor Image'}
              isActive={true}
            />
          </div>
          <div className='float-animation absolute left-[0%] top-[15%] z-30'>
            <Avatar
              size='sm'
              image={secondMentor?.profileImage || 'https://placehold.co/400'}
              alt={firstMentor?.name || 'Mentor Image'}
              isActive={true}
            />
          </div>

          {/* QA Card */}
          <div className='float-animation absolute bottom-[32%] left-[-5%] z-40 scale-75'>
            <QACard mentor={fifthMentor || {}} />
          </div>

          {/* Search Field */}
          <div className='float-animation absolute left-[5%] top-[70%] z-50'>
            <SearchFieldComponent />
          </div>
        </div>

        {/* Right Side: Text and Buttons */}
        <div className='flex-1 text-white'>
          <div className='flex flex-col gap-5'>
            <p className='text-4xl italic'>Student-Mentor Connect:</p>
            <h3 className='text-6xl'>1:1 Online Mentoring </h3>
            <div className='my-6 h-0.5 w-[95%] bg-white' />
            <p className='text-xl'>
              {
                "CareerView's Student-Mentor Connect brings students and mentors together on an interactive platform. Students gain real-world insights, while mentors share their expertise through 1:1 mentoring."
              }
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
              <Button onClick={() => navigate('/browse-mentors')}>
                Browse Mentors
              </Button>
              <Button
                variant='outline'
                onClick={() => navigate(`/mentors?scrollTo=become-mentor`)}
              >
                Become Mentor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
