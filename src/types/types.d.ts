// types.ts
export interface Mentor {
  name?: string;
  role?: string;
  shortDesc?: string;
  company?: string;
  university?: string;
  bio?: string;
  availableHours?: string;
  profileImage?: string;
  hobbies?: string;
  interests?: string;
  sideHustles?: string;
  location?: string;
  industries?: string[];
  questions?: string[];
  socialLinks?: {r
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