import React, { createContext, useContext, useState } from 'react';

interface NavbarContextProps {
  isDark: boolean; // True for dark navbar, false for light
  bgBlur: boolean; // True if blurred background should be applied
  setNavbarTheme: (isDark: boolean) => void; // Function to toggle navbar theme
  setBgBlur: (bgBlur: boolean) => void; // Function to toggle navbar background blur
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false); // Default theme is light
  const [bgBlur, setBgBlur] = useState(false); // Default no blur

  const setNavbarTheme = (isDark: boolean) => {
    setIsDark(isDark);
  };

  return (
    <NavbarContext.Provider
      value={{ isDark, bgBlur, setNavbarTheme, setBgBlur }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
};
