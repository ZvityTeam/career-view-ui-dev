'use client';

import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '../button/Button.tsx';

export default function MentorSearch() {
  const categories = [
    'All',
    'Psychology',
    'Engineering',
    'General',
    'Doctor',
    'Actor',
  ];

  return (
    <div className='container mx-auto max-w-6xl px-4 py-8 text-black'>
      <div className='mb-8 text-center'>
        <p className='mx-auto max-w-2xl text-gray-700'>
          Browse through our list of mentors and.... Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        </p>
      </div>

      {/* Search Bar */}
      <div className='relative mb-8'>
        <div className='relative flex items-center rounded-lg bg-gray-50'>
          <Search className='absolute left-4 h-5 w-5 text-gray-400' />
          <input
            type='text'
            placeholder='Search Mentors'
            className='w-full border-none bg-transparent py-3 pl-12 pr-12 focus:outline-none focus:ring-0'
          />
          <Button
            variant='ghost'
            className='absolute right-2'
          >
            <SlidersHorizontal className='h-5 w-5' />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className='flex flex-wrap gap-3'>
        {categories.map((category) => (
          <Button
            key={category}
            variant='outline'
            className='bg-gray-50 text-black hover:bg-gray-100'
          >
            #{category}
          </Button>
        ))}
      </div>
    </div>
  );
}
