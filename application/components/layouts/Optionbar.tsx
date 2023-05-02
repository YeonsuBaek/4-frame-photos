import React from 'react';
import { TbFrame, TbPencilMinus } from 'react-icons/tb';
import {
  AiOutlineFontSize,
  AiOutlineFontColors,
  AiOutlineCalendar,
} from 'react-icons/ai';
import { RxFontStyle } from 'react-icons/rx';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import DetailOptionbar from './DetailOptionbar';

const Optionbar = () => {
  return (
    <>
      <ul className='fixed bottom-0 left-0 z-30 flex items-center justify-start w-screen overflow-scroll text-white bg-black'>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <TbFrame size={32} color='#fff' />
            <span>프레임</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <TbPencilMinus size={32} color='#fff' />
            <span>글자 편집</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <AiOutlineFontSize size={32} color='#fff' />
            <span>글자 크기</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <AiOutlineFontColors size={32} color='#fff' />
            <span>글자 색상</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <RxFontStyle size={32} color='#fff' />
            <span>글씨체</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <AiOutlineCalendar size={32} color='fff' />
            <span>날짜</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <TiWeatherPartlySunny size={32} color='#fff' />
            <span>날씨</span>
          </button>
        </li>
      </ul>
      <DetailOptionbar />
    </>
  );
};

export default Optionbar;
