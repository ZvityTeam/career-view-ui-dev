import { AppRouter } from './routes/AppRouter.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
