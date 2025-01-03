import { Link } from 'react-router-dom';
import { NAV_ITEMS } from './NavbarConfig.ts';

export const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-around'>
        <Link
          to='/'
          className='flex items-center space-x-2'
        >
          Career View
        </Link>
        <div className='flex items-center space-x-8'>
          {NAV_ITEMS.map((value, index) => (
            <Link to={value.link}>
              <div key={index}>{value.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
