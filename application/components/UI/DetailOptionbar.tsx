import DETAIL_OPTIONBAR from '@/models/detailoptionbar';
import React from 'react';
import useOptionbarStore from '../../stores/optionbar';

const DetailOptionbar = ({
  title,
  onSave,
  onClose,
  children,
}: DETAIL_OPTIONBAR) => {
  const { setOptionbar } = useOptionbarStore((state) => state);

  return (
    <div className='fixed bottom-0 left-0 z-50 flex flex-col items-center justify-start w-screen overflow-scroll text-white bg-black'>
      <div className='h-[48px] flex items-center w-full md:justify-center'>
        {children}
      </div>
      <div className='flex justify-between items-center w-full px-[8px] h-[40px] md:px-[16px]'>
        <button
          onClick={() => {
            onClose();
            setOptionbar('');
          }}
          className='w-[40px] h-[40px] flex items-center justify-center'
        >
          <img
            src='/assets/close.png'
            alt={`${title} 옵션 취소`}
            className='w-[24px] h-[24px]'
          />
        </button>
        <h3>{title}</h3>
        <button
          onClick={() => {
            onSave();
            setOptionbar('');
          }}
          className='w-[40px] h-[40px] flex items-center justify-center'
        >
          <img
            src='/assets/check.png'
            alt={`${title} 옵션 적용`}
            className='w-[24px] h-[24px]'
          />
        </button>
      </div>
    </div>
  );
};

export default DetailOptionbar;
