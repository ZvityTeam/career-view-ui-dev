import { cn } from '../../utils/cn';

interface ButtonProps {
  children: string;
  className?: string;
  variant?: 'primary' | 'secondary'; // Added 'secondary' variant
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  onClick,
  type = 'button',
}: ButtonProps) => {
  const baseClasses =
    'px-4 py-2 rounded-full font-medium transition-colors duration-300';

  const variants = {
    primary:
      'bg-black text-white border border-yellow-500 hover:bg-white hover:text-black hover:border-black',
    secondary:
      'bg-white text-black border border-black hover:bg-black hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseClasses, variants[variant], className)}
    >
      {children}
    </button>
  );
};
