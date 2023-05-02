import React from 'react';
import { TfiClose, TfiCheck } from 'react-icons/tfi';

const DetailOptionbar = () => {
  return (
    <div className='fixed bottom-0 left-0 z-50 flex flex-col items-center justify-start w-screen h-[72px] overflow-scroll text-white bg-black'>
      <ul className='flex justify-start gap-[16px]'>
        <li>
          <button className='bg-white border border-gray-500 rounded-[100px] w-[32px] h-[32px]'></button>
        </li>
        <li>
          <button className='bg-black border border-gray-500 rounded-[100px] w-[32px] h-[32px]'></button>
        </li>
      </ul>

      <div className='flex justify-between w-full px-4'>
        <TfiClose />
        <h3>프레임</h3>
        <TfiCheck />
      </div>
    </div>
  );
};

export default DetailOptionbar;
