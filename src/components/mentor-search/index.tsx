import { useEffect, useMemo, useRef, useState } from 'react';
import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { ListFilter } from 'lucide-react';
import { useMentorStore } from '../../store/useMentorStore.ts';
import { Mentor } from '../../types/types';

export default function MentorSearch() {
  const [showFilter, setShowFilter] = useState(true);
  const mentors = useMentorStore((state) => state.mentors);
  const setMentors = useMentorStore((state) => state.setMentors);

  // Save the original list of mentors in a ref
  const originalMentorsRef = useRef<Mentor[]>([]);
  useEffect(() => {
    // On first load or if the store updates with a new list, capture the original mentors
    if (mentors.length > 0 && originalMentorsRef.current.length === 0) {
      originalMentorsRef.current = mentors;
    }
  }, [mentors]);

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

  // Function to filter mentors from the original list based on current filters
  const filterMentors = (activeFilters: typeof filters) => {
    const filtered = originalMentorsRef.current.filter((mentor) => {
      // For each filter, if the filter is non-empty, check if the mentor value matches.
      const matchesRole = activeFilters.role
        ? mentor.role === activeFilters.role
        : true;
      const matchesUniversity = activeFilters.university
        ? mentor.university === activeFilters.university
        : true;
      const matchesCompany = activeFilters.company
        ? mentor.company === activeFilters.company
        : true;
      const matchesAvailableHours = activeFilters.availableHours
        ? mentor.availableHours === activeFilters.availableHours
        : true;
      const matchesLocation = activeFilters.location
        ? mentor.location === activeFilters.location
        : true;
      // For industry, mentor.industries is an array.
      const matchesIndustry = activeFilters.industry
        ? mentor.industries &&
          mentor.industries.includes(activeFilters.industry)
        : true;

      return (
        matchesRole &&
        matchesUniversity &&
        matchesCompany &&
        matchesAvailableHours &&
        matchesLocation &&
        matchesIndustry
      );
    });
    setMentors(filtered);
  };

  // Handle filter change: update state and filter mentors
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    filterMentors(newFilters);
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
