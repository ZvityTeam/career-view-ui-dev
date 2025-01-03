'use client';

import { Home as HomeIcon, Search } from 'lucide-react';
import { NAV_ITEMS } from './NavbarConfig';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='bg-black px-6 py-4'>
      <div className='flex items-center justify-between'>
        <Link
          to='/'
          className='flex items-center space-x-2'
        >
          <svg
            viewBox='0 0 24 24'
            className='h-8 w-8 fill-white'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z' />
          </svg>
          <div>
            <span className='text-xl font-bold text-white'>CareerView</span>
            <p className='text-xs text-gray-400'>
              Connect. Communicate. Network
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className='flex items-center space-x-8'>
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

        {/* Right Side */}
        <div className='flex items-center space-x-6'>
          <button className='text-white hover:text-gray-300'>
            <Search className='h-5 w-5' />
          </button>
          <button className='text-white hover:text-gray-300'>
            <HomeIcon className='h-5 w-5' />
          </button>
          <Link
            to='/signin'
            className='text-white hover:text-gray-300'
          >
            Sign in
          </Link>
          <Link
            to='/browse-mentors'
            className='rounded-full bg-black px-6 py-2 text-white ring-1 ring-white hover:bg-white hover:text-black'
          >
            Browse Mentors
          </Link>
        </div>
      </div>
    </nav>
  );
};
