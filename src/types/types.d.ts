// types.ts
export interface Mentor {
  name?: string;
  role?: string;
  shortDesc?: string;
  company?: string;
  university?: string;
  bio?: string;
  availableHours?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profileImage?: any;
  hobbies?: string;
  interests?: string;
  sideHustles?: string;
  location?: string;
  industries?: string[];
  questions?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  email?: string;
  podcastLink?: string;
}

export type HeaderProps =  Pick<Mentor, 'name' | 'profileImage' | 'bio'>;

export interface MentorProfileProps extends Mentor {
  onAskQuestion?: () => void;
  onAddToMentorList?: () => void;
  isAdded?: boolean;
}

export interface Career {
  name: string;
}

export interface Speaker {
  name: string;
  role?: string;
  company?: string;
  bio?: string;
  profileImage?: string | File;
  isMentor?: boolean;
  mentorIndex?: number;
}

export interface Event {
  id: string;
  name: string;
  schoolName: string;
  time: string;
  venue?: string;
  description: string;
  speakers: string[];
  imageUrl: string;
  joiningLink: string;
}