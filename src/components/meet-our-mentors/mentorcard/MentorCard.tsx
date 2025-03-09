import { Mentor } from '../../../types/types';
import { Button } from '../../ui/Button.tsx';

export const MentorCard = ({
  name,
  role,
  bio,
  profileImage,
  showActionButton = true,
}: Pick<Mentor, 'name' | 'role' | 'bio' | 'profileImage'> & {
  showActionButton?: boolean;
}) => {
  console.log('MentorCard', {
    name,
    role,
    bio,
    profileImage,
    showActionButton,
  });
  return (
    <div className='flex min-h-[800px] flex-1 flex-col items-center justify-between rounded-xl bg-white from-yellow-50 to-yellow-200 p-12 shadow-lg hover:bg-gradient-to-b'>
      <div className='text-center'>
        <h3 className='text-3xl'>{name}</h3>
        <p className='text-lg font-light italic'>{role}</p>
      </div>
      <p className='line-clamp-[7] text-center'>{bio}</p>
      {showActionButton && <Button>Ask a Question</Button>}
      <img
        src={profileImage}
        alt={name}
      />
    </div>
  );
};
