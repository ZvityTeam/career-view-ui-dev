import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button.tsx';
import { Textarea } from './ui/test-area.tsx';
import { Send } from 'lucide-react';
import { OutlinedInputWithButton } from './input-box/InputBox.tsx';
import { useState } from 'react';
import { useMentorStore } from '../store/useMentorStore.ts'; // adjust the path if needed

const formSchema = z.object({
  fullName: z.string().min(3, 'Full Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  schoolName: z.string().optional(),
  careerChoice: z.string().min(3, 'Please enter a valid career choice'),
  myQuestions: z.string().min(5, 'Please enter at least 5 characters'),
});

type FormSchema = z.infer<typeof formSchema>;

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
    <section className='mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg'>
      <h2 className='mb-4 text-center text-2xl font-semibold'>
        Ask A Question
      </h2>
      <p className='mb-6 text-center text-gray-600'>
        Submit your questions below and listen to the CareerView podcast to see
        if it's asked!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <div>
          <label className='block text-sm font-medium'>Full Name *</label>
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
            <p className='text-sm text-red-500'>{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium'>Email *</label>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <OutlinedInputWithButton
                value={field.value || ''}
                onChange={field.onChange}
                placeholder='Enter your email'
                showButton={true}
                icon={<Send />}
                containerClassName='w-full'
              />
            )}
          />
          {errors.email && (
            <p className='text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium'>School Name</label>
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

        <div>
          <label className='block text-sm font-medium'>Career Choice *</label>
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
            <p className='text-sm text-red-500'>
              {errors.careerChoice.message}
            </p>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium'>My Questions *</label>
          <Textarea
            {...register('myQuestions')}
            placeholder='Enter your questions here'
          />
          {errors.myQuestions && (
            <p className='text-sm text-red-500'>{errors.myQuestions.message}</p>
          )}
        </div>

        {/* New Searchable Multi-Select for Mentors */}
        <div>
          <label className='block text-sm font-medium'>Select Mentors</label>
          <MentorMultiSelect
            mentors={mentors}
            selectedMentors={selectedMentors}
            setSelectedMentors={setSelectedMentors}
          />
        </div>

        <Button
          type='submit'
          className='w-full bg-black text-white transition hover:bg-gray-800'
        >
          Send
        </Button>
      </form>
    </section>
  );
};

// Mentor interface (adjust based on your actual Mentor type)
interface Mentor {
  name: string;
  email: string;
  role: string;
  profileImage: string;
}

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

  // Filter mentors by name based on the search query
  const filteredMentors = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search mentors...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-full rounded border px-2 py-1'
      />
      {query && (
        <div className='absolute z-10 mt-1 max-h-60 w-full overflow-auto border bg-white'>
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.email}
              className='flex cursor-pointer items-center p-2 hover:bg-gray-100'
              onClick={() => {
                if (!selectedMentors.includes(mentor.email)) {
                  setSelectedMentors([...selectedMentors, mentor.email]);
                }
              }}
            >
              <img
                src={mentor.profileImage}
                alt={mentor.name}
                className='mr-2 h-8 w-8 rounded-full'
              />
              <div>
                <div className='font-medium'>{mentor.name}</div>
                <div className='text-sm text-gray-500'>{mentor.role}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedMentors.length > 0 && (
        <div className='mt-2 flex flex-wrap gap-2'>
          {selectedMentors.map((email) => {
            const mentor = mentors.find((m) => m.email === email);
            if (!mentor) return null;
            return (
              <div
                key={email}
                className='flex items-center rounded bg-gray-200 px-2 py-1'
              >
                <img
                  src={mentor.profileImage}
                  alt={mentor.name}
                  className='mr-1 h-6 w-6 rounded-full'
                />
                <span>{mentor.name}</span>
                <button
                  type='button'
                  onClick={() =>
                    setSelectedMentors(
                      selectedMentors.filter((e) => e !== email)
                    )
                  }
                  className='ml-1 text-red-500'
                >
                  &times;
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
