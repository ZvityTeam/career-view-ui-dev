import React, { useState } from 'react';
import YouTube from 'react-youtube';
import useResponsiveLayout from '../hooks/useResponsiveLayout'; // Adjust path as needed
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
}

const BecomeMentor: React.FC = () => {
  const { isMobile, isTablet } = useResponsiveLayout();

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
  });
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Partial<MentorFormData & { submitError?: string }>>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const validateForm = (): boolean => {
    const newErrors: Partial<MentorFormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.dob.trim()) newErrors.dob = 'Date of birth is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.profession.trim()) newErrors.profession = 'Profession is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.highSchool.trim()) newErrors.highSchool = 'High school is required';
    if (!formData.highSchoolSubjects.trim()) newErrors.highSchoolSubjects = 'High school subjects are required';
    if (!formData.hobbies.trim()) newErrors.hobbies = 'Hobbies are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        // Google Form URL
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdY21gWXe9CcgncjbPXCcDRaQTb62jxz_bFUkvjUjHN1itaaA/formResponse';

        // Form payload for text fields
        const textPayload = {
          'entry.283236330': formData.fullName, // full name
          'entry.1872632309': formData.dob, // dob
          'entry.1755238445': formData.email, // email
          'entry.325343894': formData.mobile, // mobile
          'entry.709087808': formData.state, // state
          'entry.1056982546': formData.profession, // profession
          'entry.327016597': formData.jobTitle, // Job title
          'entry.1983453090': formData.organization, // organization
          'entry.51879886': formData.industry, // industry
          'entry.93708825': formData.qualification, // qualification
          'entry.1549775718': formData.university, // University
          'entry.386331571': formData.highSchool, // High school
          'entry.1098732716': formData.highSchoolSubjects, // High school Subjects
          'entry.771753730': formData.hobbies, // Hobbies
          'entry.2101607953': formData.sideHustles, // Side Hustles
        };

        // Send POST request to Google Form
        await fetch(GOOGLE_FORM_URL, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Forms
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(textPayload).toString(),
        });

        console.log('Form submitted:', formData);
        setFormData({
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
        });
        setStep(1);
        setSuccessMessage('Mentor profile submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ submitError: 'Failed to submit mentor profile. Please try again.' });
      }
    }
  };

  // Responsive form field classes
  const getInputClasses = (width: string) => {
    const baseClasses =
      'border-b-2 border-gray-300 bg-transparent p-1 text-black focus:border-black focus:outline-none';

    if (isMobile) {
      return `${baseClasses} w-full my-2 block`;
    }

    if (isTablet) {
      const tabletWidth =
        width === 'w-32'
          ? 'w-40'
          : width === 'w-48'
            ? 'w-52'
            : width === 'w-56'
              ? 'w-64'
              : width === 'w-64'
                ? 'w-64'
                : 'w-full';
      return `inline ${tabletWidth} ${baseClasses}`;
    }

    return `inline ${width} ${baseClasses}`;
  };

  const renderStep = () => {
    const errorMessages = Object.values(errors).filter((error) => error);

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
            <div className={isMobile ? 'space-y-4' : 'space-y-6'}>
              <p className={isMobile ? 'flex flex-col' : ''}>
                I am{' '}
                {!isMobile && (
                  <input
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder='e.g. Jane Doe'
                    className={getInputClasses('w-56')}
                  />
                )}
                {isMobile && (
                  <>
                    <input
                      type='text'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder='e.g. Jane Doe'
                      className={getInputClasses('w-56')}
                    />
                    <span className='my-2'>
                      , a dynamic young professional eager to inspire the next
                      generation, born on{' '}
                    </span>
                  </>
                )}
                {!isMobile && (
                  <>
                    , a dynamic young professional eager to inspire the next
                    generation, born on{' '}
                  </>
                )}
                <input
                  type='date'
                  name='dob'
                  value={formData.dob}
                  onChange={handleInputChange}
                  className={getInputClasses('w-28')}
                />
                {!isMobile && <> (private). You can reach me at </>}
                {isMobile && (
                  <span className='my-2'> (private). You can reach me at </span>
                )}
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='e.g. jane.doe@example.com'
                  className={getInputClasses('w-64')}
                />
                {!isMobile && <> and </>}
                {isMobile && <span className='my-2'> and </span>}
                <input
                  type='tel'
                  name='mobile'
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder='e.g. +61 123 456 789'
                  className={getInputClasses('w-32')}
                />
                {!isMobile && <> (private). I am based out of </>}
                {isMobile && (
                  <span className='my-2'> (private). I am based out of </span>
                )}
                <input
                  type='text'
                  name='state'
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder='e.g. Victoria'
                  className={getInputClasses('w-32')}
                />
                {!isMobile && (
                  <>, ready to connect with students and share my journey.</>
                )}
                {isMobile && (
                  <span className='my-2'>
                    , ready to connect with students and share my journey.
                  </span>
                )}
              </p>
            </div>
            {errorMessages.length > 0 && (
              <div className='mt-4 rounded bg-pink-100 p-4 text-red-600'>
                <p className='font-semibold'>Please fix the following errors:</p>
                <ul className='list-disc pl-5'>
                  {errorMessages.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className='mt-8 flex justify-end'>
              <button
                className='w-full rounded bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800 sm:w-auto'
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
            <div className={isMobile ? 'flex flex-col space-y-4' : ''}>
              <p className={isMobile ? 'flex flex-col' : ''}>
                I am a{' '}
                <input
                  type='text'
                  name='jobTitle'
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder='e.g. Movie Director'
                  className={getInputClasses('w-48')}
                />
                {!isMobile && <> in </>}
                {isMobile && <span className='my-2'> in </span>}
                <input
                  type='text'
                  name='profession'
                  value={formData.profession}
                  onChange={handleInputChange}
                  placeholder='e.g. Film Making'
                  className={getInputClasses('w-48')}
                />
                {!isMobile && <> at </>}
                {isMobile && <span className='my-2'> at </span>}
                <input
                  type='text'
                  name='organization'
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder='e.g. DreamWorks'
                  className={getInputClasses('w-48')}
                />
                {!isMobile && (
                  <>
                    , a role that allows me to innovate and lead in my field. I
                    work in the{' '}
                  </>
                )}
                {isMobile && (
                  <span className='my-2'>
                    , a role that allows me to innovate and lead in my field. I
                    work in the{' '}
                  </span>
                )}
                <input
                  type='text'
                  name='industry'
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder='e.g. Arts'
                  className={getInputClasses('w-32')}
                />
                {!isMobile && (
                  <>
                    {' '}
                    industry, where I thrive on creativity and growth. My
                    highest qualification is a{' '}
                  </>
                )}
                {isMobile && (
                  <span className='my-2'>
                    {' '}
                    industry, where I thrive on creativity and growth. My
                    highest qualification is a{' '}
                  </span>
                )}
                <input
                  type='text'
                  name='qualification'
                  value={formData.qualification}
                  onChange={handleInputChange}
                  placeholder="e.g. Bachelor's"
                  className={getInputClasses('w-32')}
                />
                {!isMobile && <> from </>}
                {isMobile && <span className='my-2'> from </span>}
                <input
                  type='text'
                  name='university'
                  value={formData.university}
                  onChange={handleInputChange}
                  placeholder='e.g. University of Melbourne'
                  className={getInputClasses('w-64')}
                />
                {!isMobile && <>, which shaped my career path. I attended </>}
                {isMobile && (
                  <span className='my-2'>
                    , which shaped my career path. I attended{' '}
                  </span>
                )}
                <input
                  type='text'
                  name='highSchool'
                  value={formData.highSchool}
                  onChange={handleInputChange}
                  placeholder='e.g. Melbourne High School'
                  className={getInputClasses('w-64')}
                />
                {!isMobile && <> for high school, where I studied </>}
                {isMobile && (
                  <span className='my-2'>
                    {' '}
                    for high school, where I studied{' '}
                  </span>
                )}
                <input
                  type='text'
                  name='highSchoolSubjects'
                  value={formData.highSchoolSubjects}
                  onChange={handleInputChange}
                  placeholder='e.g. ATAR Maths, Physics, Drama'
                  className={getInputClasses('w-64')}
                />
                {!isMobile && (
                  <>, building a strong foundation for my future success.</>
                )}
                {isMobile && (
                  <span className='my-2'>
                    , building a strong foundation for my future success.
                  </span>
                )}
              </p>
            </div>
            {errorMessages.length > 0 && (
              <div className='mt-4 rounded bg-pink-100 p-4 text-red-600'>
                <p className='font-semibold'>Please fix the following errors:</p>
                <ul className='list-disc pl-5'>
                  {errorMessages.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className='mt-8 flex flex-wrap justify-between gap-4'>
              <button
                className='w-full rounded bg-gray-300 px-4 py-2 font-semibold text-black transition hover:bg-gray-400 sm:w-auto'
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className='w-full rounded bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800 sm:w-auto'
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
            <div className={isMobile ? 'flex flex-col space-y-4' : ''}>
              <p className={isMobile ? 'flex flex-col' : ''}>
                My hobbies include{' '}
                <input
                  type='text'
                  name='hobbies'
                  value={formData.hobbies}
                  onChange={handleInputChange}
                  placeholder='e.g. hiking, photography'
                  className={getInputClasses('w-64')}
                />
                {!isMobile && (
                  <>
                    , activities that keep me energized and inspired as a young
                    professional.
                  </>
                )}
                {isMobile && (
                  <span className='my-2'>
                    , activities that keep me energized and inspired as a young
                    professional.
                  </span>
                )}
              </p>
              <p className={isMobile ? 'flex flex-col' : ''}>
                I have a side hustle{' '}
                <input
                  type='text'
                  name='sideHustles'
                  value={formData.sideHustles}
                  onChange={handleInputChange}
                  placeholder='e.g. freelance graphic design'
                  className={getInputClasses('w-64')}
                />
                {!isMobile && (
                  <>
                    {' '}
                    (or type "none" if none), which allows me to explore my
                    passions and build extra skills outside my main career.
                  </>
                )}
                {isMobile && (
                  <span className='my-2'>
                    {' '}
                    (or type "none" if none), which allows me to explore my
                    passions and build extra skills outside my main career.
                  </span>
                )}
              </p>
            </div>
            {successMessage && (
              <div className='mt-4 rounded bg-green-100 p-4 text-green-600'>
                <p className='font-semibold'>{successMessage}</p>
              </div>
            )}
            {errorMessages.length > 0 && (
              <div className='mt-4 rounded bg-pink-100 p-4 text-red-600'>
                <p className='font-semibold'>Please fix the following errors:</p>
                <ul className='list-disc pl-5'>
                  {errorMessages.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className='mt-8 flex flex-wrap justify-between gap-4'>
              <button
                className='w-full rounded bg-gray-300 px-4 py-2 font-semibold text-black transition hover:bg-gray-400 sm:w-auto'
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className='w-full rounded bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800 sm:w-auto'
                onClick={handleSubmit}
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

  const getYouTubeOpts = () => {
    let height = '378px';

    if (isMobile) {
      height = '240px';
    } else if (isTablet) {
      height = '320px';
    }

    return {
      width: '100%',
      height,
      playerVars: {
        autoplay: 1,
        mute: 1,
      },
    };
  };

  return (
    <CurvedWrapper
      curve='both'
      className='mb-[120vh] md:mb-32 bg-gray-100'
      minHeight={isMobile ? '180vh' : '80vh'}
    >
      <div className='container mx-auto px-4 py-8 sm:px-6 sm:py-12'>
        <h1 className='mb-6 text-center text-3xl font-bold text-black sm:mb-8 sm:text-4xl'>
          Become a CareerView Mentor
        </h1>
        <p className='mb-8 px-2 text-center text-gray-600 sm:mb-12 sm:px-0'>
          Share the guidance you wish you'd received. Students seek relatable
          career advice—join CareerView to shape their futures with your
          insights.
        </p>
        <div
          className={`grid grid-cols-1 ${isMobile || isTablet ? 'gap-8' : 'gap-12 lg:grid-cols-2'}`}
        >
          {(!isMobile || (isMobile && step === 1)) && (
            <div className='info-column rounded-lg bg-white p-4 shadow-sm sm:p-6'>
              <YouTube
                videoId='l_ofR0v0pjY'
                className='mb-6 rounded-lg'
                opts={getYouTubeOpts()}
              />
              {isMobile && (
                <div className='mt-4 text-center'>
                  <h3 className='text-lg font-semibold'>
                    Why Become a Mentor?
                  </h3>
                  <p className='mt-2 text-sm text-gray-600'>
                    Joining as a mentor allows you to make a significant impact
                    on students' career paths while building your professional
                    network.
                  </p>
                </div>
              )}
            </div>
          )}
          <div className='form-column rounded-lg bg-white p-4 shadow-sm sm:p-6'>
            <div className='mb-6 flex items-center justify-center'>
              <div className='flex items-center'>
                {[1, 2, 3].map((s) => (
                  <React.Fragment key={s}>
                    {s > 1 && (
                      <div
                        className={`h-0.5 w-8 sm:w-12 ${step >= s ? 'bg-black' : 'bg-gray-300'}`}
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