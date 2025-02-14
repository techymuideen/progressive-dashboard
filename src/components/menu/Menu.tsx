import Logo from '../../assets/onDark.svg?react';
import Links from './Links';
import AccountDropDown from './AccountDropDown';
import StorageStatus from './StorageStatus';
import Avatar from './Avatar';

const Menu = () => {
  return (
    <div className='bg-[#3C38CE] text-white p-8 flex flex-col justify-between'>
      <div>
        <div className='border-b border-[#E6E7E920] pb-4'>
          <Logo />
        </div>
        <AccountDropDown />
        <Links />
      </div>
      <div>
        <StorageStatus />
        <Avatar />
      </div>
    </div>
  );
};

export default Menu;
