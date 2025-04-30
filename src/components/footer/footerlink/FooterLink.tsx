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
        'text-sm transition-colors duration-200 ease-in-out hover:text-secondary sm:text-base lg:text-lg',
        className
      )}
    >
      {label}
    </Link>
  );
};
