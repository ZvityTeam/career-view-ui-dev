import { useParams } from 'react-router-dom';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext';
import { useEffect } from 'react';
import { Header } from './Header';
import { MentorProfileSection } from './MentorProfileSection';
import { useMentorStore } from '../../store/useMentorStore';
import { Mentor } from '../../types/types';
import { AnimatedPageWrapper } from '../../components/PageWrapper';
import { data as mentorsData } from '../../content/mentors';

export const MentorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { setNavbarTheme } = useNavbarContext();
  const mentors = useMentorStore((state) => state.mentors);
  const setMentors = useMentorStore((state) => state.setMentors);

  useEffect(() => {
    setNavbarTheme(true);
    return () => setNavbarTheme(false);
  }, [setNavbarTheme]);

  useEffect(() => {
    if (mentors.length === 0) {
      setMentors(mentorsData);
    }
  }, [mentors, setMentors]);

  const mentorIndex = Number(id);
  const mentor: Mentor | undefined = mentors[mentorIndex];

  if (!mentor) {
    return <div>Mentor not found</div>;
  }

  return (
    <AnimatedPageWrapper>
      <main className='m-32'>
        <Header
          name={mentor.name}
          profileImage={mentor.profileImage}
          bio={mentor.bio}
        />
        <MentorProfileSection
          name={mentor.name}
          role={mentor.role}
          company={mentor.company}
          university={mentor.university}
          bio={mentor.bio}
          availableHours={mentor.availableHours}
          profileImage={mentor.profileImage}
          hobbies={mentor.hobbies}
          interests={mentor.interests}
          sideHustles={mentor.sideHustles}
          location={mentor.location}
          industries={mentor.industries}
          questions={mentor.questions}
          socialLinks={mentor.socialLinks}
          onAskQuestion={() => {}}
          onAddToMentorList={() => {}}
        />
      </main>
    </AnimatedPageWrapper>
  );
};
