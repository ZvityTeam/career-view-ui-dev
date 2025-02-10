import { Button } from '../../ui/Button.tsx';

export interface MentorCardProps {
  name: string;
  designation: string;
  bio: string;
  showActionButton: boolean;
  imageUrl: string;
}
export const MentorCard = ({
  name,
  designation,
  bio,
  showActionButton = true,
  imageUrl,
}: MentorCardProps) => {
  return (
    <div className='flex h-[800px] flex-1 flex-col items-center justify-between rounded-xl bg-white from-yellow-50 to-yellow-200 p-12 shadow-lg hover:bg-gradient-to-b'>
      <div className='text-center'>
        <h3 className='text-3xl'>{name}</h3>
        <p className='text-lg font-light italic'>{designation}</p>
      </div>
      <p className={'text-center'}>{bio}</p>
      {showActionButton && <Button>Ask a Question</Button>}
      <img
        src={imageUrl}
        alt={name}
      />
    </div>
  );
};
