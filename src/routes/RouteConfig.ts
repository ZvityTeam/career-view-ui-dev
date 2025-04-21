import { AskAQuestion } from '../pages/ask-a-question/AskAQuestion.tsx';
import { BecomeAMentor } from '../pages/become-a-mentor/BecomeAMentor.tsx';
import { BrowseMentors } from '../pages/browse-mentors/BrowseMentors.tsx';
import { ContactUs } from '../pages/contact-us/ContactUs.tsx';
import { Home } from '../pages/home/Home.tsx';
import { MentorDetails } from '../pages/mentor-details/MentorDetails.tsx';
import { Mentors } from '../pages/mentors/mentors.tsx';
import PrivacyPoilicyPage from '../pages/PrivacyPolicy/PrivacyPoilicyPage.tsx';
import { Resources } from '../pages/resources/resources.tsx';
import { School } from '../pages/school/School.tsx';
import { Student } from '../pages/student/Student.tsx';
import TermsAndConditionsPage from '../pages/TermsAndConditions/TermsAndConditionsPage.tsx';
import { Route } from './types.ts';

export const ROUTES: Route[] = [
  {
    path: '/',
    component: Home,
    secured: false,
    metaData: {
      title: 'Career View - Home',
    },
  },
  {
    path: '/student',
    component: Student,
    secured: false,
    metaData: {
      title: 'Career View - Student',
    },
  },
  {
    path: '/school',
    component: School,
    secured: false,
    metaData: {
      title: 'Career View - School',
    },
  },
  {
    path: '/mentors',
    component: Mentors,
    secured: false,
    metaData: {
      title: 'Career View - School',
    },
  },
  {
    path: '/browse-mentors',
    component: BrowseMentors,
    secured: false,
    metaData: {
      title: 'Career View - Mentor',
    },
  },
  {
    path: '/browse-mentors/:id',
    component: MentorDetails,
    secured: false,
    metaData: {
      title: 'Career View - Mentor Details',
    },
  },
  {
    path: '/ask-a-question',
    component: AskAQuestion,
    secured: false,
    metaData: {
      title: 'Career View - Ask a question',
    },
  },
  {
    path: '/contact-us',
    component: ContactUs,
    secured: false,
    metaData: {
      title: 'Career View - Contact Us',
    },
  },
  {
    path: '/become-a-mentor',
    component: BecomeAMentor,
    secured: false,
    metaData: {
      title: 'Career View - Become a Mentor',
    },
  },
  {
    path: '/resources',
    component: Resources,
    secured: false,
    metaData: {
      title: 'Career View - E books',
    },
  },
  {
    path: '/privacy-policy',
    component: PrivacyPoilicyPage,
    secured: false,
    metaData: {
      title: 'Career View - E books',
    },
  },
  {
    path: '/terms-and-conditions',
    component: TermsAndConditionsPage,
    secured: false,
    metaData: {
      title: 'Career View - E books',
    },
  },
];
