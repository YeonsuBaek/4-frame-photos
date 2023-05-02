import React from 'react';
import { TbFrame, TbPencilMinus } from 'react-icons/tb';
import { AiOutlineFontSize, AiOutlineFontColors } from 'react-icons/ai';
import { RxFontStyle } from 'react-icons/rx';
import { TiWeatherPartlySunny } from 'react-icons/ti';

const Optionbar = () => {
  return (
    <ul className='fixed bottom-0 left-0 w-full flex items-center justify-start bg-black'>
      <li>
        <TbFrame size={32} color='#fff' />
      </li>
      <li>
        <TbPencilMinus size={32} color='#fff' />
      </li>
      <li>
        <AiOutlineFontSize size={32} color='#fff' />
      </li>
      <li>
        <AiOutlineFontColors size={32} color='#fff' />
      </li>
      <li>
        <RxFontStyle size={32} color='#fff' />
      </li>
      <li>
        <TiWeatherPartlySunny size={32} color='#fff' />
      </li>
    </ul>
  );
};

export default Optionbar;
