// src/components/MentorProfilePage.tsx
export type HeaderProps = Pick<
  MentorProfileProps,
  'name' | 'profileImage' | 'bio'
>;

export interface Industry {
  name: string;
  description: string;
}

export interface MentorProfileProps {
  name: string;
  role: string;
  company: string;
  university: string;
  bio: string;
  availableHours: string;
  profileImage: string;
  hobbies: string;
  interests: string;
  sideHustles: string;
  location: string;
  industries: Industry[];
  questions: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  onAskQuestion?: () => void;
  onAddToMentorList?: () => void;
}
