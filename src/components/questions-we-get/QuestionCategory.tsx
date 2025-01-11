export const QuestionCategory = ({
  category,
  onClick,
  isSelected,
}: {
  category: string;
  onClick: (selectedCategory: string) => void;
  isSelected: boolean;
}) => {
  return (
    <div
      className={`grid cursor-pointer place-items-center rounded-xl border-[0.5px] px-8 py-2 text-black shadow-md transition-colors ${isSelected ? 'bg-black text-white' : 'border-black hover:bg-black hover:text-white'} `}
      onClick={() => onClick(category)}
    >
      <p className='grid place-items-center text-xl font-light'>{category}</p>
    </div>
  );
};
