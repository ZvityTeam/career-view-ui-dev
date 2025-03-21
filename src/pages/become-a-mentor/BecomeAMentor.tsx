import { useEffect } from 'react';
import { BecomeAMentorForm } from '../../components/become-mentor-form.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { Spacer } from '../../components/spacer';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';

export const BecomeAMentor = () => {
  const { setNavbarTheme } = useNavbarContext(); // Get theme from context
  useEffect(() => {
    setNavbarTheme(true);

    return () => setNavbarTheme(false);
  }, [setNavbarTheme]);

  return (
    <AnimatedPageWrapper>
      <main className='mb-24'>
        <Spacer size={200} />
        <BecomeAMentorForm />
      </main>
    </AnimatedPageWrapper>
  );
};
