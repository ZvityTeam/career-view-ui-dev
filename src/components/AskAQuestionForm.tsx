import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { careers, data as mentors } from '../content/mentors';
import { CurvedWrapper } from './CurvedWrapper';
import { Button } from './ui/Button';

interface FormData {
  fullName: string;
  email: string;
  schoolName: string;
  questions: string;
  selections: string[];
}

interface Errors extends Partial<FormData> {
  selectionError?: string;
  submitError?: string;
}

const AskAQuestionForm: React.FC = () => {
  console.log(
    'Mentors without profile images:',
    mentors
      .filter((item) => item.profileImage === '' || item.profileImage === null)
      .map((item) => item.name)
  );
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    schoolName: '',
    questions: '',
    selections: [],
  });
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'mentors' | 'careers'>('all');
  const location = useLocation();
  const selectedMentorIndex: number | null = location.state?.index || null;

  useEffect(() => {
    if (selectedMentorIndex !== null && mentors[selectedMentorIndex]) {
      const mentorName = mentors[selectedMentorIndex].name || 'Unnamed Mentor';
      setFormData((prev) => ({
        ...prev,
        selections: [mentorName],
      }));
    }
  }, [selectedMentorIndex]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    if (validateForm()) {
      try {
        // Format selections as "name - role" for mentors, or just name for careers
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

        // Google Form URL and entry IDs
        const GOOGLE_FORM_URL =
          'https://docs.google.com/forms/d/e/1FAIpQLSeCrz2Z8w89X_Lz0aKrgYfUVSBLfwCg0xnMMSh85vdsnLwmkQ/formResponse';
        const formPayload = {
          'entry.1643577665': formData.fullName, // Full name
          'entry.1484831134': formData.email, // Email
          'entry.553258979': formData.schoolName, // School name
          'entry.930158641': formData.questions, // Questions
          'entry.1344470018': formattedSelections, // Mentor (selections)
        };

        // Send POST request to Google Form
        await fetch(GOOGLE_FORM_URL, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Forms
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formPayload).toString(),
        });

        console.log('Form submitted:', formData);
        setFormData({
          fullName: '',
          email: '',
          schoolName: '',
          questions: '',
          selections: [],
        });
        setSearchQuery('');
        setSuccessMessage('Question submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({
          submitError: 'Failed to submit question. Please try again.',
        });
      }
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
  const errorMessages = Object.values(errors).filter((error) => error);

  return (
    <CurvedWrapper
      curve='both'
      className='z-20 mb-96 mt-16 bg-gray-100 md:mb-72 md:mt-32'
      innerClassName='pt-0'
      minHeight='110dvh'
    >
      <div className='container mx-auto mt-16 px-4 py-8 sm:mt-3 sm:px-6 sm:py-12'>
        <h1 className='mb-2 text-center text-2xl font-extrabold tracking-tight text-black sm:text-4xl'>
          Ask a Question
        </h1>
        <div className='grid grid-cols-1'>
          <div className='form-column w-full overflow-y-auto rounded-lg bg-gradient-to-br from-white to-gray-50 p-4 pt-0 sm:p-6 sm:pt-0'>
            <div className='space-y-6 text-base sm:text-lg'>
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
                  className='inline w-48 border-b-2 border-gray-300 bg-transparent p-1 text-black transition-colors duration-300 focus:border-blue-400 focus:outline-none sm:w-56'
                />
                , and you can reach me at{' '}
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='e.g. john.smith@example.com'
                  className='inline w-56 border-b-2 border-gray-300 bg-transparent p-1 text-black transition-colors duration-300 focus:border-blue-400 focus:outline-none sm:w-64'
                />{' '}
                (private). I study at{' '}
                <input
                  type='text'
                  name='schoolName'
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  placeholder='e.g. Springfield High'
                  className='inline w-56 border-b-2 border-gray-300 bg-transparent p-1 text-black transition-colors duration-300 focus:border-blue-400 focus:outline-none sm:w-64'
                />{' '}
                (optional).
              </p>
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
              </p>
              <div className='mb-6'>
                <div className='mb-2 flex flex-col items-start justify-between sm:flex-row sm:items-center'>
                  <label className='mb-1 font-bold text-black'>
                    I’d like to ask (select mentors or careers)
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
                                <span className='text-base font-semibold text-black sm:text-lg'>
                                  {item.type === 'career' && (
                                    <span className='block text-xs text-gray-600 sm:text-sm'>
                                      All
                                    </span>
                                  )}
                                  {item.display}
                                </span>
                                {item.type === 'mentor' && (
                                  <span className='block text-xs text-gray-600 sm:text-sm'>
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
                            className={`flex-none cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg ${
                              formData.selections.includes(item.name)
                                ? 'border-blue-400 bg-blue-50'
                                : 'border-gray-300'
                            }`}
                          >
                            <div className='flex items-center space-x-3'>
                              {getAvatar(item.display, item.profileImage)}
                              <div>
                                <span className='text-base font-semibold text-black sm:text-lg'>
                                  {item.type === 'career' && (
                                    <span className='block text-xs text-gray-600 sm:text-sm'>
                                      All
                                    </span>
                                  )}
                                  {item.display}
                                </span>
                                {item.type === 'mentor' && (
                                  <span className='block text-xs text-gray-600 sm:text-sm'>
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
              </div>
              {successMessage && (
                <div className='mt-4 rounded bg-green-100 p-4 text-green-600'>
                  <p className='font-semibold'>{successMessage}</p>
                </div>
              )}
              {errorMessages.length > 0 && (
                <div className='mt-4 rounded bg-pink-100 p-4 text-red-600'>
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
