import { Brain, ThumbsUp } from 'lucide-react';

export interface QuestionCardProps {
  imgSrc: string;
  name: string;
  grade: string;
  question: string;
  answer: string;
  helpfulCount: number;
}

export const QuestionCard = ({
  imgSrc,
  name,
  grade,
  question,
  answer,
  helpfulCount,
}: QuestionCardProps) => {
  return (
    <div className='relative rounded-lg border border-gray-200 bg-gradient-to-t from-yellow-50 to-slate-50 p-6 shadow-md'>
      <div className='absolute right-5 rounded-md border border-black p-2'>
        <Brain />
      </div>
      <div className='flex items-center space-x-4'>
        <img
          src={imgSrc}
          alt={name}
          className='h-12 w-12 rounded-full object-cover'
        />
        <div>
          <p className='text-lg font-semibold'>{name}</p>
          <p className='text-sm text-gray-500'>{grade}</p>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-lg font-bold'>{`Q. ${question}`}</p>
        <p className='mt-2 text-sm text-gray-700'>{`Answer: ${answer}`}</p>
      </div>
      <div className='mt-6 flex items-center space-x-2'>
        <ThumbsUp />
        <p className='text-sm text-gray-500'>{`${helpfulCount} Students found helpful`}</p>
      </div>
    </div>
  );
};
