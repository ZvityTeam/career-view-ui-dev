import { Home } from '../pages/home/Home.tsx';
import { Student } from '../pages/student/Student.tsx';
import { Route } from './types.ts';
import { School } from '../pages/school/School.tsx';
import { Mentor } from '../pages/mentor/Mentor.tsx';
import { MentorDetails } from '../pages/mentor-details/MentorDetails.tsx';
import { AskAQuestion } from '../pages/ask-a-question/AskAQuestion.tsx';

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
    path: '/mentor',
    component: Mentor,
    secured: false,
    metaData: {
      title: 'Career View - Mentor',
    },
  },
  {
    path: '/mentor/:id',
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
];
