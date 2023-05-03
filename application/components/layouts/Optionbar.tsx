import React, { useState } from 'react';
import { TbFrame, TbPencilMinus } from 'react-icons/tb';
import {
  AiOutlineFontSize,
  AiOutlineFontColors,
  AiOutlineCalendar,
} from 'react-icons/ai';
import { RxFontStyle } from 'react-icons/rx';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import DetailOptionbar from '../UI/DetailOptionbar';

const Optionbar: React.FC<{
  onChangeFrame: (color: string) => void;
  onSaveFrame: () => void;
  onResetFrame: () => void;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textValue: string;
  onSaveText: () => void;
  onResetText: () => void;
}> = (props) => {
  const [detailOptionbar, setDetailOptionbar] = useState(false);
  const [textBar, setTextBar] = useState(false);

  const handleOpenDetailOptionbar = () => {
    setDetailOptionbar(true);
  };

  const handleOpenTextBar = () => {
    setTextBar(true);
  };

  const onSaveFrame = () => {
    props.onSaveFrame();
    setDetailOptionbar(false);
  };

  const onCloseFrame = () => {
    props.onResetFrame();
    setDetailOptionbar(false);
  };

  const onSaveText = () => {
    props.onSaveText();
    setTextBar(false);
  };

  const onCloseText = () => {
    props.onResetText();
    setTextBar(false);
  };

  return (
    <>
      <ul className='fixed bottom-0 left-0 z-30 flex items-center justify-start w-screen overflow-scroll text-white bg-black'>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button
            className='flex flex-col items-center justify-center'
            onClick={handleOpenDetailOptionbar}
          >
            <TbFrame size={32} color='#fff' />
            <span>프레임</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button
            className='flex flex-col items-center justify-center'
            onClick={handleOpenTextBar}
          >
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
      {detailOptionbar && (
        <DetailOptionbar
          title='프레임 색상'
          onSave={onSaveFrame}
          onClose={onCloseFrame}
        >
          <li>
            <button
              onClick={() => props.onChangeFrame('white')}
              className='bg-white border border-gray-500 rounded-[100px] w-[32px] h-[32px]'
            ></button>
          </li>
          <li>
            <button
              onClick={() => props.onChangeFrame('black')}
              className='bg-black border border-gray-500 rounded-[100px] w-[32px] h-[32px]'
            ></button>
          </li>
        </DetailOptionbar>
      )}
      {textBar && (
        <DetailOptionbar
          title='글자 편집'
          onSave={onSaveText}
          onClose={onCloseText}
        >
          <li className='w-full'>
            <input
              type='text'
              onChange={(e) => props.onChangeText(e)}
              value={props.textValue}
              className='mx-auto my-0 text-black w-[75%] block rounded-[4px] p-[4px] outline-none'
            />
          </li>
        </DetailOptionbar>
      )}
    </>
  );
};

export default Optionbar;
