import { useMemo } from 'react';
import { data as mentors } from '../content/mentors';

/**
 * Custom hook to match speaker names with mentor data
 * @param speakerNames Array of speaker names to match with mentors
 * @returns Array of enhanced speaker objects with mentor data
 */
export const useSpeakerDetails = (speakerNames: string[]) => {
  const speakerDetails = useMemo(() => {
    // Match speaker names with mentor data
    return speakerNames.map((name) => {
      console.log('name', name);
      // Find mentor index and data
      const mentorIndex = mentors.findIndex((mentor) => mentor.name === name);
      const mentor = mentorIndex !== -1 ? mentors[mentorIndex] : null;

      // If mentor is found, return enhanced speaker object with index
      if (mentor) {
        return {
          name,
          role: mentor.role || '',
          company: mentor.company || '',
          bio: mentor.shortDesc || mentor.bio || '',
          profileImage: mentor.profileImage,
          isMentor: true,
          mentorIndex, // Add the index for navigation
        };
      }

      // If no mentor match is found, return basic speaker object
      return {
        name,
        role: '',
        company: '',
        bio: '',
        isMentor: false,
        mentorIndex: -1,
      };
    });
  }, [speakerNames]);

  return speakerDetails;
};
