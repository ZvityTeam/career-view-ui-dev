'use client';

import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { ListFilter } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useMentorStore } from '../../store/useMentorStore.ts';
import { Mentor } from '../../types/types';

export default function MentorSearch() {
  const [showFilter, setShowFilter] = useState(true);
  const mentors = useMentorStore((state) => state.mentors);

  // Extract unique values dynamically from the mentors list
  const uniqueValues = (key: keyof Mentor) => {
    return [...new Set(mentors.map((mentor) => mentor[key]).filter(Boolean))];
  };

  const uniqueIndustries = useMemo(() => {
    return [...new Set(mentors.flatMap((mentor) => mentor.industries || []))];
  }, [mentors]);

  // Define filter state
  const [filters, setFilters] = useState({
    role: '',
    university: '',
    company: '',
    availableHours: '',
    location: '',
    industry: '',
  });

  // Handle filter change
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
  };

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
              <div className={'flex w-full flex-wrap gap-4'}>
                {[
                  { key: 'role', label: 'Role' },
                  { key: 'university', label: 'University' },
                  { key: 'company', label: 'Company' },
                  { key: 'availableHours', label: 'Availability' },
                  { key: 'location', label: 'Location' },
                  { key: 'industry', label: 'Industry' },
                ].map(({ key, label }) => (
                  <select
                    key={key}
                    className='h-12 w-44 rounded-md border px-4 py-2'
                    value={filters[key as keyof typeof filters]}
                    onChange={(e) =>
                      handleFilterChange(
                        key as keyof typeof filters,
                        e.target.value
                      )
                    }
                  >
                    <option value=''>{label}</option>
                    {(key === 'industry'
                      ? uniqueIndustries
                      : uniqueValues(key as keyof Mentor)
                    ).map((option) => (
                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CurvedWrapper>
  );
}
