import Link from 'next/link';
import React from 'react';
import NAVIGATION from '@/models/navigation';
import usePhotoStore from '@/stores/photos';

const Navigation: React.FC<NAVIGATION> = (props) => {
  const { setScale } = usePhotoStore((state) => state);
  return (
    <div className='fixed top-0 left-0 w-full h-[50px] flex items-center justify-between bg-black z-50'>
      <Link
        href='/'
        className='w-[50px] h-[50px] flex items-center justify-center'
        onClick={() => {
          props.onBack();
          setScale('30%');
        }}
      >
        <img
          src='/assets/chevron.png'
          alt='홈으로'
          className='rotate-90 w-[24px] h-[24px]'
        />
      </Link>
      <h2 className='text-[#fff] text-lg'>{props.title}</h2>
      <button
        className='w-[50px] h-[50px] flex items-center justify-center'
        onClick={props.onSaveImage}
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
