import { Home as HomeIcon } from 'lucide-react';
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

  return (
    <nav
      className={cn(
        'absolute top-0 z-30 w-full px-20 pt-12',
        'bg-black/10 backdrop-blur-3xl'
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between border-b-[1px] pb-8',
          isDark ? 'border-gray-800' : 'border-white'
        )}
      >
        {/* Left Side */}
        <div className='flex space-x-14'>
          {/* Logo */}
          <Link
            to='/'
            className='bg-blur-3xl flex items-center space-x-2'
          >
            <img
              src={isDark ? AppLogoDark : AppLogo}
              alt='CareerViewLogo'
              className={`w-48`}
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
            <Button>{'Browse Mentors'}</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
