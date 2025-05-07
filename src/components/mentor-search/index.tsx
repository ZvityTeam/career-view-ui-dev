import { ListFilter } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useMentorStore } from '../../store/useMentorStore.ts';
import { Mentor } from '../../types/types';

export default function MentorSearch() {
  const [showFilter, setShowFilter] = useState(false);
  const mentors = useMentorStore((state) => state.mentors);
  const setMentors = useMentorStore((state) => state.setMentors);

  // Save the original list of mentors in a ref
  const originalMentorsRef = useRef<Mentor[]>([]);
  useEffect(() => {
    if (mentors.length > 0 && originalMentorsRef.current.length === 0) {
      originalMentorsRef.current = mentors;
    }
  }, [mentors]);

  // Extract unique values dynamically from the ORIGINAL mentors list
  const uniqueValues = (key: keyof Mentor) => {
    return [
      ...new Set(
        originalMentorsRef.current.map((mentor) => mentor[key]).filter(Boolean)
      ),
    ];
  };

  const uniqueIndustries = useMemo(() => {
    return [
      ...new Set(
        originalMentorsRef.current.flatMap((mentor) => mentor.industries || [])
      ),
    ];
  }, [originalMentorsRef.current]);

  // Define filter state
  const [filters, setFilters] = useState({
    role: '',
    university: '',
    company: '',
    availableHours: '',
    location: '',
    industry: '',
  });

  // State to manage dropdown visibility
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Function to filter mentors from the original list based on current filters
  const filterMentors = (activeFilters: typeof filters) => {
    const filtered = originalMentorsRef.current.filter((mentor) => {
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
    setOpenDropdown(null); // Close dropdown after selection
  };

  // Handle dropdown toggle
  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className='relative grid min-h-[20vh] place-items-center px-4 sm:px-6 lg:px-8'>
      <section className='absolute -bottom-16 -top-16 z-10 flex w-full flex-col items-center justify-center space-y-12 rounded-[40px] bg-white px-6 py-16 sm:space-y-16 sm:rounded-[60px] sm:px-8 sm:py-24 md:min-h-[43vh] lg:space-y-24 lg:rounded-[80px] lg:px-12 lg:py-36'>
        <div className='w-full rounded-[30px] bg-white p-4 sm:rounded-[40px] sm:p-6'>
          <div className='container mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 sm:gap-8'>
            <div className='text-center'>
              <h1 className='text-2xl font-semibold text-black sm:text-3xl lg:text-4xl'>
                Mentors
              </h1>
              <p className='mt-2 text-sm text-gray-500 sm:text-base'>
                Search for mentors based on your interests and needs
              </p>
            </div>

            {/* Search bar and filter */}
            <div className='relative w-full max-w-3xl'>
              <FaMagnifyingGlass className='absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-500 sm:h-8 sm:w-8' />
              <input
                type='text'
                placeholder='Search for mentors'
                className='h-12 w-full rounded-full bg-slate-200 py-3 pl-12 pr-12 text-base placeholder-gray-500 outline-none ring-0 sm:h-16 sm:py-4 sm:pl-16 sm:pr-16 sm:text-xl'
              />
              <ListFilter
                onClick={() => setShowFilter((prev) => !prev)}
                className='absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer text-black sm:h-8 sm:w-8'
              />
            </div>

            {/* Desktop Filter Section */}
            <div className='hidden sm:block'>
              {showFilter && (
                <div className='flex h-36 w-full items-center justify-center gap-16 rounded-xl bg-slate-200 px-16 py-6'>
                  <h3 className='max-w-44 font-britania text-3xl font-medium text-black'>
                    Filter your search
                  </h3>
                  <div className='flex w-full flex-wrap gap-4'>
                    {[
                      { key: 'role', label: 'Role' },
                      { key: 'university', label: 'University' },
                      { key: 'company', label: 'Company' },
                      { key: 'availableHours', label: 'Availability' },
                      { key: 'location', label: 'Location' },
                      { key: 'industry', label: 'Industry' },
                    ].map(({ key, label }) => (
                      <div
                        key={key}
                        className='relative w-44'
                      >
                        {/* Custom Dropdown Trigger */}
                        <div
                          className='flex h-12 w-full cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-white px-2 py-2 text-base text-gray-800'
                          onClick={() => toggleDropdown(key)}
                        >
                          <span>
                            {filters[key as keyof typeof filters] || label}
                          </span>
                          <svg
                            className='h-4 w-4 text-gray-500'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M19 9l-7 7-7-7'
                            />
                          </svg>
                        </div>

                        {/* Custom Dropdown Menu */}
                        {openDropdown === key && (
                          <div className='absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-xl border border-gray-300 bg-white shadow-lg'>
                            <div
                              className='cursor-pointer px-2 py-2 text-gray-500 hover:bg-gray-100'
                              onClick={() =>
                                handleFilterChange(
                                  key as keyof typeof filters,
                                  ''
                                )
                              }
                            >
                              {label}
                            </div>
                            {(key === 'industry'
                              ? uniqueIndustries
                              : uniqueValues(key as keyof Mentor)
                            ).map((option) => {
                              const optionValue =
                                typeof option === 'string'
                                  ? option
                                  : Array.isArray(option)
                                    ? option.join(', ')
                                    : typeof option === 'object' &&
                                        option !== null
                                      ? JSON.stringify(option)
                                      : String(option);

                              return (
                                <div
                                  key={optionValue}
                                  className='cursor-pointer px-2 py-2 text-gray-800 hover:bg-gray-100'
                                  onClick={() =>
                                    handleFilterChange(
                                      key as keyof typeof filters,
                                      optionValue
                                    )
                                  }
                                >
                                  {optionValue}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Filter Modal */}
            {showFilter && (
              <div className='fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60 sm:hidden'>
                <div className='max-h-[85vh] w-11/12 overflow-y-auto rounded-2xl bg-white p-6 shadow-lg'>
                  <div className='mb-5 flex items-center justify-between'>
                    <h3 className='font-britania text-2xl font-medium text-black'>
                      Filter your search
                    </h3>
                    <button
                      onClick={() => setShowFilter(false)}
                      className='hover:text-pastelBlue text-gray-500 transition-colors duration-200'
                    >
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                  <div className='flex flex-col gap-4'>
                    {[
                      { key: 'role', label: 'Role' },
                      { key: 'university', label: 'University' },
                      { key: 'company', label: 'Company' },
                      { key: 'availableHours', label: 'Availability' },
                      { key: 'location', label: 'Location' },
                      { key: 'industry', label: 'Industry' },
                    ].map(({ key, label }) => (
                      <div
                        key={key}
                        className='relative w-full'
                      >
                        {/* Custom Dropdown Trigger */}
                        <div
                          className='flex h-12 w-full cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-slate-100 px-3 py-2 text-base text-gray-800'
                          onClick={() => toggleDropdown(key)}
                        >
                          <span>
                            {filters[key as keyof typeof filters] || label}
                          </span>
                          <svg
                            className='h-4 w-4 text-gray-500'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M19 9l-7 7-7-7'
                            />
                          </svg>
                        </div>

                        {/* Custom Dropdown Menu */}
                        {openDropdown === key && (
                          <div className='absolute z-40 mt-1 max-h-60 w-full overflow-y-auto rounded-xl border border-gray-300 bg-white shadow-lg'>
                            <div
                              className='cursor-pointer px-3 py-2 text-gray-500 hover:bg-gray-100'
                              onClick={() =>
                                handleFilterChange(
                                  key as keyof typeof filters,
                                  ''
                                )
                              }
                            >
                              {label}
                            </div>
                            {(key === 'industry'
                              ? uniqueIndustries
                              : uniqueValues(key as keyof Mentor)
                            ).map((option) => {
                              const optionValue =
                                typeof option === 'string'
                                  ? option
                                  : Array.isArray(option)
                                    ? option.join(', ')
                                    : typeof option === 'object' &&
                                        option !== null
                                      ? JSON.stringify(option)
                                      : String(option);

                              return (
                                <div
                                  key={optionValue}
                                  className='cursor-pointer px-3 py-2 text-gray-800 hover:bg-gray-100'
                                  onClick={() =>
                                    handleFilterChange(
                                      key as keyof typeof filters,
                                      optionValue
                                    )
                                  }
                                >
                                  {optionValue}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
