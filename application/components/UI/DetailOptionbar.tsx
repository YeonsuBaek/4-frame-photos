import DETAIL_OPTIONBAR from '@/models/detailoptionbar';
import React from 'react';
import useOptionbarStore from '../../stores/optionbar';

const DetailOptionbar: React.FC<DETAIL_OPTIONBAR> = (props) => {
  const { setOptionbar } = useOptionbarStore((state) => state);

  return (
    <div className='fixed bottom-0 left-0 z-50 flex flex-col items-center justify-start w-screen overflow-scroll text-white bg-black'>
      <div className='h-[48px] flex items-center w-full'>{props.children}</div>
      <div className='flex justify-between items-center w-full px-[8px] h-[40px]'>
        <button
          onClick={() => {
            props.onClose();
            setOptionbar('');
          }}
          className='w-[40px] h-[40px] flex items-center justify-center'
        >
          <img
            src='/assets/close.png'
            alt={`${props.title} 옵션 취소`}
            className='w-[24px] h-[24px]'
          />
        </button>
        <h3>{props.title}</h3>
        <button
          onClick={() => {
            props.onSave();
            setOptionbar('');
          }}
          className='w-[40px] h-[40px] flex items-center justify-center'
        >
          <img
            src='/assets/check.png'
            alt={`${props.title} 옵션 적용`}
            className='w-[24px] h-[24px]'
          />
        </button>
      </div>
    </div>
  );
};

export default DetailOptionbar;
