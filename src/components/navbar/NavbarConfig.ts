import { NavbarItem } from './types.ts';

export const NAV_ITEMS: NavbarItem[] = [
  {
    label: 'Student',
    link: '/student',
  },
  {
    label: 'Mentor',
    link: '/mentors',
  },
  {
    label: 'School',
    link: '/school',
  },
];

export const FOOTER_NAV_ITEMS: NavbarItem[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Resources',
    link: '/resources',
  },
  {
    label: 'Ask a Question',
    link: '/student?scrollTo=ask-a-question',
  },
  {
    label: 'Become a Mentor',
    link: '/mentors?scrollTo=become-mentor',
  },
  {
    label: 'Schedule a Livestream Event',
    link: '/school?scrollTo=schedule-call',
  },
];
