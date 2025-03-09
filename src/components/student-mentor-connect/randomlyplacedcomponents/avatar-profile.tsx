import { Mail, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar } from './avatar.tsx';
import { Mentor } from '../../../types/types';

interface AvatarProfileCardProps {
  mentor: Mentor;
}

export function AvatarProfileCard({ mentor }: AvatarProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='relative z-30 w-[320px] rounded-[24px] bg-white p-6 shadow'
    >
      {/* Top Row: Avatar + Rating */}
      <div className='flex items-end justify-between'>
        {/* Avatar with isActive badge (green dot) */}
        <div
          className={
            'absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2'
          }
        >
          <Avatar
            image={mentor.profileImage || 'https://placehold.co/400'}
            alt={mentor.name || 'Mentor Avatar'}
            isActive
            size='sm'
          />
        </div>

        {/* Rating (Static for now, replace with dynamic rating if available) */}
        <div className='ml-2 flex items-center space-x-1'>
          <Star className='h-5 w-5 text-yellow-400' />
          <span className='font-medium text-black'>4.9</span>
        </div>
      </div>

      {/* Name + Title */}
      <h2 className='mt-3 text-xl font-bold'>
        {mentor.name || 'Unknown Mentor'}
      </h2>
      <p className='text-sm text-gray-600'>
        {mentor.role ? `${mentor.role}, ` : ''}{' '}
        {mentor.company || mentor.university || ''}
      </p>

      {/* Short Info / Bio */}
      <div className='mt-3 truncate text-sm leading-relaxed text-gray-600'>
        {mentor.bio || 'No bio available'}{' '}
        <span className='mx-2 text-gray-400'>|</span>
        {mentor.industries?.join(', ') || 'Industry Unknown'}{' '}
        <span className='mx-2 text-gray-400'>|</span>
        {mentor.availableHours
          ? `Available ${mentor.availableHours}`
          : 'Availability not specified'}
      </div>

      {/* Availability Section (Static placeholder for now, update when real data exists) */}
      <div className='mt-4 flex items-center space-x-4'>
        <div className='flex flex-col items-center'>
          <div className='mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-700'>
            SAT
          </div>
          <span className='text-xl font-bold'>20</span>
        </div>

        {/* Next available date/time (Placeholder) */}
        <div className='text-sm text-gray-600'>
          <p>Next available on</p>
          <p className='font-medium'>Wed, 2 Feb, 10AM</p>
        </div>
      </div>

      {/* Response Time */}
      <div className='mt-4 flex items-center justify-center rounded-[10px] bg-gray-100 px-3 py-2 text-sm text-gray-500'>
        <Mail className='mr-2 h-4 w-4' />
        Responds in 2-3 hours
      </div>
    </motion.div>
  );
}
