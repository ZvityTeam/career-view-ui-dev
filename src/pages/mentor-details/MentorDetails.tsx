import { useParams } from 'react-router-dom';
import { mentorData } from '../../components/mentors-list';
import { MentorProfileProps } from '../../components/mentor-profile-card';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';
import { useEffect } from 'react';
import { Section } from '../../components/container/Section.tsx';

export const MentorDetails = () => {
  const { id } = useParams<string>();
  const { setNavbarTheme } = useNavbarContext();
  useEffect(() => {
    setNavbarTheme(true);

    return () => setNavbarTheme(false);
  }, [setNavbarTheme]);

  const mentor = mentorData[id as unknown as number];
  return (
    <main className={'mt-32'}>
      <Header {...mentor} />
    </main>
  );
};

type HeaderProps = Pick<MentorProfileProps, 'name' | 'profileImage' | 'bio'>;

const Header = ({ name, profileImage, bio }: HeaderProps) => {
  return (
    <Section className={'flex min-h-72 w-screen flex-col gap-20'}>
      <div className='relative w-full'>
        <img
          src={'https://placehold.co/600x50'}
          className='w-full object-contain'
        />
        <img
          src={profileImage}
          className='absolute -bottom-1/2 left-1/2 -translate-x-1/2 rounded-full border-2 border-white'
          alt={name}
        />
      </div>
      <div className={'flex flex-col items-center gap-2'}>
        <p className={'text-4xl font-bold'}>{name}</p>
        <p className={'text-2xl font-[100] italic'}>{bio}</p>
      </div>
    </Section>
  );
};
