import { useEffect } from 'react';
import { Footer } from './components/footer/Footer.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';
import { SavedMentors } from './components/saved-mentor';
import { ScrollToTop } from './components/ui/scroll-to-top.tsx';
import { data as mentorsData } from './content/mentors.ts';
import { Providers } from './context/Providers.tsx';
import { AppRouter } from './routes/AppRouter.tsx';
import { useMentorStore } from './store/useMentorStore.ts';

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
