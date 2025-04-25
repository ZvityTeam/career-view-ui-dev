import React, { useState } from 'react';
import { data as mentors, careers } from '../content/mentors';
import { CurvedWrapper } from './CurvedWrapper';
import { Button } from './ui/Button';
import { Career } from '../types/types';

interface FormData {
  fullName: string;
  email: string;
  schoolName: string;
  questions: string;
  selections: string[];
}

interface Errors extends Partial<FormData> {
  selectionError?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getUniqueRoles(data: any[]): Career[] {
  const uniqueRoles = [
    ...new Set(data.map((item) => item.role).filter((role) => role !== 'N/A')),
  ];
  return uniqueRoles.map((role) => ({ name: role }));
}

const AskAQuestionForm: React.FC = () => {
  console.log(getUniqueRoles(mentors));
  console.log(mentors?.length);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    schoolName: '',
    questions: '',
    selections: [],
  });
  const [errors, setErrors] = useState<Errors>({});
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
    if (!formData.questions.trim())
      newErrors.questions = 'Questions are required';
    if (formData.selections.length === 0) {
      newErrors.selectionError = 'Please select at least one mentor or career';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSelectionToggle = (item: string) => {
    setFormData((prev) => {
      const selections = prev.selections.includes(item)
        ? prev.selections.filter((sel) => sel !== item)
        : [...prev.selections, item];
      return { ...prev, selections };
    });
    setErrors((prev) => ({ ...prev, selectionError: undefined }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = () => {
    const query = searchQuery.toLowerCase().trim();
    const mentorResults = mentors
      .filter(
        (mentor) =>
          (!query ||
            (mentor.name && mentor.name.toLowerCase().includes(query)) ||
            (mentor.role && mentor.role.toLowerCase().includes(query))) &&
          (filter === 'all' || filter === 'mentors')
      )
      .map((mentor) => ({
        name: mentor.name || 'Unnamed Mentor',
        display: mentor.name || 'Unnamed Mentor',
        type: 'mentor' as const,
        role: mentor.role || 'No Role',
        profileImage: mentor.profileImage,
      }));

    const careerResults = careers
      .filter(
        (career) =>
          (!query || career.name.toLowerCase().includes(query)) &&
          (filter === 'all' || filter === 'careers')
      )
      .map((career) => ({
        name: career.name,
        display: career.name,
        type: 'career' as const,
        role: '',
        profileImage: null,
      }));

    return [...mentorResults, ...careerResults];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        fullName: '',
        email: '',
        schoolName: '',
        questions: '',
        selections: [],
      });
      setSearchQuery('');
      alert('Question submitted successfully!');
    }
  };

  const getAvatar = (name: string, profileImage: string | null) => {
    if (profileImage) {
      return (
        <div className='relative rounded-full bg-gradient-to-br from-yellow-300 via-white to-blue-300 p-[2px]'>
          <img
            src={profileImage}
            alt={name}
            className='h-12 w-12 rounded-full object-cover'
          />
        </div>
      );
    }
    const initial = name.charAt(0).toUpperCase();
    return (
      <div className='relative rounded-full bg-gradient-to-r from-yellow-400 to-blue-400 p-[2px]'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-lg font-medium text-black'>
          {initial}
        </div>
      </div>
    );
  };

  const items = filteredItems();
  const midPoint = Math.ceil(items.length / 2);
  const topRow = items.slice(0, midPoint);
  const bottomRow = items.slice(midPoint);

  return (
    <CurvedWrapper
      curve='both'
      className='z-20 mb-36 mt-32 bg-gray-100'
      innerClassName='pt-0'
      minHeight='90vh'
    >
      <div className='container mx-auto mt-36 px-6 py-12'>
        <h1 className='mb-2 text-center text-4xl font-extrabold tracking-tight text-black'>
          Ask a Question
        </h1>
        <div className='grid grid-cols-1'>
          <div className='form-column max-h-[80vh] w-full overflow-y-auto rounded-lg bg-gradient-to-br from-white to-gray-50 p-6 pt-0'>
            <div className='space-y-6 text-lg'>
              <p className='mb-8 text-center text-gray-600'>
                Your email will not be shared publicly.
              </p>
              <p>
                My name is{' '}
                <input
                  type='text'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder='e.g. John Smith'
                  className='inline w-56 border-b-2 border-gray-300 bg-transparent p-1 text-black transition-colors duration-300 focus:border-blue-400 focus:outline-none'
                />
                , and you can reach me at{' '}
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='e.g. john.smith@example.com'
                  className='inline w-64 border-b-2 border-gray-300 bg-transparent p-1 text-black transition-colors duration-300 focus:border-blue-400 focus:outline-none'
                />{' '}
                (private). I study at{' '}
                <input
                  type='text'
                  name='schoolName'
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  placeholder='e.g. Springfield High'
                  className='inline w-64 border-b-2 border-gray-300 bg-transparent p-1 text-black transition-colors duration-300 focus:border-blue-400 focus:outline-none'
                />{' '}
                (optional).
              </p>
              {errors.fullName && (
                <p className='mt-1 text-sm text-gray-600'>{errors.fullName}</p>
              )}
              {errors.email && (
                <p className='mt-1 text-sm text-gray-600'>{errors.email}</p>
              )}
              <p className='mb-4'>
                I have a question:{' '}
                <textarea
                  name='questions'
                  value={formData.questions}
                  onChange={handleInputChange}
                  rows={2}
                  className='mt-2 w-full border-b-2 border-gray-300 bg-transparent p-1 text-black transition-colors duration-300 focus:border-blue-400 focus:outline-none'
                  placeholder='What would you like to ask?'
                />
                {errors.questions && (
                  <p className='mt-1 text-sm text-gray-600'>
                    {errors.questions}
                  </p>
                )}
              </p>
              <div className='mb-6'>
                <div className='mb-2 flex items-center justify-between'>
                  <label className='mb-1 font-bold text-black'>
                    I’d like to ask (select mentors or careers) *
                  </label>
                  <div className='mb-2 flex space-x-2'>
                    <button
                      type='button'
                      onClick={() => setFilter('all')}
                      className={`rounded-md px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        filter === 'all'
                          ? 'bg-gradient-to-br from-white to-blue-300 text-black'
                          : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
                      }`}
                    >
                      All
                    </button>
                    <button
                      type='button'
                      onClick={() => setFilter('mentors')}
                      className={`rounded-md px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        filter === 'mentors'
                          ? 'bg-gradient-to-br from-white to-blue-300 text-black'
                          : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
                      }`}
                    >
                      Mentors
                    </button>
                    <button
                      type='button'
                      onClick={() => setFilter('careers')}
                      className={`rounded-md px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        filter === 'careers'
                          ? 'bg-gradient-to-br from-white to-blue-300 text-black'
                          : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
                      }`}
                    >
                      Careers
                    </button>
                  </div>
                </div>
                <input
                  type='text'
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className='mb-2 w-full border-b-2 border-gray-300 bg-transparent p-2 text-black transition-colors duration-300 focus:border-blue-400 focus:outline-none'
                  placeholder='Search mentors or careers...'
                />
                <div className='overflow-x-auto rounded-md border border-gray-300 bg-white p-2 shadow-md'>
                  {items.length === 0 ? (
                    <p className='p-4 text-sm text-gray-500'>
                      No results found
                    </p>
                  ) : (
                    <div className='flex flex-col space-y-2'>
                      <div className='flex space-x-2'>
                        {topRow.map((item) => (
                          <div
                            key={item.name}
                            onClick={() => handleSelectionToggle(item.name)}
                            className={`flex-none cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg ${
                              formData.selections.includes(item.name)
                                ? 'border-blue-400 bg-blue-50'
                                : 'border-gray-300'
                            }`}
                          >
                            <div className='flex items-center space-x-3'>
                              {getAvatar(item.display, item.profileImage)}
                              <div>
                                <span className='text-lg font-semibold text-black'>
                                  {item.type === 'career' && (
                                    <span className='block text-sm text-gray-600'>
                                      All
                                    </span>
                                  )}
                                  {item.display}
                                </span>
                                {item.type === 'mentor' && (
                                  <span className='block text-sm text-gray-600'>
                                    {item.role}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className='flex space-x-2'>
                        {bottomRow.map((item) => (
                          <div
                            key={item.name}
                            onClick={() => handleSelectionToggle(item.name)}
                            className={`w-72 flex-none cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg ${
                              formData.selections.includes(item.name)
                                ? 'border-blue-400 bg-blue-50'
                                : 'border-gray-300'
                            }`}
                          >
                            <div className='flex items-center space-x-3'>
                              {getAvatar(item.display, item.profileImage)}
                              <div>
                                <span className='text-lg font-semibold text-black'>
                                  {item.type === 'career' && (
                                    <span className='block text-sm text-gray-600'>
                                      All
                                    </span>
                                  )}
                                  {item.display}
                                </span>
                                {item.type === 'mentor' && (
                                  <span className='block text-sm text-gray-600'>
                                    {item.role}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {errors.selectionError && (
                  <p className='mt-1 text-sm text-gray-600'>
                    {errors.selectionError}
                  </p>
                )}
              </div>
              <div className='mt-8 flex justify-end'>
                <Button
                  variant={'default'}
                  size={'lg'}
                  onClick={handleSubmit}
                >
                  Submit Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};

export default AskAQuestionForm;
