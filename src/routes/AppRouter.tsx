import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from './RouteConfig.ts';

const AppRouter = () => {
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
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            rel='preconnect'
            href='https://www.google-analytics.com'
          />
          <link
            rel='preconnect'
            href='https://www.gstatic.com'
          />
          {/* DNS-prefetch for less-critical origins */}
          <link
            rel='dns-prefetch'
            href='https://www.google.com'
          />
          <link
            rel='dns-prefetch'
            href='https://play.google.com'
          />
          <link
            rel='dns-prefetch'
            href='https://jnn-pa.googleapis.com'
          />
          <link
            rel='dns-prefetch'
            href='https://googleads.g.doubleclick.net'
          />
          <link
            rel='dns-prefetch'
            href='https://static.doubleclick.net'
          />
          <link
            rel='dns-prefetch'
            href='https://www.youtube.com'
          />
          <link
            rel='dns-prefetch'
            href='https://yt3.ggpht.com'
          />
          <link
            rel='dns-prefetch'
            href='https://rr4---sn-gwpa-cagy.googlevideo.com'
          />
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

export default AppRouter;
