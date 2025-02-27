import { create } from 'zustand';
import { Mentor } from '../types/types'; // adjust the import path as needed

interface MentorState {
  mentors: Mentor[];
  setMentors: (mentors: Mentor[]) => void;
}

export const useMentorStore = create<MentorState>((set) => ({
  mentors: [],
  setMentors: (mentors: Mentor[]) => set(() => ({ mentors })),
}));
