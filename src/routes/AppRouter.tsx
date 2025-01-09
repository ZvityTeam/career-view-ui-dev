import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './RouteConfig.ts';
import { Helmet } from 'react-helmet-async';

export const AppRouter = () => {
  const currentRoute = ROUTES.find((route) => route.path === location.pathname);

  return (
    <>
      {currentRoute && (
        <Helmet>
          <title>{currentRoute?.metaData?.title ?? 'Career View'}</title>
          <meta
            name='description'
            content={currentRoute?.metaData?.description}
          />
        </Helmet>
      )}
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component()}
          />
        ))}
      </Routes>
    </>
  );
};
