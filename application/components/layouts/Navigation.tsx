import Link from 'next/link';
import React from 'react';
import NAVIGATION from '@/models/navigation';

const Navigation: React.FC<NAVIGATION> = (props) => {
  return (
    <div className='fixed top-0 left-0 w-full h-[50px] flex items-center justify-between bg-black z-30'>
      <Link
        href='/'
        className='w-[50px] h-[50px] flex items-center justify-center'
        onClick={() => props.onBack()}
      >
        <img
          src='/assets/chevron.png'
          alt='홈으로'
          className='rotate-90 w-[24px] h-[24px]'
        />
      </Link>
      <h2 className='text-[#fff] text-lg'>{props.title}</h2>
      <Link
        className='w-[50px] h-[50px] flex items-center justify-center'
        href='/result'
      >
        <img
          src='/assets/download.png'
          alt='저장하기'
          className='w-[24px] h-[24px]'
        />
      </Link>
    </div>
  );
};

export default Navigation;
