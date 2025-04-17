import { cva, type VariantProps } from 'class-variance-authority';

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  image: string;
  alt: string;
  isActive?: boolean;
}

// Define the main container styles with variants
const avatarVariants = cva(
  // Base classes
  'relative overflow-visible rounded-full border-slate-200 bg-white',
  {
    variants: {
      size: {
        sm: 'h-24 w-24 border-8', // Small
        default: 'h-36 w-36 border-[12px]', // Default
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export const Avatar = ({
  image,
  alt,
  isActive = false,
  size, // from VariantProps
}: AvatarProps) => {
  return (
    <div className={avatarVariants({ size })}>
      {/* Avatar image */}
      <img
        src={image}
        alt={alt}
        className='h-full w-full rounded-full object-cover'
      />

      {/* Green dot if active */}
      {isActive && (
        <div className='absolute right-0 top-0 z-20 h-6 w-6 rounded-full border-4 border-white bg-green-500' />
      )}
    </div>
  );
};
