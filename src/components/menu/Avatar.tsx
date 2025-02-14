import avatar from '../../assets/img.svg';
import unfold from '../../assets/unfold_more.svg';

const Avatar = () => {
  return (
    <a
      href='#'
      className='border-t border-[#E6E7E920] mt-4 pt-4 flex items-center gap-4'>
      <img src={avatar} alt='avatar' />
      <p>Jane Smith</p>
      <img className='ml-auto' src={unfold} alt='unfold' />
    </a>
  );
};

export default Avatar;
