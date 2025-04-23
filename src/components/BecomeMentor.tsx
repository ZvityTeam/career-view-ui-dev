import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { CurvedWrapper } from './CurvedWrapper'; // Adjust path as needed

interface MentorFormData {
  fullName: string;
  dob: string;
  email: string;
  mobile: string;
  state: string;
  profession: string;
  jobTitle: string;
  organization: string;
  industry: string;
  qualification: string;
  university: string;
  highSchool: string;
  highSchoolSubjects: string;
  hobbies: string;
  sideHustles: string;
  profilePicture: File | null;
}

const BecomeMentor: React.FC = () => {
  const [formData, setFormData] = useState<MentorFormData>({
    fullName: '',
    dob: '',
    email: '',
    mobile: '',
    state: '',
    profession: '',
    jobTitle: '',
    organization: '',
    industry: '',
    qualification: '',
    university: '',
    highSchool: '',
    highSchoolSubjects: '',
    hobbies: '',
    sideHustles: '',
    profilePicture: null,
  });
  const [step, setStep] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, profilePicture: file }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='space-y-6 text-lg'>
            <h2 className='mb-6 text-center text-2xl font-bold'>
              Personal Information
            </h2>
            <p className='mb-8 text-center text-gray-600'>
              <span>
                Your email, phone, and date of birth will not be shared
                publicly.
              </span>
            </p>
            <p>
              I am{' '}
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder='e.g. Jane Doe'
                className='inline w-56 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />
              , a dynamic young professional eager to inspire the next
              generation, born on{' '}
              <input
                type='date'
                name='dob'
                value={formData.dob}
                onChange={handleInputChange}
                className='inline w-28 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              (private). You can reach me at{' '}
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='e.g. jane.doe@example.com'
                className='inline w-64 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              and{' '}
              <input
                type='tel'
                name='mobile'
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder='e.g. +61 123 456 789'
                className='inline w-32 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              (private). I am based out of{' '}
              <input
                type='text'
                name='state'
                value={formData.state}
                onChange={handleInputChange}
                placeholder='e.g. Victoria'
                className='inline w-32 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />
              , ready to connect with students and share my journey.
            </p>
            <div className='mt-8 flex justify-end'>
              <button
                className='rounded bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800'
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='space-y-6 text-lg'>
            <h2 className='mb-6 text-center text-2xl font-bold'>
              Professional & Education Details
            </h2>
            <p>
              I am a{' '}
              <input
                type='text'
                name='jobTitle'
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder='e.g. Movie Director'
                className='inline w-48 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              in{' '}
              <input
                type='text'
                name='profession'
                value={formData.profession}
                onChange={handleInputChange}
                placeholder='e.g. Film Making'
                className='inline w-48 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              at{' '}
              <input
                type='text'
                name='organization'
                value={formData.organization}
                onChange={handleInputChange}
                placeholder='e.g. DreamWorks'
                className='inline w-48 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />
              , a role that allows me to innovate and lead in my field. I work
              in the{' '}
              <input
                type='text'
                name='industry'
                value={formData.industry}
                onChange={handleInputChange}
                placeholder='e.g. Arts'
                className='inline w-32 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              industry, where I thrive on creativity and growth. My highest
              qualification is a{' '}
              <input
                type='text'
                name='qualification'
                value={formData.qualification}
                onChange={handleInputChange}
                placeholder='e.g. Bachelor’s'
                className='inline w-32 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              from{' '}
              <input
                type='text'
                name='university'
                value={formData.university}
                onChange={handleInputChange}
                placeholder='e.g. University of Melbourne'
                className='inline w-64 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />
              , which shaped my career path. I attended{' '}
              <input
                type='text'
                name='highSchool'
                value={formData.highSchool}
                onChange={handleInputChange}
                placeholder='e.g. Melbourne High School'
                className='inline w-64 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              for high school, where I studied{' '}
              <input
                type='text'
                name='highSchoolSubjects'
                value={formData.highSchoolSubjects}
                onChange={handleInputChange}
                placeholder='e.g. ATAR Maths, Physics, Drama'
                className='inline w-64 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />
              , building a strong foundation for my future success.
            </p>
            <div className='mt-8 flex justify-between'>
              <button
                className='rounded bg-gray-300 px-4 py-2 font-semibold text-black transition hover:bg-gray-400'
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className='rounded bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800'
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='space-y-6 text-lg'>
            <h2 className='mb-6 text-center text-2xl font-bold'>
              Additional Information
            </h2>
            <p>
              My hobbies include{' '}
              <input
                type='text'
                name='hobbies'
                value={formData.hobbies}
                onChange={handleInputChange}
                placeholder='e.g. hiking, photography'
                className='inline w-64 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />
              , activities that keep me energized and inspired as a young
              professional.
            </p>
            <p>
              I have a side hustle{' '}
              <input
                type='text'
                name='sideHustles'
                value={formData.sideHustles}
                onChange={handleInputChange}
                placeholder='e.g. freelance graphic design'
                className='inline w-64 border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none'
              />{' '}
              (or type "none" if none), which allows me to explore my passions
              and build extra skills outside my main career.
            </p>
            <p>
              Upload a profile picture (portrait, in work attire, facing
              forward):
              <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                className='mt-2 block text-gray-600'
              />
              <span className='text-sm text-gray-500'>
                See examples
              </span>
            </p>
            <div className='mt-8 flex justify-between'>
              <button
                className='rounded bg-gray-300 px-4 py-2 font-semibold text-black transition hover:bg-gray-400'
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className='rounded bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800'
                onClick={() =>
                  alert('Form submitted! (Placeholder for submission logic)')
                }
              >
                Submit My Mentor Profile
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <CurvedWrapper
      curve='both'
      className='mb-32 bg-gray-100'
      minHeight='80vh'
    >
      <div className='container mx-auto px-6 py-12'>
        <h1 className='mb-8 text-center text-4xl font-bold text-black'>
          Become a CareerView Mentor
        </h1>
        <p className='mb-12 text-center text-gray-600'>
          Share the guidance you wish you'd received. Students seek relatable
          career advice—join CareerView to shape their futures with your
          insights.
        </p>
        <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-2'>
          {/* Info Column */}
          <div className='info-column rounded-lg bg-white p-6'>
            <YouTube
              videoId='l_ofR0v0pjY'
              className='mb-6 rounded-lg'
              opts={{
                width: '100%',
                height: '378px',
                playerVars: {
                  autoplay: 1,
                  mute: 1,
                },
              }}
            />
          </div>
          {/* Form Column */}
          <div className='form-column'>
            <div className='mb-6 flex items-center justify-center'>
              <div className='flex items-center'>
                {[1, 2, 3].map((s) => (
                  <React.Fragment key={s}>
                    {s > 1 && (
                      <div
                        className={`h-0.5 w-12 ${step >= s ? 'bg-black' : 'bg-gray-300'}`}
                      />
                    )}
                    <div
                      className={`h-3 w-3 rounded-full ${step >= s ? 'bg-black' : 'bg-gray-300'}`}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
            {renderStep()}
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};

export default BecomeMentor;
