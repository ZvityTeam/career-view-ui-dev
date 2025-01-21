import { Button } from '../../button/Button.tsx';

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
    <div className='flex flex-1 flex-col items-center justify-between rounded-xl bg-gradient-to-b from-yellow-50 to-yellow-200 p-12 shadow-lg'>
      <div className='text-center'>
        <h3 className='text-3xl'>{name}</h3>
        <p className='text-lg font-light'>{designation}</p>
      </div>
      <p>{bio}</p>
      {showActionButton && <Button>Ask a Question</Button>}
      <img
        src={imageUrl}
        alt={name}
      />
    </div>
  );
};
