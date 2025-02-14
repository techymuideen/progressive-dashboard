import Main from '../components/main/Main';
import ResponsiveMenu from '../components/menu/ResponsiveMenu';

const DashBoard = () => {
  return (
    <div className='md:flex md:items-stretch'>
      <ResponsiveMenu />
      <Main />
    </div>
  );
};

export default DashBoard;
