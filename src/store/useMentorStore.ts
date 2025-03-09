import { create } from 'zustand';
import { Mentor } from '../types/types'; // adjust the import path as needed

interface MentorState {
  mentors: Mentor[];
  setMentors: (mentors: Mentor[]) => void;
  getRandomMentorProfiles: (count: number) => string[];
}

export const useMentorStore = create<MentorState>((set, get) => ({
  mentors: [],
  setMentors: (mentors: Mentor[]) => set(() => ({ mentors })),
  getRandomMentorProfiles: (count: number) => {
    const { mentors } = get();

    // Filter mentors with valid profile images
    const validMentors = mentors.filter(
      (mentor) =>
        typeof mentor.profileImage === 'string' &&
        mentor.profileImage.trim() !== ''
    );

    if (validMentors.length <= count) {
      return validMentors.map((m) => m.profileImage as string);
    }

    return validMentors
      .map((m) => ({
        profileImage: m.profileImage as string,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .slice(0, count)
      .map(({ profileImage }) => profileImage);
  },
}));
