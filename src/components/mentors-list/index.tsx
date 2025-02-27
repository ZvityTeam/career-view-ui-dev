import { Section } from '../container/Section.tsx';
import { MentorProfileCard } from '../mentor-profile-card';
import { useNavigate } from 'react-router-dom';
import useLocalStorageState from '../../hooks/useLocalStorageState.ts';
import { useMentorStore } from '../../store/useMentorStore.ts';

export const MentorsList = () => {
  const mentorData = useMentorStore((state) => state.mentors);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const [savedMentors, setSavedMentors] = useLocalStorageState(
    'savedMentors',
    [] as typeof mentorData
  );

  const toggleMentorInList = (mentor: (typeof mentorData)[0]) => {
    const isAlreadyAdded = savedMentors.some((m) => m.name === mentor.name);

    if (isAlreadyAdded) {
      // Remove from saved list
      setSavedMentors(savedMentors.filter((m) => m.name !== mentor.name));
    } else {
      // Add to saved list
      setSavedMentors([...savedMentors, mentor]);
    }
  };

  return (
    <Section className='gap-8'>
      {mentorData.map((item, index) => {
        const isAdded = savedMentors.some((m) => m.name === item.name);
        return (
          <MentorProfileCard
            {...item}
            key={index}
            isAdded={isAdded}
            onSeeProfile={() => navigate(`/browse-mentors/${index}`)}
            onAddToMentorList={() => toggleMentorInList(item)}
          />
        );
      })}
    </Section>
  );
};
