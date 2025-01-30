import { AppRouter } from './routes/AppRouter.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Providers } from './context/Providers.tsx';
import { SavedMentors } from './components/saved-mentor';
import { ScrollToTop } from './components/ui/scroll-to-top.tsx';

function App() {
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
