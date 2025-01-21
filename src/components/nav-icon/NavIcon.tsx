import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn.ts';

export const NavIcon = ({
  icon: Icon,
  className,
  iconClassName,
  filled = false,
}: {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  filled?: boolean;
}) => {
  return (
    <button
      className={cn(
        'rounded-full border p-2',
        filled ? 'bg-white text-black' : 'text-white hover:text-gray-300',
        className
      )}
    >
      <Icon className={cn('h-6 w-6', filled && 'text-black', iconClassName)} />
    </button>
  );
};
