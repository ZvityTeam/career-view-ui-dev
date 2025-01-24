import { Home as HomeIcon } from 'lucide-react';
import { NAV_ITEMS } from './NavbarConfig';
import { Link } from 'react-router-dom';
import { AppLogo } from '../../assets';
import { NavIcon } from '../nav-icon/NavIcon.tsx';
import { Button } from '../button/Button.tsx';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';

export const Navbar = () => {
  const { isDark } = useNavbarContext(); // Get theme from context

  return (
    <nav className='absolute top-0 z-10 w-full px-20 py-12 backdrop-blur-3xl'>
      <div
        className={`flex items-center justify-between border-b-[0.5px] pb-8 ${
          isDark ? 'border-gray-800' : 'border-white'
        }`}
      >
        {/* Left Side */}
        <div className='flex space-x-14'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center space-x-2'
          >
            <img
              src={AppLogo}
              alt='CareerViewLogo'
              className={`h-10 ${isDark && 'invert'}`}
            />
          </Link>

          {/* Navigation Links */}
          <div className='flex items-center space-x-10 text-xl'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className={`${
                  isDark
                    ? 'text-gray-800 hover:text-gray-600'
                    : 'text-white hover:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className='flex items-center space-x-6'>
          <Link
            to='/'
            className={`text-xl ${
              isDark
                ? 'text-gray-800 hover:text-gray-600'
                : 'text-white hover:text-gray-300'
            }`}
          >
            <NavIcon
              icon={HomeIcon}
              filled
            />
          </Link>
          <Link to='/browse-mentors'>
            <Button>{isDark ? 'Browse Mentors' : 'Browse Mentors'}</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
