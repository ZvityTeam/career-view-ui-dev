import { BrowseMentors } from '../pages/browse-mentors/BrowseMentors.tsx';
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
      title: 'CareerView',
    },
  },
  {
    path: '/student',
    component: Student,
    secured: false,
    metaData: {
      title: 'CareerView - Student',
    },
  },
  {
    path: '/school',
    component: School,
    secured: false,
    metaData: {
      title: 'CareerView - School',
    },
  },
  {
    path: '/mentors',
    component: Mentors,
    secured: false,
    metaData: {
      title: 'CareerView - Mentor',
    },
  },
  {
    path: '/browse-mentors',
    component: BrowseMentors,
    secured: false,
    metaData: {
      title: 'CareerView - Mentor',
    },
  },
  {
    path: '/browse-mentors/:id',
    component: MentorDetails,
    secured: false,
    metaData: {
      title: 'CareerView - Mentor Details',
    },
  },
  {
    path: '/resources',
    component: Resources,
    secured: false,
    metaData: {
      title: 'CareerView - E books',
    },
  },
  {
    path: '/privacy-policy',
    component: PrivacyPoilicyPage,
    secured: false,
    metaData: {
      title: 'CareerView - Privacy Policy',
    },
  },
  {
    path: '/terms-and-conditions',
    component: TermsAndConditionsPage,
    secured: false,
    metaData: {
      title: 'CareerView - Terms and Conditions',
    },
  },
];
