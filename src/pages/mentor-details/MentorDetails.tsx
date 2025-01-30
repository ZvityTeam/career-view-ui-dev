import { useParams } from 'react-router-dom';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';
import { useEffect } from 'react';
import { Header } from './Header.tsx';
import { MentorProfileSection } from './MentorProfileSection.tsx';
import { mentorData } from '../../components/mentors-list';
import ScrollPathGallery from '../../components/scroll-path-gallary.tsx';

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
      <ScrollPathGallery
        images={[
          'https://images.pexels.com/photos/19376809/pexels-photo-19376809/free-photo-of-pigeons-sitting-on-the-exterior-of-a-residential-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/29823044/pexels-photo-29823044/free-photo-of-reindeer-herd-crossing-snowy-norwegian-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/28277464/pexels-photo-28277464/free-photo-of-a-mountain-covered-in-snow-and-clouds-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/29713560/pexels-photo-29713560/free-photo-of-vibrant-cherry-blossoms-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/26926276/pexels-photo-26926276/free-photo-of-elephant-on-savanna-with-kilimanjaro-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        ]}
      />
    </main>
  );
};
