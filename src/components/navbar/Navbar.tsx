import { Home as HomeIcon, Search } from 'lucide-react';
import { NAV_ITEMS } from './NavbarConfig';
import { Link } from 'react-router-dom';
import { AppLogo } from '../../assets';
import { NavIcon } from '../navicon/NavIcon.tsx';
import { Button } from '../button/Button.tsx';

export const Navbar = () => {
  return (
    <nav className='absolute top-0 z-10 w-full px-20 py-12'>
      <div className='flex items-center justify-between border-b-[0.5px] border-white pb-8'>
        {/*Left side*/}
        <div className='flex space-x-14'>
          {/*Logo*/}
          <Link
            to='/'
            className='flex items-center space-x-2'
          >
            <img
              src={AppLogo}
              alt='CareerViewLogo'
              className='h-10'
            />
          </Link>

          {/* Navigation Links */}
          <div className='flex items-center space-x-10 text-xl'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className='text-white hover:text-gray-300'
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className='flex items-center space-x-6'>
          <NavIcon icon={Search} />
          <Link
            to='/'
            className='text-xl text-white hover:text-gray-300'
          >
            <NavIcon
              icon={HomeIcon}
              filled
            />
          </Link>

          <Link
            to='/signin'
            className='text-xl text-white hover:text-gray-300'
          >
            Sign in
          </Link>
          <Link to='/browse-mentors'>
            <Button>Browse Mentors</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
