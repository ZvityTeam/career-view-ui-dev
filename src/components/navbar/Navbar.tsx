import { Home as HomeIcon, Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppLogo } from '../../assets';
import AppLogoDark from '../../assets/CareerViewLogo_black (Custom).png';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext';
import { cn } from '../../utils/cn.ts';
import { NavIcon } from '../nav-icon/NavIcon';
import { Button } from '../ui/Button';
import { NAV_ITEMS } from './NavbarConfig';

export const Navbar = () => {
  const { isDark } = useNavbarContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          'absolute top-0 z-[9999] w-full px-4 pt-6 sm:px-10 sm:pt-8 lg:px-20 lg:pt-12',
          'bg-black/10 backdrop-blur-3xl'
        )}
      >
        <div
          className={cn(
            'flex flex-col items-center justify-between border-b-[1px] pb-4 sm:flex-row sm:pb-6 lg:pb-8',
            isDark ? 'border-gray-800' : 'border-white'
          )}
        >
          {/* Left Side */}
          <div className='flex w-full items-center justify-between sm:w-auto sm:justify-start sm:space-x-4 lg:space-x-14'>
            {/* Logo (Centered on Mobile) */}
            <div className='flex w-full justify-center sm:w-auto sm:justify-start'>
              <Link
                to='/'
                className='flex items-center space-x-2'
              >
                <img
                  src={isDark ? AppLogoDark : AppLogo}
                  alt='CareerViewLogo'
                  className='w-56 sm:w-40 lg:w-48'
                />
              </Link>
            </div>
            {/* Hamburger/Close Icon (Top-Right on Mobile) */}
            <button
              className='absolute right-4 top-6 sm:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XIcon
                  className={cn(
                    'h-8 w-8',
                    isDark ? 'text-gray-800' : 'text-white'
                  )}
                />
              ) : (
                <MenuIcon
                  className={cn(
                    'h-8 w-8',
                    isDark ? 'text-gray-800' : 'text-white'
                  )}
                />
              )}
            </button>
            {/* Navigation Links (Visible on Desktop) */}
            <div className='hidden items-center space-x-4 text-base sm:flex sm:text-lg lg:space-x-10 lg:text-xl'>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.link}
                  className={cn(
                    isDark
                      ? 'text-gray-800 hover:text-gray-600'
                      : 'text-white hover:text-gray-300'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side (Desktop Only) */}
          <div className='hidden items-center space-x-6 sm:flex'>
            <Link
              to='/'
              className={cn(
                'text-base sm:text-lg lg:text-xl',
                isDark
                  ? 'text-gray-800 hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              )}
            >
              <NavIcon
                icon={HomeIcon}
                filled
              />
            </Link>
            <Link to='/browse-mentors'>
              <Button className='text-sm sm:text-base'>Browse Mentors</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Toggles on Hamburger Click) */}
        {isMenuOpen && (
          <div
            className={cn(
              'flex flex-col items-center justify-center space-y-10 border-b-[1px] py-6 sm:hidden',
              'w-full py-20'
            )}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className={cn(
                  'text-4xl font-medium py-3',
                  isDark
                    ? 'text-gray-800 hover:text-gray-600'
                    : 'text-white hover:text-gray-300'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Fixed Browse Mentors Button (Mobile Only) */}
      <div className='fixed bottom-4 left-1/2 z-40 -translate-x-1/2 sm:hidden'>
        <Link to='/browse-mentors'>
          <Button
            className={cn(
              'rounded-full px-6 py-5 text-lg shadow-lg transition-transform hover:scale-105',
              'bg-gray-800 text-white'
            )}
          >
            Browse Mentors
          </Button>
        </Link>
      </div>
    </>
  );
};
