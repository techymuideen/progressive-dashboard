import Flag from '../../assets/germany.svg?react';
import Arrow from '../../assets/keyboard_arrow_right.svg?react';

const OverallProgress = () => {
  return (
    <div className='border border-[#E6E7E9] rounded-lg p-4 flex flex-col'>
      <h3 className='font-medium text-base text-[#181819]'>Overall progress</h3>
      <div className='flex justify-between items-center mt-8'>
        <p className='text-2xl'>
          Germany for <br /> beginners
        </p>
        <div className='bg-white h-10 w-10 shadow-md rounded-full flex items-center justify-center'>
          <Flag />
        </div>
      </div>

      <div className='h-2 w-full mt-4 rounded-full bg-[#F0F1F2]'>
        <div
          className='h-2 rounded-l-full bg-[#3855B3]'
          style={{ width: '75%' }}></div>
      </div>
      <p className='text-base font-medium mt-2'>75%</p>
      <div className='text-[#3855B3] font-medium flex justify-end -mx-4 pt-4 border-t border-[#E6E7E9] items-center mt-auto'>
        <a href='#'>Explore more</a>
        <span className='mr-4'>
          <Arrow />
        </span>
      </div>
    </div>
  );
};

export default OverallProgress;
