import { Home } from '../pages/home/Home.tsx';
import { Student } from '../pages/student/Student.tsx';
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
];
