import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import { useMentorStore } from '../../store/useMentorStore';
import { Section } from '../container/Section';
import ListWrapper from '../list-wrapper.tsx';
import { MentorProfileCard } from '../mentor-profile-card';
import { Button } from '../ui/Button';

export const MentorsList = () => {
  const mentorData = useMentorStore((state) => state.mentors);
  console.log(mentorData);
  const navigate = useNavigate();
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

  return (
    <ListWrapper
      data={mentorData}
      pageSize={10}
      // optional: perform any additional logic when loading next page
      next={() => {}}
      viewMoreButton={
        <div className={'flex justify-center'}>
          <Button
            variant='outline'
            className='mx-auto border-black text-black hover:bg-black hover:text-white'
          >
            View More <ArrowDown />
          </Button>
        </div>
      }
    >
      {(items) => (
        <Section className='mt-44 gap-8'>
          {items.map((item, index) => {
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
      )}
    </ListWrapper>
  );
};
