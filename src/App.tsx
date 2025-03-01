import { AppRouter } from './routes/AppRouter.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Providers } from './context/Providers.tsx';
import { SavedMentors } from './components/saved-mentor';
import { ScrollToTop } from './components/ui/scroll-to-top.tsx';
import { useMentorStore } from './store/useMentorStore.ts';
import { useEffect } from 'react';
import { data as mentorsData } from './content/mentors.ts';

function App() {
  const setMentors = useMentorStore((state) => state.setMentors);

  useEffect(() => {
    setMentors(mentorsData);
  }, [setMentors]);
  return (
    <>
      <Providers>
        <ScrollToTop />
        <Navbar />
        <AppRouter />
        <Footer />
        <SavedMentors />
      </Providers>
    </>
  );
}

export default App;
