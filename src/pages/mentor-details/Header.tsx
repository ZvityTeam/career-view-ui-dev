import placeholderImg from '../../assets/CAREERVIEW-32721.jpg';
import { Section } from '../../components/container/Section';
import { HeaderProps } from '../../types/types';

export const Header = ({ name, profileImage, bio }: HeaderProps) => {
  return (
    <Section className='flex min-h-72 w-screen flex-col gap-20'>
      <div className='relative z-10 w-full'>
        <img
          src={placeholderImg}
          className='w-full object-contain'
          height={50}
          width={600}
          alt={name}
        />
        <img
          src={profileImage || 'https://www.gravatar.com/avatar/?d=mp'}
          className='absolute -bottom-1/4 left-1/2 z-20 h-40 w-40 -translate-x-1/2 rounded-full border-2 border-white bg-white'
          alt={name}
        />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-4xl font-bold'>{name}</p>
        <p className='max-w-3xl text-xl font-[100] italic'>{bio}</p>
      </div>
    </Section>
  );
};
