import { ThumbsUp } from 'lucide-react';

export interface QuestionCardProps {
  question: string;
  answer: string;
}

export const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  return (
    <div className='relative rounded-xl bg-gradient-to-t from-yellow-50 to-slate-50 p-6'>
      <div className='mt-4'>
        <p className='text-lg font-bold'>{`Q. ${question}`}</p>
        <p className='mt-2 text-sm text-gray-700'>{`Answer: ${answer}`}</p>
      </div>
      <div className='mt-6 flex items-center space-x-2'>
        <ThumbsUp />
      </div>
    </div>
  );
};
