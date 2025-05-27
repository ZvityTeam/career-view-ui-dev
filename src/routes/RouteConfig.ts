import { BrowseMentors } from '../pages/browse-mentors/BrowseMentors.tsx';
import { Home } from '../pages/home/Home.tsx';
import { MentorDetails } from '../pages/mentor-details/MentorDetails.tsx';
import { Mentors } from '../pages/mentors/mentors.tsx';
import PrivacyPolicyPage from '../pages/PrivacyPolicy/PrivacyPoilicyPage.tsx';
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
      title: 'CareerView | Career Mentoring for Australian Students',
      description:
        'CareerView connects Australian students aged 14–22 with young professionals for personalized career mentoring. Start your journey today!',
      keywords:
        'career mentoring Australia, student career guidance, young professionals mentoring, career advice Australia',
    },
  },
  {
    path: '/student',
    component: Student,
    secured: false,
    metaData: {
      title: 'Student Career Guidance | CareerView Australia',
      description:
        'Explore career paths with CareerView’s mentors. Tailored guidance for Australian students aged 14–22 to achieve their goals.',
      keywords:
        'student career guidance Australia, career advice for students, mentoring for teens Australia',
    },
  },
  {
    path: '/school',
    component: School,
    secured: false,
    metaData: {
      title: 'Career Mentoring for Schools | CareerView Australia',
      description:
        'CareerView partners with Australian schools to provide career mentoring for students aged 14–22. Empower your students today.',
      keywords:
        'career mentoring for schools, school career guidance Australia, student mentoring programs',
    },
  },
  {
    path: '/mentors',
    component: Mentors,
    secured: false,
    metaData: {
      title: 'Meet Our Mentors | CareerView Australia',
      description:
        'Discover experienced mentors on CareerView. Connect with young professionals in Australia to guide your career journey.',
      keywords:
        'career mentors Australia, professional mentoring, career guidance Sydney',
    },
  },
  {
    path: '/browse-mentors',
    component: BrowseMentors,
    secured: false,
    metaData: {
      title: 'Browse Career Mentors | CareerView Australia',
      description:
        'Find the perfect mentor for your career. Browse our curated list of young professionals in Australia on CareerView.',
      keywords: 'browse career mentors Australia',
    },
  },
  {
    path: '/browse-mentors/:id',
    component: MentorDetails,
    secured: false,
    metaData: {
      title: 'Mentor Details | CareerView Australia',
      description:
        'Learn about CareerView’s mentors and their expertise to guide your career in Australia.',
      keywords: 'mentor details Australia, career advice from professionals',
    },
  },
  {
    path: '/resources',
    component: Resources,
    secured: false,
    metaData: {
      title: 'Career Resources & E-books | CareerView Australia',
      description:
        'Access e-books and career resources on CareerView to help Australian students plan their future.',
      keywords:
        'career resources Australia, e-books Australia, career guidance tools',
    },
  },
  {
    path: '/privacy-policy',
    component: PrivacyPolicyPage,
    secured: false,
    metaData: {
      title: 'Privacy Policy | CareerView',
      description:
        'Read CareerView’s privacy policy to understand how we protect your data while connecting Australian students with mentors.',
      keywords: 'privacy policy CareerView',
    },
  },
  {
    path: '/terms-and-conditions',
    component: TermsAndConditionsPage,
    secured: false,
    metaData: {
      title: 'Terms and Conditions | CareerView',
      description:
        'Review CareerView’s terms and conditions for using our mentoring platform in Australia.',
      keywords: 'terms and conditions CareerView',
    },
  },
];
