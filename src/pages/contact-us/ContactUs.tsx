import { useEffect } from 'react';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { Spacer } from '../../components/spacer';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';
import { ContactForm } from '../../components/contactForm.tsx';

export const ContactUs = () => {
  const { setNavbarTheme } = useNavbarContext(); // Get theme from context
  useEffect(() => {
    setNavbarTheme(true);

    return () => setNavbarTheme(false);
  }, [setNavbarTheme]);

  return (
    <AnimatedPageWrapper>
      <main className='mb-24'>
        <Spacer size={200} />
        <ContactForm />
      </main>
    </AnimatedPageWrapper>
  );
};
