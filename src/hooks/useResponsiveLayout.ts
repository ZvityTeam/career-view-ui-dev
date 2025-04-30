import { useEffect, useState } from 'react';

// Responsive design helper
const useResponsiveLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024); // Tablet breakpoint
    };

    // Initial check
    checkSize();

    // Add event listener
    window.addEventListener('resize', checkSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return { isMobile, isTablet };
};

export default useResponsiveLayout;
