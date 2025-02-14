import Notification from '../../assets/notifications-outline.svg?react';
import Arrow from '../../assets/keyboard_arrow_right.svg?react';

const GroupInfo = () => {
  return (
    <div className='border border-[#E6E7E9] rounded-lg p-4'>
      <div className='flex justify-between items-center'>
        <p className='font-medium text-base text-[#181819]'>Group Info</p>
        <Notification />
      </div>
      <p className='text-sm text-[#18181942]'>13 students in the group</p>
      <div className='bg-[#FF9365] p-6 rounded-xl my-4'>
        <p className='font-medium text-base text-white'>Group Homework</p>
        <p className='flex justify-between items-center text-white '>
          <span className='text-sm text-[#ffffff70]'>
            4 students from your group <br /> online now
          </span>
          <a href="#">
            <Arrow />
          </a>
        </p>
      </div>
      <p className='font-medium text-base text-[#181819]'>Today's lesson</p>
      <p className='text-sm text-[#18181942]'>unit 6 - Article</p>
    </div>
  );
};

export default GroupInfo;
