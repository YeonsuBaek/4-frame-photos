import Link from 'next/link';
import React from 'react';
import NAVIGATION from '@/models/navigation';

const Navigation = ({ onSave, onBack, children }: NAVIGATION) => {
  return (
    <div className='fixed top-0 left-0 w-full h-[50px] flex items-center justify-between bg-black z-30 md:px-[16px]'>
      <Link
        href='/'
        className='w-[50px] h-[50px] flex items-center justify-center'
        onClick={onBack}
      >
        <img
          src='/assets/chevron.png'
          alt='홈으로'
          className='rotate-90 w-[24px] h-[24px]'
        />
      </Link>
      <h2 className='text-[#fff] text-lg pointer-events-none'>{children}</h2>
      <button
        className='w-[50px] h-[50px] flex items-center justify-center'
        onClick={onSave}
      >
        <img
          src='/assets/download.png'
          alt='저장하기'
          className='w-[24px] h-[24px]'
        />
      </button>
    </div>
  );
};

export default Navigation;
