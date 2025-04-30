import { cva, type VariantProps } from 'class-variance-authority';

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  image: string;
  alt: string;
  isActive?: boolean;
}

const avatarVariants = cva(
  'relative overflow-visible rounded-full border-slate-200 bg-white',
  {
    variants: {
      size: {
        sm: 'h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 border-4 sm:border-6 lg:border-8',
        default:
          'h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 border-6 sm:border-8 lg:border-[12px]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export const Avatar = ({ image, alt, isActive = false, size }: AvatarProps) => {
  return (
    <div className={avatarVariants({ size })}>
      <img
        src={image}
        alt={alt}
        className='h-full w-full rounded-full object-cover'
      />
      {isActive && (
        <div className='sm:border-3 absolute right-0 top-0 z-20 h-4 w-4 rounded-full border-2 border-white bg-green-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6 lg:border-4' />
      )}
    </div>
  );
};
