import graph from '../../assets/Graph.svg';
import chat from '../../assets/Chat.svg';
import chart from '../../assets/Chart.svg';
import user from '../../assets/User.svg';
import document from '../../assets/document.svg';
import danger from '../../assets/danger.svg';
import setting from '../../assets/setting.svg';

const Links = () => {
  return (
    <nav>
      <ul className='flex flex-col gap-2 mt-4'>
        <li>
          <a href='#' className='flex items-center text-base space-x-2'>
            <img src={graph} alt='dashboard' /> <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center  text-[#ffffff70] text-base space-x-2 hover:text-white'>
            <img src={chart} alt='overview' /> <span>Overview</span>
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex  items-center text-[#ffffff70] text-base space-x-2 hover:text-white'>
            <img src={chat} alt='chart' /> <span>Chart</span>
            <span className='bg-[#FFA000] h-5 w-5 ml-auto flex items-center justify-center text-white rounded-full text-xs'>
              5
            </span>
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center text-[#ffffff70] text-base space-x-2 hover:text-white'>
            <img src={user} alt='team' /> <span>Team</span>
          </a>
        </li>
      </ul>
      <p className='uppercase text-[#ffffff42] my-4'>Shortcut</p>
      <ul className='flex flex-col gap-2 mt-4'>
        <li>
          <a
            href='#'
            className='flex items-center  text-[#ffffff70] text-base space-x-2 hover:text-white'>
            <img src={document} alt='tasks' /> <span>Tasks</span>
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex  items-center text-[#ffffff70] text-base space-x-2 hover:text-white'>
            <img src={danger} alt='reports' /> <span>Reports</span>
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center text-[#ffffff70] text-base space-x-2 hover:text-white'>
            <img src={setting} alt='settings' /> <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
