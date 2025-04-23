import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMentorStore } from '../store/useMentorStore.ts';
import { Mentor } from '../types/types';
import { OutlinedInputWithButton } from './input-box/InputBox.tsx';
import { Button } from './ui/Button.tsx';
import { Textarea } from './ui/test-area.tsx';

// Schema & Types
const formSchema = z.object({
  fullName: z.string().min(3, 'Full Name must be at least 3 characters'),
  dateOfBirth: z
    .string()
    .regex(
      /^\d{2}\/\d{2}\/\d{4}$/,
      'Date of birth must be in DD/MM/YYYY format'
    )
    .refine((date) => {
      const [day, month, year] = date.split('/').map(Number);
      const parsedDate = new Date(year, month - 1, day);
      return (
        parsedDate.getDate() === day &&
        parsedDate.getMonth() === month - 1 &&
        parsedDate.getFullYear() === year &&
        year >= 1900 &&
        year <= new Date().getFullYear()
      );
    }, 'Please enter a valid date of birth'),
  email: z.string().email('Invalid email address'),
  mobileNumber: z
    .string()
    .regex(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  professionAndJobTitle: z
    .string()
    .min(3, 'Please enter a valid profession and job title'),
  organisation: z.string().optional(),
  qualification: z.string().optional(),
  yearsOfExperience: z
    .number()
    .min(0, 'Years of experience must be a positive number')
    .optional(),
  schoolName: z.string().min(3, 'School name must be at least 3 characters'),
  bio: z
    .string()
    .min(1, 'Bio is required')
    .refine((value) => {
      const wordCount = value.trim().split(/\s+/).length;
      return wordCount >= 150 && wordCount <= 200;
    }, 'Bio must be between 150 and 200 words'),
  profilePicture: z
    .instanceof(File, { message: 'Profile picture is required' })
    .refine(
      (file) => ['image/jpeg', 'image/png'].includes(file.type),
      'Only JPEG or PNG files are allowed'
    )
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      'File size must be less than 5MB'
    ),
  myQuestions: z.string().min(5, 'Please enter at least 5 characters'),
  termsAndConditions: z
    .boolean()
    .refine(
      (val) => val === true,
      'You must agree to the terms and conditions'
    ),
});

type FormSchema = z.infer<typeof formSchema>;

// Main Form Component
export const BecomeAMentorForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const mentors = useMentorStore((state) => state.mentors);
  const [selectedMentors, setSelectedMentors] = useState<string[]>([]);

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log('Form Submitted', data, selectedMentors);
  };

  return (
    <section className='mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5'>
      <h2 className='mb-4 text-center text-3xl font-bold text-gray-800'>
        Want to give back to the community and share your story?
      </h2>
      <p className='mb-6 text-center text-base text-gray-500'>
        Fill in the form below and we will get back to you as soon as possible!
        For more information download the CareerView starter guide for Young
        Professionals.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-5'
      >
        {/* Two-Column Layout for Contact and Career Info */}
        <div className='-mx-2 flex flex-wrap'>
          {/* Left Column: Contact Info */}
          <div className='w-full px-2 md:w-1/2'>
            <h3 className='mb-4 text-xl font-semibold'>Contact Info</h3>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                Full Name *
              </label>
              <Controller
                name='fullName'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='Enter your full name'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
              {errors.fullName && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                Date of Birth *
              </label>
              <Controller
                name='dateOfBirth'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='Enter your date of birth (DD/MM/YYYY)'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
              {errors.dateOfBirth && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                Email *
              </label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='Enter your email'
                    showButton={true}
                    icon={<Send className='h-4 w-4' />}
                    containerClassName='w-full'
                  />
                )}
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                Mobile Number *
              </label>
              <Controller
                name='mobileNumber'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='Enter your mobile number'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
              {errors.mobileNumber && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                State *
              </label>
              <Controller
                name='state'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='Enter your state'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
              {errors.state && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.state.message}
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Career Info */}
          <div className='w-full px-2 md:w-1/2'>
            <h3 className='mb-4 text-xl font-semibold'>Career Info</h3>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                What is your profession and job title? *
              </label>
              <Controller
                name='professionAndJobTitle'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='e.g Film making - Movie director'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
              {errors.professionAndJobTitle && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.professionAndJobTitle.message}
                </p>
              )}
            </div>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                Which organisation do you work for?
              </label>
              <Controller
                name='organisation'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='Enter workplace name'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
            </div>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                What qualification or certification do you have?
              </label>
              <Controller
                name='qualification'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='e.g Masters, PHD, bachelors, diploma, highschool, apprenticeship'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
            </div>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                How many years of experience?
              </label>
              <Controller
                name='yearsOfExperience'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''} // Convert number to string as per previous fix
                    onChange={(e) => field.onChange(e ? Number(e) : undefined)}
                    placeholder='1'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
              {errors.yearsOfExperience && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.yearsOfExperience.message}
                </p>
              )}
            </div>

            <div className='mb-5'>
              <label className='mb-1 block text-sm font-medium text-gray-700'>
                Which school did you attend? *
              </label>
              <Controller
                name='schoolName'
                control={control}
                render={({ field }) => (
                  <OutlinedInputWithButton
                    value={field.value || ''}
                    onChange={field.onChange}
                    placeholder='Please include secondary and tertiary level'
                    showButton={false}
                    containerClassName='w-full'
                  />
                )}
              />
              {errors.schoolName && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.schoolName.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width Bio Info */}
        <div>
      

          <div className='mb-5'>
            <label className='mb-1 block text-sm font-medium text-gray-700'>
              Upload profile picture *
            </label>
            <Controller
              name='profilePicture'
              control={control}
              render={({ field }) => (
                <input
                  type='file'
                  accept='image/jpeg,image/png'
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                  className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F1CE7E]'
                />
              )}
            />
            {errors.profilePicture && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.profilePicture.message}
              </p>
            )}
          </div>
        </div>

        {/* Full-Width Submit Section */}
        <div>
          <h3 className='mb-4 text-xl font-semibold'>Submit Application</h3>

          <div className='mb-5'>
            <div className='flex items-center'>
              <Controller
                name='termsAndConditions'
                control={control}
                render={({ field }) => (
                  <input
                    type='checkbox'
                    checked={field.value || false}
                    onChange={field.onChange}
                    className='h-4 w-4 rounded border-gray-300 text-[#F1CE7E] focus:ring-[#F1CE7E]'
                  />
                )}
              />
              <label className='ml-2 text-sm font-medium text-gray-700'>
                I agree to the terms & conditions.{' '}
                <a
                  href='#'
                  className='text-blue-500 underline'
                >
                  View terms of use
                </a>
              </label>
            </div>
            {errors.termsAndConditions && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.termsAndConditions.message}
              </p>
            )}
          </div>

          <p className='mb-4 text-center text-sm text-gray-500'>
            Please confirm that all information is correct before submitting.
            Don’t worry, we can update your profile information upon request. We
            will get back to you within 48 hours.
          </p>

          <Button
            type='submit'
            className='w-full rounded-md bg-gray-200 px-5 py-3 font-medium text-black transition hover:bg-gray-300'
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

// MentorMultiSelect Component (Unchanged)
interface MentorMultiSelectProps {
  mentors: Mentor[];
  selectedMentors: string[];
  setSelectedMentors: (emails: string[]) => void;
}

const MentorMultiSelect: React.FC<MentorMultiSelectProps> = ({
  mentors,
  selectedMentors,
  setSelectedMentors,
}) => {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredMentors = mentors.filter((mentor) => {
    if (mentor.name)
      return mentor.name.toLowerCase().includes(query.toLowerCase());
  });

  const handleSelectMentor = (email: string | undefined) => {
    if (!email) return;
    if (!selectedMentors.includes(email)) {
      setSelectedMentors([...selectedMentors, email]);
    }
    setQuery('');
  };

  const handleRemoveMentor = (email: string) => {
    setSelectedMentors(selectedMentors.filter((m) => m !== email));
  };

  return (
    <div
      className='relative'
      ref={containerRef}
    >
      <div
        className={`flex min-h-[44px] w-full flex-wrap items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#F1CE7E] ${focused ? 'ring-2 ring-[#F1CE7E]' : ''}`}
      >
        {selectedMentors.map((email) => {
          const mentor = mentors.find((m) => m.email === email);
          if (!mentor) return null;
          return (
            <div
              key={email}
              className='flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1'
            >
              <img
                src={mentor.profileImage}
                alt={mentor.name}
                className='h-5 w-5 rounded-full object-cover'
              />
              <span className='text-sm text-gray-700'>{mentor.name}</span>
              <button
                type='button'
                onClick={() => handleRemoveMentor(email)}
                className='text-sm font-semibold text-red-500'
              >
                ×
              </button>
            </div>
          );
        })}
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={selectedMentors.length === 0 ? 'Search mentors...' : ''}
          className='min-w-[80px] flex-1 border-none bg-transparent p-0 text-sm placeholder-gray-400 focus:outline-none'
        />
      </div>
      {focused && query && (
        <div className='absolute left-0 top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg'>
          {filteredMentors.length === 0 ? (
            <div className='p-2 text-sm text-gray-500'>No mentors found.</div>
          ) : (
            filteredMentors.map((mentor) => (
              <div
                key={mentor.email}
                className='flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100'
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelectMentor(mentor.email)}
              >
                <img
                  src={mentor.profileImage}
                  alt={mentor.name}
                  className='h-8 w-8 rounded-full object-cover'
                />
                <div>
                  <div className='font-medium text-gray-800'>{mentor.name}</div>
                  <div className='text-sm text-gray-500'>{mentor.role}</div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
