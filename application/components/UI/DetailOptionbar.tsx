import { on } from 'events';
import React from 'react';
import { TfiClose, TfiCheck } from 'react-icons/tfi';

const DetailOptionbar: React.FC<{
  title: string;
  children: React.ReactChild[] | React.ReactChild;
  onClose: () => void;
  onSave: () => void;
}> = (props) => {
  return (
    <div className='fixed bottom-0 left-0 z-50 flex flex-col items-center justify-start w-screen overflow-scroll text-white bg-black'>
      <div className='h-[48px] flex items-center'>{props.children}</div>
      <div className='flex justify-between items-center w-full px-4 h-[40px]'>
        <button onClick={props.onClose}>
          <TfiClose />
        </button>
        <h3>{props.title}</h3>
        <button onClick={props.onSave}>
          <TfiCheck />
        </button>
      </div>
    </div>
  );
};

export default DetailOptionbar;
