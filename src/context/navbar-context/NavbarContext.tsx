import React, { createContext, useContext, useState } from 'react';

// Define the context
interface NavbarContextProps {
  isDark: boolean; // True for dark navbar, false for light
  setNavbarTheme: (isDark: boolean) => void; // Function to toggle navbar theme
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

// Create provider
export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false); // Default theme is light

  const setNavbarTheme = (isDark: boolean) => {
    setIsDark(isDark);
  };

  return (
    <NavbarContext.Provider value={{ isDark, setNavbarTheme }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook to use the context
export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
};
