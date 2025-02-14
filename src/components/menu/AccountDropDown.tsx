import button from '../../assets/Button-icon.svg';

const AccountDropDown = () => {
  return (
    <div className='flex items-center gap-4 justify-between py-4 px-6  mt-5 rounded-xl bg-[#4A4DE6]'>
      <span className='h-10 w-10 flex items-center justify-center bg-[#ECD348] rounded-full text-black font-semibold'>
        DW
      </span>
      <div>
        <p>Dlex Designs</p>
        <p className='text-[#ffffff42]'>general team</p>
      </div>
      <div>
        <img src={button} alt='button' />
      </div>
    </div>
  );
};

export default AccountDropDown;
