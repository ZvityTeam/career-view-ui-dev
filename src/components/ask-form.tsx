import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button.tsx';
import { Textarea } from './ui/test-area.tsx';
import { Send } from 'lucide-react';
import { OutlinedInputWithButton } from './input-box/InputBox.tsx';
import { useRef, useState } from 'react';
import { useMentorStore } from '../store/useMentorStore.ts'; // adjust path if needed

// ------------------------------
// Schema & Types
// ------------------------------
const formSchema = z.object({
  fullName: z.string().min(3, 'Full Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  schoolName: z.string().optional(),
  careerChoice: z.string().min(3, 'Please enter a valid career choice'),
  myQuestions: z.string().min(5, 'Please enter at least 5 characters'),
});

type FormSchema = z.infer<typeof formSchema>;

interface Mentor {
  name: string;
  email: string;
  role: string;
  profileImage: string;
}

// ------------------------------
// Main Form Component
// ------------------------------
export const AskForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  // Get mentors from the store
  const mentors = useMentorStore((state) => state.mentors);

  // State for storing selected mentors (their email ids)
  const [selectedMentors, setSelectedMentors] = useState<string[]>([]);

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    // You now have both form data and selected mentor emails
    console.log('Form Submitted', data, selectedMentors);
  };

  return (
    <section className='mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5'>
      <h2 className='mb-4 text-center text-3xl font-bold text-gray-800'>
        Ask A Question
      </h2>
      <p className='mb-6 text-center text-base text-gray-500'>
        Submit your questions below and listen to the CareerView podcast to see
        if it's asked!
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-5'
      >
        {/* Full Name */}
        <div>
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

        {/* Email */}
        <div>
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
            <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>

        {/* School Name */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            School Name
          </label>
          <Controller
            name='schoolName'
            control={control}
            render={({ field }) => (
              <OutlinedInputWithButton
                value={field.value || ''}
                onChange={field.onChange}
                placeholder='Enter your school name (optional)'
                showButton={false}
                containerClassName='w-full'
              />
            )}
          />
        </div>

        {/* Career Choice */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Career Choice *
          </label>
          <Controller
            name='careerChoice'
            control={control}
            render={({ field }) => (
              <OutlinedInputWithButton
                value={field.value || ''}
                onChange={field.onChange}
                placeholder='E.g. teacher, engineer, actor...'
                showButton={false}
                containerClassName='w-full'
              />
            )}
          />
          {errors.careerChoice && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.careerChoice.message}
            </p>
          )}
        </div>

        {/* Questions */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            My Questions *
          </label>
          <Textarea
            {...register('myQuestions')}
            placeholder='Enter your questions here'
            className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F1CE7E]'
          />
          {errors.myQuestions && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.myQuestions.message}
            </p>
          )}
        </div>

        {/* Multi-Select for Mentors (inline chips) */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Select Mentors
          </label>
          <MentorMultiSelect
            mentors={mentors}
            selectedMentors={selectedMentors}
            setSelectedMentors={setSelectedMentors}
          />
        </div>

        {/* Submit Button */}
        <Button
          type='submit'
          className='group relative flex w-full items-center justify-center gap-2 rounded-md bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800'
        >
          <Send className='h-4 w-4 transition group-hover:translate-x-0.5' />
          <span>Send</span>
        </Button>
      </form>
    </section>
  );
};

// ------------------------------
// MentorMultiSelect
// ------------------------------
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

  // Filter mentors by name
  const filteredMentors = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(query.toLowerCase())
  );

  // Handle adding a mentor
  const handleSelectMentor = (email: string) => {
    if (!selectedMentors.includes(email)) {
      setSelectedMentors([...selectedMentors, email]);
    }
    setQuery('');
  };

  // Remove a mentor
  const handleRemoveMentor = (email: string) => {
    setSelectedMentors(selectedMentors.filter((m) => m !== email));
  };

  return (
    <div
      className='relative'
      ref={containerRef}
    >
      {/* This container acts like an input with chips + a text field */}
      <div
        className={`flex min-h-[44px] w-full flex-wrap items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#F1CE7E] ${
          focused ? 'ring-2 ring-[#F1CE7E]' : ''
        }`}
      >
        {/* Render selected mentors as chips */}
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
                &times;
              </button>
            </div>
          );
        })}

        {/* Text input for searching */}
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            // If the blur event goes to the dropdown, keep it open
            // We'll detect if user clicked on the dropdown using onMouseDown
            // so let's do a small timeout to allow the click to happen first.
            setTimeout(() => setFocused(false), 150);
          }}
          placeholder={selectedMentors.length === 0 ? 'Search mentors...' : ''}
          className='min-w-[80px] flex-1 border-none bg-transparent p-0 text-sm placeholder-gray-400 focus:outline-none'
        />
      </div>

      {/* Dropdown */}
      {focused && query && (
        <div className='absolute left-0 top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg'>
          {filteredMentors.length === 0 ? (
            <div className='p-2 text-sm text-gray-500'>No mentors found.</div>
          ) : (
            filteredMentors.map((mentor) => (
              <div
                key={mentor.email}
                className='flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100'
                onMouseDown={(e) => e.preventDefault()} // prevent blur
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
