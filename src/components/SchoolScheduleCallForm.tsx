import React, { useState } from 'react';
import Select from 'react-select';
import { careers, data as mentors } from '../content/mentors';
import { CurvedWrapper } from './CurvedWrapper';
import { Button } from './ui/Button';

interface FormData {
  fullName: string;
  email: string;
  schoolName: string;
  questions: string;
  selections: string[];
  dateRange: string;
  industry: string;
  numSpeakers: string;
}

interface Errors extends Partial<FormData> {
  selectionError?: string;
  submitError?: string;
}

const industries = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'arts', label: 'Arts & Entertainment' },
];

const SchoolScheduleCallForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    schoolName: '',
    questions: '',
    selections: [],
    dateRange: '',
    industry: '',
    numSpeakers: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'mentors' | 'careers'>('all');

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.schoolName.trim())
      newErrors.schoolName = 'School name is required';
    if (!formData.questions.trim())
      newErrors.questions = 'Request details are required';
    if (!formData.dateRange.trim())
      newErrors.dateRange = 'Date range is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.numSpeakers.trim()) {
      newErrors.numSpeakers = 'Number of speakers is required';
    } else if (
      isNaN(Number(formData.numSpeakers)) ||
      Number(formData.numSpeakers) < 1
    ) {
      newErrors.numSpeakers = 'Must be a valid number (1 or more)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSelectionChange = (selectedOptions: any) => {
    const selections = selectedOptions
      ? selectedOptions.map((opt: any) => opt.value)
      : [];
    setFormData((prev) => ({ ...prev, selections }));
    setErrors((prev) => ({ ...prev, selectionError: undefined }));
  };

  const filteredItems = () => {
    const query = searchQuery.toLowerCase().trim();
    const mentorOptions = mentors
      .filter(
        (mentor) =>
          (!query ||
            (mentor.name && mentor.name.toLowerCase().includes(query)) ||
            (mentor.role && mentor.role.toLowerCase().includes(query))) &&
          (filter === 'all' || filter === 'mentors')
      )
      .map((mentor) => ({
        value: mentor.name,
        label: `${mentor.name} - ${mentor.role || 'No Role'}`,
      }));

    const careerOptions = careers
      .filter(
        (career) =>
          (!query || career.name.toLowerCase().includes(query)) &&
          (filter === 'all' || filter === 'careers')
      )
      .map((career) => ({
        value: career.name,
        label: career.name,
      }));

    return [...mentorOptions, ...careerOptions];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    if (validateForm()) {
      try {
        const formattedSelections = formData.selections
          .map((selection) => {
            const mentor = mentors.find((m) => m.name === selection);
            if (mentor) {
              return `${mentor.name} - ${mentor.role || 'No Role'}`;
            }
            const career = careers.find((c) => c.name === selection);
            if (career) {
              return career.name;
            }
            return selection;
          })
          .join(', ');

        const GOOGLE_FORM_URL =
          'https://docs.google.com/forms/d/e/1FAIpQLSd6PozhzFurxYiwPcpSAPxrmWvjdx2h_BLOOm7MDMpGHGf0-A/formResponse';
        const formPayload = {
          'entry.1299404302': formData.fullName,
          'entry.1521851492': formData.email,
          'entry.1224065352': formData.schoolName,
          'entry.783412761': formData.questions,
          'entry.842032282': formattedSelections,
          'entry.1234567890': formData.dateRange,
          'entry.0987654321': formData.industry,
          'entry.1122334455': formData.numSpeakers,
        };

        await fetch(GOOGLE_FORM_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formPayload).toString(),
        });

        setFormData({
          fullName: '',
          email: '',
          schoolName: '',
          questions: '',
          selections: [],
          dateRange: '',
          industry: '',
          numSpeakers: '',
        });
        setSearchQuery('');
        setSuccessMessage('Call request submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({
          submitError: 'Failed to submit call request. Please try again.',
        });
      }
    }
  };

  const errorMessages = Object.values(errors).filter((error) => error);

  return (
    <CurvedWrapper
      curve='bottom'
      className='z-30 -mb-3 md:mt-0'
      innerClassName='overflow-hidden lg:px-0 lg:py-0'
    >
      <div className='flex w-full items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50'>
        <div className='w-full overflow-hidden bg-white'>
          <div className='flex flex-col lg:flex-row'>
            {/* Left Column: Image, Title, and Description */}
            <div className='relative flex hidden bg-gradient-to-br from-indigo-700 to-blue-600 text-white md:block lg:w-1/2'>
              <img
                src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                alt='Professional career talk in classroom'
                className='absolute inset-0 h-full w-full object-cover opacity-30'
              />
              <div className='absolute top-1/3 z-10 flex flex-col items-center justify-center'>
                <h1 className='mx-10 mb-6 text-4xl font-bold leading-tight md:text-7xl'>
                  Inspire Students with Expert Career Talks
                </h1>
                <p className='mx-10 text-2xl opacity-90'>
                  Connect your students with top professionals for inspiring
                  career guidance. Your information is secure and private.
                </p>
              </div>
            </div>
            {/* Right Column: Form */}
            <div className='p-8 md:mb-10 lg:w-1/2'>
              {successMessage && (
                <div className='mb-6 rounded-lg bg-green-100 p-4 text-green-700 shadow-sm'>
                  {successMessage}
                </div>
              )}
              {errorMessages.length > 0 && (
                <div className='mb-6 rounded-lg bg-red-100 p-4 text-red-700 shadow-sm'>
                  <p className='font-semibold'>
                    Please fix the following errors:
                  </p>
                  <ul className='list-disc pl-5'>
                    {errorMessages.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <h1 className='mb-2 block text-center text-3xl font-extrabold tracking-tight text-black sm:hidden sm:text-4xl'>
                Schedule a Call
              </h1>
              <form
                onSubmit={handleSubmit}
                className='space-y-6'
              >
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='fullName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Full Name *
                    </label>
                    <input
                      id='fullName'
                      type='text'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder='e.g. John Smith'
                      className='mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-900 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500'
                    />
                    {errors.fullName && (
                      <p className='mt-1 text-sm text-red-500'>
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email *
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='e.g. john.smith@example.com'
                      className='mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-900 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500'
                    />
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-500'>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='schoolName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      School Name *
                    </label>
                    <input
                      id='schoolName'
                      type='text'
                      name='schoolName'
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      placeholder='e.g. Springfield High'
                      className='mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-900 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500'
                    />
                    {errors.schoolName && (
                      <p className='mt-1 text-sm text-red-500'>
                        {errors.schoolName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='dateRange'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Preferred Date Range *
                    </label>
                    <input
                      id='dateRange'
                      type='text'
                      name='dateRange'
                      value={formData.dateRange}
                      onChange={handleInputChange}
                      placeholder='e.g. November 10-15, 2025'
                      className='mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-900 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500'
                    />
                    {errors.dateRange && (
                      <p className='mt-1 text-sm text-red-500'>
                        {errors.dateRange}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='industry'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Industry *
                    </label>
                    <select
                      id='industry'
                      name='industry'
                      value={formData.industry}
                      onChange={handleInputChange}
                      className='mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-900 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500'
                    >
                      <option value=''>Select an industry</option>
                      {industries.map((industry) => (
                        <option
                          key={industry.value}
                          value={industry.value}
                        >
                          {industry.label}
                        </option>
                      ))}
                    </select>
                    {errors.industry && (
                      <p className='mt-1 text-sm text-red-500'>
                        {errors.industry}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='numSpeakers'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Number of Speakers *
                    </label>
                    <input
                      id='numSpeakers'
                      type='number'
                      name='numSpeakers'
                      value={formData.numSpeakers}
                      onChange={handleInputChange}
                      placeholder='e.g. 2'
                      min='1'
                      className='mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-900 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500'
                    />
                    {errors.numSpeakers && (
                      <p className='mt-1 text-sm text-red-500'>
                        {errors.numSpeakers}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='questions'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Request Details *
                  </label>
                  <textarea
                    id='questions'
                    name='questions'
                    value={formData.questions}
                    onChange={handleInputChange}
                    placeholder='Describe your request or special requirements'
                    className='mt-1 min-h-[120px] w-full rounded-md border border-gray-300 bg-gray-50 p-3 text-gray-900 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500'
                  />
                  {errors.questions && (
                    <p className='mt-1 text-sm text-red-500'>
                      {errors.questions}
                    </p>
                  )}
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Invite Mentors or Careers (Optional)
                  </label>
                  <div className='mt-2 flex space-x-2'>
                    {['all', 'mentors', 'careers'].map((type) => (
                      <button
                        key={type}
                        type='button'
                        onClick={() =>
                          setFilter(type as 'all' | 'mentors' | 'careers')
                        }
                        className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          filter === type
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                  <Select
                    isMulti
                    options={filteredItems()}
                    onChange={handleSelectionChange}
                    onInputChange={setSearchQuery}
                    placeholder='Search mentors or careers...'
                    className='mt-2'
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: '#d1d5db',
                        background: '#f9fafb',
                        borderRadius: '0.375rem',
                        padding: '0.25rem',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                        '&:hover': { borderColor: '#4f46e5' },
                      }),
                      menu: (base) => ({
                        ...base,
                        background: 'white',
                        borderRadius: '0.375rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }),
                      option: (base, { isFocused }) => ({
                        ...base,
                        background: isFocused ? '#4f46e5' : 'white',
                        color: isFocused ? 'white' : '#1f2937',
                        borderRadius: '0.25rem',
                      }),
                    }}
                  />
                </div>
                <div className='flex justify-end'>
                  <Button
                    variant='default'
                    size='lg'
                    className='transform rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-indigo-700'
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};

export default SchoolScheduleCallForm;
