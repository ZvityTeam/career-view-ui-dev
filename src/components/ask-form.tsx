import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from './ui/input.tsx';
import { Button } from './button/Button.tsx';
import { Textarea } from './ui/test-area.tsx';

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log('Form Submitted', data);
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
          <Input
            {...register('fullName')}
            placeholder='Enter your full name'
          />
          {errors.fullName && (
            <p className='text-sm text-red-500'>{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium'>Email *</label>
          <Input
            type='email'
            {...register('email')}
            placeholder='Enter your email'
          />
          {errors.email && (
            <p className='text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium'>School Name</label>
          <Input
            {...register('schoolName')}
            placeholder='Enter your school name (optional)'
          />
        </div>

        <div>
          <label className='block text-sm font-medium'>Career Choice *</label>
          <Input
            {...register('careerChoice')}
            placeholder='E.g. teacher, engineer, actor...'
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
