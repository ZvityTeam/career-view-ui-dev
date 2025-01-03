import { AppRouter } from './routes/AppRouter.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
