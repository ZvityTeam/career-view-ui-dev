import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn.ts';

interface FooterLinkProps {
  to: string;
  label: string;
  className?: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  to,
  label,
  className,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        'transition-colors duration-200 ease-in-out hover:text-secondary',
        className
      )}
    >
      {label}
    </Link>
  );
};
