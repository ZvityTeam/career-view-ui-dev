import { AppRouter } from './routes/AppRouter.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Providers } from './context/Providers.tsx';

function App() {
  return (
    <>
      <Providers>
        <Navbar />
        <AppRouter />
        <Footer />
      </Providers>
    </>
  );
}

export default App;
