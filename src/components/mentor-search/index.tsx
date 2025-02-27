'use client';

import { ChevronDown, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { CurvedWrapper } from '../CurvedWrapper.tsx';

export default function MentorSearch() {
  const categories = [
    'All',
    'Psychology',
    'Engineering',
    'General',
    'Doctor',
    'Actor',
  ];

  const filters = [
    { name: 'Software, UX..', hasChevron: true },
    { name: 'Experience', hasChevron: true },
    { name: 'Software', hasChevron: true },
    { name: 'Skills', hasChevron: true },
    { name: 'City', hasChevron: true },
    { name: 'Free', hasChevron: true },
    { name: 'Country', hasChevron: true },
    { name: 'Company', hasChevron: true },
    { name: 'Availability', hasChevron: true },
  ];

  return (
    <CurvedWrapper>
      <div className='w-full rounded-[40px] bg-white p-6'>
        <div className='container mx-auto max-w-6xl px-4'>
          {/* Search Bar */}
          <div className='relative mb-8'>
            <div className='relative flex items-center rounded-full bg-gray-100 px-4 py-3'>
              <Search className='h-6 w-6 text-gray-500' />
              <input
                type='text'
                placeholder='Search Mentors'
                className='w-full border-none bg-transparent pl-3 pr-4 text-base focus:outline-none focus:ring-0'
              />
              <Button
                variant='ghost'
                className='ml-auto'
              >
                <div className='flex h-6 w-6 items-center justify-center'>
                  <div className='space-y-1.5'>
                    <div className='h-0.5 w-5 rounded-full bg-gray-500'></div>
                    <div className='ml-2 h-0.5 w-3 rounded-full bg-gray-500'></div>
                    <div className='h-0.5 w-5 rounded-full bg-gray-500'></div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          {/* Filter Section */}
          <div className='mb-8 rounded-3xl bg-gray-100 p-6'>
            <h2 className='mb-6 text-2xl font-bold text-gray-800'>
              Filter your Search
            </h2>

            <div className='flex flex-wrap gap-3'>
              <Button
                variant='outline'
                className='rounded-full bg-white px-4 py-2 font-medium'
              >
                #All
              </Button>

              {filters.map((filter, index) => (
                <Button
                  key={index}
                  variant='outline'
                  className='flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium'
                >
                  {filter.name}
                  {filter.hasChevron && <ChevronDown className='h-4 w-4' />}
                </Button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className='flex flex-wrap gap-3'>
            {categories.map((category) => (
              <Button
                key={category}
                variant='outline'
                className='rounded-full bg-gray-100 px-4 py-2 font-medium hover:bg-gray-200'
              >
                #{category}
              </Button>
            ))}
          </div>

          {/* Pagination Indicator */}
          <div className='mt-8 flex justify-center'>
            <div className='h-3 w-20 rounded-full bg-gradient-to-r from-gray-300 to-gray-500'></div>
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
}
