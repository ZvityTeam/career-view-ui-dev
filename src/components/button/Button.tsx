import { cn } from '../../utils/cn';

interface ButtonProps {
  children: string;
  className?: string;
  variant?: 'primary'; // Add more variants here as needed
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
