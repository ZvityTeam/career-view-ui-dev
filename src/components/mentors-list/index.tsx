import { Section } from '../container/Section.tsx';
import { MentorProfileCard } from '../mentor-profile-card';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import { useNavigate } from 'react-router-dom';

export const mentorData = [
  {
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
  },
  {
    name: 'Sarah Thompson',
    role: 'Data Scientist',
    company: 'DataWorks',
    university: 'Harvard University',
    bio: 'Helping students and professionals navigate the field of data science and machine learning.',
    availableHours: '10 AM - 4 PM, Mon-Fri',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    hobbies: 'Reading Sci-Fi, Playing Chess',
    interests: 'Machine Learning, Deep Learning, Data Visualization',
    sideHustles: 'Building AI-powered trading bots',
  },
  {
    name: 'John Carter',
    role: 'Cybersecurity Expert',
    company: 'SecureTech',
    university: 'MIT',
    bio: 'Cybersecurity enthusiast with 10+ years of experience in ethical hacking and security analysis.',
    availableHours: 'Evenings & Weekends',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    hobbies: 'Gaming, Puzzle Solving',
    interests: 'Cybersecurity, Ethical Hacking, Blockchain Security',
    sideHustles: 'Security Consulting, Ethical Hacking Courses',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    company: 'InnoSoft',
    university: 'Yale University',
    bio: 'Bringing ideas to life by bridging the gap between tech and business.',
    availableHours: 'Flexible hours, book in advance',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    hobbies: 'Traveling, Cooking',
    interests: 'Product Design, Agile Development, Growth Hacking',
    sideHustles: 'Startup Advisory, Writing Product Blogs',
  },
  {
    name: 'David Lee',
    role: 'DevOps Engineer',
    company: 'CloudSync',
    university: 'Carnegie Mellon University',
    bio: 'Helping teams build scalable and efficient cloud infrastructure.',
    availableHours: '2 PM - 8 PM, Mon-Fri',
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    hobbies: 'Playing Guitar, Running',
    interests: 'Cloud Computing, Kubernetes, DevOps Automation',
    sideHustles: 'Building DevOps Tools, Teaching Online Courses',
  },
];

export const MentorsList = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const [savedMentors, setSavedMentors] = useLocalStorage(
    'savedMentors',
    [] as typeof mentorData
  );

  const handleAddToMentorList = (mentor: (typeof mentorData)[0]) => {
    if (!savedMentors.some((m: { name: string }) => m.name === mentor.name)) {
      setSavedMentors([...savedMentors, mentor]);
    }
  };

  return (
    <Section className='gap-8'>
      {mentorData.map((item, index) => (
        <MentorProfileCard
          onClick={() => navigate(`/mentor/${index}`)}
          {...item}
          key={index}
          onAddToMentorList={() => handleAddToMentorList(item)}
        />
      ))}
    </Section>
  );
};
