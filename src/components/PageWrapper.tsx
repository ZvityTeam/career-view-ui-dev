import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedPageWrapperProps {
  children: React.ReactNode;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

export const AnimatedPageWrapper: React.FC<AnimatedPageWrapperProps> = ({
  children,
}) => {
  return (
    <motion.div
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </motion.div>
  );
};
