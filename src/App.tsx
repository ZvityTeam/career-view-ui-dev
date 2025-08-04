import { Suspense, lazy, useEffect } from 'react';
import { data as mentorsData } from './content/mentors.ts';
import { Providers } from './context/Providers.tsx';
import { useMentorStore } from './store/useMentorStore.ts';
import AppRouter from './routes/AppRouter.tsx';

// Lazy-load components
const Navbar = lazy(() => import('./components/navbar/Navbar.tsx'));
const Footer = lazy(() => import('./components/footer/Footer.tsx'));
const SavedMentors = lazy(() => import('./components/saved-mentor'));
const ScrollToTop = lazy(() => import('./components/ui/scroll-to-top.tsx'));

function App() {
  const setMentors = useMentorStore((state) => state.setMentors);

  useEffect(() => {
    setMentors(mentorsData);
  }, [setMentors]);

  return (
    <Providers>
      <Suspense
        fallback={
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'
            style={{ backdropFilter: 'blur(4px)' }} // Optional: subtle blur effect
          >
            <div className='text-center'>
              <div className='mx-auto h-16 w-16 animate-spin rounded-full border-4 border-dashed border-yellow-500' />
              <h2 className='mt-4 text-white'>Loading...</h2>
              <p className='text-zinc-400'>
                Your career journey is about to start!
              </p>
            </div>
          </div>
        }
      >
        <ScrollToTop />
        <Navbar />
        <AppRouter />
        <Footer />
        <SavedMentors />
      </Suspense>
    </Providers>
  );
}

export default App;
