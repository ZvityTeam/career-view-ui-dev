import { create } from 'zustand';
import { Mentor } from '../types/types'; // adjust the import path as needed

interface MentorState {
  mentors: Mentor[];
  initialMentors: Mentor[];
  setMentors: (mentors: Mentor[]) => void;
  getRandomMentorProfiles: (count: number) => string[];
  getRandomMentors: (count: number) => Mentor[];
}

export const useMentorStore = create<MentorState>((set, get) => ({
  mentors: [],
  initialMentors: [],
  setMentors: (mentors: Mentor[]) => set((state) => ({ 
    mentors, 
    initialMentors: state.initialMentors.length === 0 ? mentors : state.initialMentors 
  })),
  getRandomMentorProfiles: (count: number) => {
    const { initialMentors } = get();

    // Filter mentors with valid profile images
    const validMentors = initialMentors.filter(
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
  getRandomMentors: (count: number) => {
    const { initialMentors } = get();

    // Filter mentors with valid profile images and non-null required fields
    const validMentors = initialMentors.filter(
      (mentor) =>
        typeof mentor.name === 'string' &&
        mentor.name.trim() !== '' &&
        typeof mentor.role === 'string' &&
        mentor.role.trim() !== '' &&
        typeof mentor.bio === 'string' &&
        mentor.bio.trim() !== '' &&
        typeof mentor.profileImage === 'string' &&
        mentor.profileImage.trim() !== ''
    );

    if (validMentors.length <= count) {
      return validMentors.map((m) => ({
        name: m.name,
        role: m.role,
        bio: m.bio,
        profileImage: m.profileImage,
      }));
    }

    return validMentors
      .map((m) => ({
        name: m.name,
        role: m.role,
        bio: m.bio,
        profileImage: m.profileImage,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .slice(0, count)
      .map(({ sort, ...mentor }) => mentor); // Remove the sort key before returning
  },
}));
