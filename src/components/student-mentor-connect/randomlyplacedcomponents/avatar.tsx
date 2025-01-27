import { cva, type VariantProps } from 'class-variance-authority';

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  image: string;
  alt: string;
  isActive?: boolean;
}

// Define the main container styles with variants
const avatarVariants = cva(
  // Base classes
  'relative overflow-visible rounded-full border-white',
  {
    variants: {
      size: {
        sm: 'h-24 w-24 border-4', // Small
        default: 'h-36 w-36 border-8', // Default
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
        <div className='absolute right-2 top-2 z-20 h-4 w-4 rounded-full border-2 border-white bg-green-500' />
      )}
    </div>
  );
};
