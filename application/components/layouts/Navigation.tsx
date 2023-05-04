import Link from 'next/link';
import React from 'react';
import { TfiShare } from 'react-icons/tfi';
import { BsChevronLeft } from 'react-icons/bs';
import NAVIGATION from '@/models/navigation';

const Navigation: React.FC<NAVIGATION> = (props) => {
  return (
    <div className='fixed top-0 left-0 w-full h-[50px] flex items-center justify-between bg-black z-50'>
      <Link
        href='/'
        className='w-[50px] h-[50px] flex items-center justify-center'
      >
        <BsChevronLeft size={24} color='#fff' />
      </Link>
      <h2 className='text-[#fff] text-lg'>{props.title}</h2>
      <button
        className='w-[50px] h-[50px] flex items-center justify-center'
        onClick={props.onSaveImage}
      >
        <TfiShare size={24} color='#fff' />
      </button>
    </div>
  );
};

export default Navigation;
