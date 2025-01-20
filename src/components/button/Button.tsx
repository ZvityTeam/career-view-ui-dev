import { cn } from '../../utils/cn';

interface ButtonProps {
  children: string;
  className?: string;
  variant?: 'primary' | 'secondary'; // Button variants
  size?: 'auto' | 'sm' | 'md' | 'lg'; // Button sizes
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'auto', // Default to auto (full width)
  onClick,
  type = 'button',
}: ButtonProps) => {
  const baseClasses =
    'px-4 py-2 rounded-full font-medium transition-colors duration-300';

  const variants = {
    primary:
      'bg-black text-white border border-yellow-500 hover:bg-transparent hover:text-black hover:border-black',
    secondary:
      'bg-transparent text-black border border-black hover:bg-black hover:text-white',
  };

  const sizes = {
    auto: 'w-full', // Full width of parent
    sm: 'w-24', // Small fixed width
    md: 'w-36', // Medium fixed width
    lg: 'w-48', // Large fixed width
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
};
