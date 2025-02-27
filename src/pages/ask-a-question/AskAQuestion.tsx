import { AskForm } from '../../components/ask-form.tsx';
import { Spacer } from '../../components/spacer';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';
import { useEffect } from 'react';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';

export const AskAQuestion = () => {
  const { setNavbarTheme } = useNavbarContext(); // Get theme from context
  useEffect(() => {
    setNavbarTheme(true);

    return () => setNavbarTheme(false);
  }, [setNavbarTheme]);

  return (
    <AnimatedPageWrapper>
      <main className='mb-24'>
        <Spacer size={200} />
        <AskForm />
      </main>
    </AnimatedPageWrapper>
  );
};
