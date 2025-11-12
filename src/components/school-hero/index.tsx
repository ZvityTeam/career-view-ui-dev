// SchoolHero.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import schoolHero from '../../assets/schoolHeroBg.webp';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import { Button } from '../ui/Button.tsx';

export const SchoolHero = () => {
  const { setBgBlur } = useNavbarContext();
  const { isMobile, isTablet } = useResponsiveLayout();

  useEffect(() => {
    setBgBlur(true);
    return () => setBgBlur(false);
  }, [setBgBlur]);

  // Determine styles based on device type
  const getContainerStyles = () => {
    if (isMobile) {
      return {
        className:
          'absolute left-0 top-16 flex h-auto flex-col justify-center gap-3 rounded-br-[6rem] px-6 py-12 text-white bg-black/20 backdrop-blur-xl',
        headerClass: 'text-5xl pr-4',
        paragraphClass: 'max-w-xs text-lg',
        buttonClass: 'mt-2 w-36 border-white text-white text-sm',
      };
    } else if (isTablet) {
      return {
        className:
          'absolute left-0 top-12 flex h-auto flex-col justify-center gap-4 rounded-br-[6rem] px-12 py-16 text-white bg-black/20 backdrop-blur-xl',
        headerClass: 'text-5xl pr-16',
        paragraphClass: 'max-w-md text-lg',
        buttonClass: 'mt-3 w-36 border-white text-white',
      };
    } else {
      // Desktop - preserve original styling exactly
      return {
        className:
          'absolute left-0 top-20 flex h-96 flex-col justify-center gap-6 rounded-br-full px-24 pb-60 pt-72 text-white bg-black/20 backdrop-blur-3xl',
        headerClass: 'text-8xl pr-60',
        paragraphClass: 'max-w-2xl text-2xl',
        buttonClass: 'w-36 border-white text-white',
      };
    }
  };

  const styles = getContainerStyles();
  const navigate = useNavigate();

  return (
    <section
      className={`relative ${isMobile ? 'min-h-[85dvh]' : isTablet ? 'min-h-[90dvh]' : 'min-h-screen'} overflow-y-hidden bg-cover bg-center bg-no-repeat pt-32`}
      style={{
        backgroundImage: `url(${schoolHero})`,
      }}
    >
      <div className={styles.className}>
        <h1 className={styles.headerClass}>CareerTalks</h1>
        <p className={styles.paragraphClass}>
          Struggling to find industry speakers for your students?
          <p>
            Save time and effort—connect with our network of Young Professionals
            who can deliver insightful talks to your school!
          </p>
        </p>

        <Button
          className={styles.buttonClass}
          onClick={() => navigate('/school?scrollTo=schedule-call')}
        >
          Schedule a Session
        </Button>
      </div>
    </section>
  );
};
