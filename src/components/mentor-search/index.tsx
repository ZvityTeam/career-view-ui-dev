'use client';

import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { ListFilter } from 'lucide-react';
import { useState } from 'react';

export default function MentorSearch() {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <CurvedWrapper>
      <div className='w-full rounded-[40px] bg-white p-6'>
        <div className='container mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-4'>
          <div className={'text-center'}>
            <h1 className='text-4xl font-semibold'>Mentors</h1>
            <p className='mt-2 text-gray-500'>
              Search for mentors based on your interests and needs
            </p>
          </div>

          {/*Search bar and filter*/}
          <div className='relative w-full'>
            <FaMagnifyingGlass className='absolute left-4 top-1/2 h-8 w-8 -translate-y-1/2 text-lg text-gray-500' />
            <input
              type='text'
              placeholder='Search for mentors'
              className='h-16 w-full rounded-full bg-slate-200 py-4 pl-16 pr-16 text-xl outline-none ring-0'
            />
            <ListFilter
              onClick={() => setShowFilter((prev) => !prev)}
              className='absolute right-4 top-1/2 h-8 w-8 -translate-y-1/2 cursor-pointer text-lg text-black'
            />
          </div>
          {showFilter && (
            <div
              className={
                'flex h-36 w-full items-center justify-center gap-16 rounded-xl bg-slate-200 px-16 py-6'
              }
            >
              <h3 className={'max-w-44 font-britania text-3xl font-medium'}>
                Filter your search
              </h3>
              <div className={'w-full'}>Filter</div>
            </div>
          )}
        </div>
      </div>
    </CurvedWrapper>
  );
}
