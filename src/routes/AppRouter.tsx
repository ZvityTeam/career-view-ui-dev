import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from './RouteConfig.ts';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export const AppRouter = () => {
  const location = useLocation(); // ✅ Get current location reactively
  const [currentRoute, setCurrentRoute] = useState(() =>
    ROUTES.find((route) => route.path === location.pathname)
  );

  // 🔥 Update currentRoute on location change
  useEffect(() => {
    const route = ROUTES.find((route) => route.path === location.pathname);
    setCurrentRoute(route);
  }, [location.pathname]);

  return (
    <>
      {currentRoute && (
        <Helmet>
          <title>{currentRoute?.metaData?.title ?? 'Career View'}</title>
          {currentRoute?.metaData?.description && (
            <meta
              name='description'
              content={currentRoute?.metaData?.description}
            />
          )}
        </Helmet>
      )}
      <AnimatePresence mode='wait'>
        <Routes
          location={location}
          key={location.pathname}
        >
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
};
