export interface QuestionCardProps {
  question: string;
  answer: string;
  // Optional prop to override background classes
  bgClass?: string;
}

export const QuestionCard = ({
  question,
  answer,
  bgClass,
}: QuestionCardProps) => {
  return (
    <div
      className={`relative rounded-xl p-6 ${bgClass || 'bg-gradient-to-t from-yellow-50 to-slate-50'}`}
    >
      <div className='mt-4'>
        <p className='text-xl font-bold'>{`Q. ${question}`}</p>
        <p className='mt-2 text-md text-gray-700'>{`Answer: ${answer}`}</p>
      </div>
      {/* <div className='mt-6 flex items-center space-x-2'>
        <ThumbsUp />
      </div> */}
    </div>
  );
};
