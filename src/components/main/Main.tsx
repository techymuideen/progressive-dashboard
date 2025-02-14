import GroupInfo from './GroupInfo';
import OverallProgress from './OverallProgress';
import Upcoming from './Upcoming';
import Pen from '../../assets/create-outline.svg?react';
import Arrow from '../../assets/keyboard_arrow_right.svg?react';

const Main = () => {
  return (
    <main className='flex-1   py-4 md:py-12 px-6 '>
      <h2 className='text-2xl font-medium md:py-4'>Progress Dashboard</h2>

      <div className='container mx-auto py-4 md:p-4 space-y-8'>
        <Upcoming />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <GroupInfo />
          <OverallProgress />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='border border-[#E6E7E9] rounded-lg p-4 flex items-center gap-4'>
            <div className='bg-white h-10 w-10 shadow-md rounded-full flex items-center justify-center'>
              <Pen />
            </div>
            <div>
              <p className='text-[#181819] font-medium'>Grammer</p>
              <p className='text-sm text-[#181819]'>+30 grammer rules</p>
            </div>
            <a href="#" className='ml-auto text-[#3855B3]'>
              <Arrow />
            </a>
          </div>

          <div className='border border-[#E6E7E9] rounded-lg p-4 flex items-center gap-4'>
            <div className='bg-white h-10 w-10 shadow-md rounded-full flex items-center justify-center'>
              <Pen />
            </div>
            <div>
              <p className='text-[#181819] font-medium'>Dictionary</p>
              <p className='text-sm text-[#181819]'>+10 new words</p>
            </div>
            <a href="#" className='ml-auto text-[#3855B3]'>
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
