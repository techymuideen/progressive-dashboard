const StorageStatus = () => {
  return (
    <div className='flex flex-col text-white gap-4 py-4 px-6 mt-30  md:auto rounded-xl bg-[#342BC2] '>
      <p className='flex justify-between'>
        <span>Storage</span>
        <a href='#' className='text-[#ffffff42] hover:text-white'>
          Upgrade
        </a>
      </p>
      <p>
        <span>3.4GB</span>
        <span className='text-[#ffffff42]'> of 15GB</span>
      </p>
      <div className='h-1 w-full bg-[#4544DA]'>
        <div className='h-1 bg-[#CACCF7]' style={{ width: '22.67%' }}></div>
      </div>
    </div>
  );
};

export default StorageStatus;
