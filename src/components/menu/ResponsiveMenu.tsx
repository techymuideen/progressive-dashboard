import { useState } from 'react';
import Menu from './Menu';
import Hamburger from '../../assets/Hamburger.svg?react';
import Search from '../../assets/Search.svg?react';
import flag from '../../assets/ic_flag_en.svg';
import Profile from '../../assets/Profile.svg?react';

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile: Hamburger Button */}
      {!isOpen && (
        <div className='md:hidden p-4 flex items-center gap-6'>
          <button onClick={() => setIsOpen(true)} aria-label='Open menu'>
            <Hamburger />
          </button>
          <button>
            <Search />
          </button>
          <span className='ml-auto'>
            <img src={flag} alt='flag' />
          </span>
          <button>
            <Profile />
          </button>
        </div>
      )}

      {/* Desktop: Show the Menu normally */}
      <div className='hidden md:flex'>
        <Menu />
      </div>

      {/* Mobile: Overlay Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-0 inset-0  z-50  flex flex-col justify-between w-fit'>
          {/* Close Button */}
          <div className='flex justify-end absolute right-4 top-4'>
            <button onClick={() => setIsOpen(false)} aria-label='Close menu'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          {/* Navigation Content */}
          <Menu />
        </div>
      )}
    </>
  );
};

export default ResponsiveMenu;
