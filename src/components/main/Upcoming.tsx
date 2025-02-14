import avatars from '../../assets/grouped avatars.svg';
import CheckCircleOutline from '../../assets/check_circle_outline.svg?react';
import Vector from '../../assets/Vector.svg?react';

const Upcoming = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      <div className='bg-[#28439D] text-white rounded-xl space-y-2 p-4 md:col-span-2 gap-4'>
        <p className=' text-sm uppercase font-light'>
          Deadline <span className='font-medium'>12:00</span>
        </p>
        <p className=' text-2xl'>Exam - Unit 5</p>
        <p className='font-light text-sm'>Spanish for beginners</p>
        <img src={avatars} />
      </div>

      <div className='bg-[#FFF8E1] p-4 rounded-xl flex flex-col gap-1'>
        <CheckCircleOutline />
        <p className='text-base text[#00000090] font-medium'>Homework</p>
        <p className='text-[#181819] text-xs'>For today's lesson</p>
        <p className='uppercase font-medium text-xs mt-auto'> 35 min ago</p>
      </div>

      <div className='bg-[#E1F5FD] p-4 rounded-xl flex flex-col gap-1'>
        <Vector />
        <p className='text-base text[#00000090] font-medium'>Reading</p>
        <p className='text-[#181819] text-xs'>24 words per week</p>
        <p className='uppercase font-medium text-xs mt-auto'> 2H ago</p>
      </div>
    </div>
  );
};

export default Upcoming;
