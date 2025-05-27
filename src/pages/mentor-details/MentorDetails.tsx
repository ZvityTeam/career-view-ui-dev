import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatedPageWrapper } from '../../components/PageWrapper';
import { data as mentorsData } from '../../content/mentors';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext';
import useLocalStorageState from '../../hooks/useLocalStorageState.ts';
import { useMentorStore } from '../../store/useMentorStore';
import { Mentor } from '../../types/types';
import { Header } from './Header';
import { MentorProfileSection } from './MentorProfileSection';

export const MentorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { setNavbarTheme } = useNavbarContext();
  const mentors = useMentorStore((state) => state.mentors);
  const setMentors = useMentorStore((state) => state.setMentors);
  const mentorData = useMentorStore((state) => state.mentors);
  const [savedMentors, setSavedMentors] = useLocalStorageState(
    'savedMentors',
    [] as typeof mentorData
  );

  const toggleMentorInList = (mentor: (typeof mentorData)[0]) => {
    const isAlreadyAdded = savedMentors.some((m) => m.name === mentor.name);
    if (isAlreadyAdded) {
      setSavedMentors(savedMentors.filter((m) => m.name !== mentor.name));
    } else {
      setSavedMentors([...savedMentors, mentor]);
    }
  };

  useEffect(() => {
    setNavbarTheme(true);
    return () => setNavbarTheme(false);
  }, [setNavbarTheme]);

  useEffect(() => {
    if (mentors.length === 0) {
      setMentors(mentorsData);
    }
  }, [mentors, setMentors]);
  const navigate = useNavigate();

  const mentorIndex = Number(id);
  const mentor: Mentor | undefined = mentors[mentorIndex];

  if (!mentor) {
    return (
      <div className='text-center text-base text-gray-600 sm:text-lg'>
        Mentor not found
      </div>
    );
  }

  const isAdded = savedMentors.some((m) => m.name === mentor.name);
  return (
    <AnimatedPageWrapper>
      <main className='mx-0 py-36 sm:py-8 md:pl-5 md:pr-10'>
        <Header
          name={mentor.name}
          profileImage={mentor.profileImage}
          bio={mentor.shortDesc}
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
          onAskQuestion={() =>
            navigate('/student?scrollTo=ask-a-question', {
              state: { index: id },
            })
          }
          onAddToMentorList={() => toggleMentorInList(mentor)}
          podcastLink={mentor.podcastLink}
          isAdded={isAdded}
        />
      </main>
    </AnimatedPageWrapper>
  );
};
