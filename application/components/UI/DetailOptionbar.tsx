import React from 'react';
import { TfiClose, TfiCheck } from 'react-icons/tfi';

const DetailOptionbar: React.FC<{
  title: string;
  children: React.ReactChild[] | React.ReactChild[];
}> = (props) => {
  return (
    <div className='fixed bottom-0 left-0 z-50 flex flex-col items-center justify-start w-screen h-[72px] overflow-scroll text-white bg-black'>
      <ul className='flex justify-start gap-[16px]'>{props.children}</ul>

      <div className='flex justify-between w-full px-4'>
        <TfiClose />
        <h3>{props.title}</h3>
        <TfiCheck />
      </div>
    </div>
  );
};

export default DetailOptionbar;
