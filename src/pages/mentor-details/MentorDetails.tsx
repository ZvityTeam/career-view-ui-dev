import { useParams } from 'react-router-dom';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';
import { useEffect } from 'react';
import { Header } from './Header.tsx';
import { MentorProfileSection } from './MentorProfileSection.tsx';
import { mentorData } from '../../components/mentors-list';
import BigBrushTimeline from '../../components/brush-stroke-timeline.tsx';

const mentorData2 = {
  name: 'Mark Johnson',
  role: 'Software Developer',
  company: 'TechCorp',
  university: 'Stanford University',
  bio: 'Passionate about mentoring young developers and helping them build strong foundations in programming.',
  availableHours: '9 AM - 5 PM on weekdays',
  profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
  hobbies: 'Football, Singing, and Playing Golf',
  interests: 'Artificial Intelligence, Web Development, and Open Source',
  sideHustles: 'Freelance UI/UX Design, Blogging',
  location: 'San Francisco, USA',
  industries: [
    {
      name: 'E-commerce',
      description: 'Helping build scalable e-commerce platforms',
    },
    {
      name: 'AI & ML',
      description: 'Worked on AI-powered recommendation engines',
    },
  ],
  questions: [
    'How to get started with AI?',
    'What are the best practices for scaling a web app?',
  ],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/markjohnson',
    twitter: 'https://twitter.com/markdev',
    github: 'https://github.com/markjohnson',
  },
  onAskQuestion: () => alert('Ask Question Clicked'),
  onAddToMentorList: () => alert('Mentor Added to List'),
};
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
      <MentorProfileSection {...mentorData2} />
      <BigBrushTimeline />
    </main>
  );
};
