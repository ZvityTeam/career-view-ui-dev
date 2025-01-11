import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavbarProvider } from './NavbarContext.tsx';
import { HelmetProvider } from 'react-helmet-async';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <NavbarProvider>{children}</NavbarProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};
