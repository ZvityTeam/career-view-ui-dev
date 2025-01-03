import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './RouteConfig.ts';

export const AppRouter = () => {
  return (
    <>
      {' '}
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component()}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};
