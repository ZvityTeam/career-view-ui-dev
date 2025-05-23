import { useNavigate } from 'react-router-dom';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import { useMentorStore } from '../../store/useMentorStore';
import { Mentor } from '../../types/types';
import { Marquee } from '../marquee/Marquee';
import { Button } from '../ui/Button';

export default function MeetingsHero() {
  const { getRandomMentors } = useMentorStore();
  const mentors: Mentor[] = getRandomMentors(30);
  const { isMobile, isTablet } = useResponsiveLayout();
  const navigate = useNavigate();

  // Split mentors into three groups of 10 for each column
  const column1Mentors = mentors.slice(0, 10);
  const column2Mentors = mentors.slice(10, 20);
  const column3Mentors = mentors.slice(20, 30);

  // Function to render a single mentor card
  const renderMentorCard = (mentor: Mentor, bgColor: string, index: number) => (
    <div
      key={`${mentor.role}-${index}`}
      className={`${
        isMobile ? 'h-[300px] w-[200px]' : 'h-[450px] w-full'
      } ${bgColor} relative mb-4 flex items-end justify-center overflow-hidden rounded-[2rem] md:rounded-[4rem]`}
    >
      <img
        src={mentor?.profileImage}
        alt={mentor?.role}
        className='absolute inset-0 h-full w-full object-cover object-center'
        loading='lazy'
      />
      <div className='relative z-10 h-[2.5rem] w-full'>
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70'></div>
        <p
          className={`relative z-20 text-center font-avenir ${
            isMobile ? 'text-base' : 'text-lg'
          } font-medium text-white`}
        >
          {mentor.role}
        </p>
      </div>
    </div>
  );

  return (
    <div className='flex w-full flex-col overflow-hidden bg-primary pb-5 pt-14 md:h-screen md:flex-row md:pb-0 md:pt-0'>
      {/* Left Section */}
      <div className='relative flex w-full flex-col justify-center px-8 py-12 md:w-1/2 md:px-16 lg:px-24'>
        <div className='absolute left-24 top-24 opacity-20'>
          <div className='grid grid-cols-10 gap-2'>
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className='h-1.5 w-1.5 rounded-full bg-muted-foreground'
              ></div>
            ))}
          </div>
        </div>
        <div className='max-w-xl space-y-6'>
          <h1 className='font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl'>
            Explore Career Paths with Real Mentors
          </h1>
          <p className='font-avenir text-lg text-muted-foreground text-slate-300 md:text-xl'>
            CareerView helps students connect with industry mentors to gain
            practical, relatable, and honest career insights to make more
            informed decisions about their future careers.
          </p>
          <div className='flex flex-wrap gap-4 pt-4'>
            <Button
              variant={'default'}
              className='hover:bg-[#ffffff] hover:text-black'
              onClick={() => navigate('/student?scrollTo=ask-a-question')}
            >
              Ask a Question
            </Button>
            <Button
              variant={'outline'}
              className='hover:bg-[#ffffff]'
              onClick={() => navigate('/school?scrollTo=schedule-call')}
            >
              Register for a livestream
            </Button>
          </div>
        </div>
      </div>
      {/* Right Section - Marquee */}
      <div className='h-54 w-full overflow-hidden md:h-screen md:w-1/2'>
        <div className='flex h-full space-x-2 px-2'>
          {/* First Column */}
          <div className='hidden flex-1 overflow-hidden md:block'>
            <Marquee
              vertical
              pauseOnHover
              className='[--duration:30s] [--gap:1rem]'
            >
              {column1Mentors.map((mentor, index) =>
                renderMentorCard(
                  mentor,
                  index % 2 === 0 ? 'bg-lightYellow' : 'bg-[#F9A825]',
                  index
                )
              )}
            </Marquee>
          </div>

          {/* Second Column */}
          <div className='flex-1 overflow-hidden'>
            <Marquee
              vertical={!isMobile && !isTablet}
              pauseOnHover
              className='[--duration:40s] [--gap:1rem] [animation-delay:-5s]'
            >
              {column2Mentors.map((mentor, index) =>
                renderMentorCard(
                  mentor,
                  index % 2 === 0 ? 'bg-[#7B3FF2]' : 'bg-[#4CD964]',
                  index
                )
              )}
            </Marquee>
          </div>

          {/* Third Column */}
          <div className='hidden flex-1 overflow-hidden md:block'>
            <Marquee
              vertical
              pauseOnHover
              className='[--duration:30s] [--gap:1rem] [animation-delay:-10s]'
            >
              {column3Mentors.map((mentor, index) =>
                renderMentorCard(
                  mentor,
                  index % 2 === 0 ? 'bg-[#FF7846]' : 'bg-[#5AC8FA]',
                  index
                )
              )}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
