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
import useOptionbarStore from '../stores/optionbar';

const Optionbar: React.FC<{
  onChangeFrame: (color: string) => void;
  onSaveFrame: () => void;
  onResetFrame: () => void;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textValue: string;
  onSaveText: () => void;
  onResetText: () => void;
  textSizeValue: string;
  onChangeTextSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveTextSize: () => void;
  onResetTextSize: () => void;
  onChangeTextColor: (color: string) => void;
  onSaveTextColor: () => void;
  onResetTextColor: () => void;
}> = (props) => {
  const {
    frame,
    text,
    textSize,
    textColor,
    setFrame,
    setText,
    setTextSize,
    setTextColor,
  } = useOptionbarStore((state) => state);

  const onSaveFrame = () => {
    props.onSaveFrame();
    setFrame(false);
  };

  const onCloseFrame = () => {
    props.onResetFrame();
    setFrame(false);
  };

  const onSaveText = () => {
    props.onSaveText();
    setText(false);
  };

  const onCloseText = () => {
    props.onResetText();
    setText(false);
  };

  const onSaveTextSize = () => {
    props.onSaveTextSize();
    setTextSize(false);
  };

  const onCloseTextSize = () => {
    props.onResetTextSize();
    setTextSize(false);
  };

  const onSaveTextColor = () => {
    props.onSaveTextColor();
    setTextColor(false);
  };

  const onCloseTextColor = () => {
    props.onResetTextColor();
    setTextColor(false);
  };

  return (
    <>
      <ul className='fixed bottom-0 left-0 z-30 flex items-center justify-start w-screen overflow-scroll text-white bg-black'>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button
            className='flex flex-col items-center justify-center'
            onClick={() => setFrame(true)}
          >
            <div className='w-[28px] h-[28px] overflow-hidden'>
              <img
                src='/assets/frame.png'
                alt='프레임'
                className='object-cover w-full h-full'
              />
            </div>
            <span>프레임</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button
            className='flex flex-col items-center justify-center'
            onClick={() => setText(true)}
          >
            <div className='w-[28px] h-[28px] overflow-hidden'>
              <img
                src='/assets/text.png'
                alt='글자 편집'
                className='object-cover w-full h-full'
              />
            </div>
            <span>글자 편집</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button
            className='flex flex-col items-center justify-center'
            onClick={() => setTextSize(true)}
          >
            <div className='w-[28px] h-[28px] overflow-hidden'>
              <img
                src='/assets/text-size.png'
                alt='글자 크기'
                className='object-cover w-full h-full'
              />
            </div>
            <span>글자 크기</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button
            className='flex flex-col items-center justify-center'
            onClick={() => setTextColor(true)}
          >
            <div className='w-[28px] h-[28px] overflow-hidden'>
              <img
                src='/assets/text-color.png'
                alt='글자 색상'
                className='object-cover w-full h-full'
              />
            </div>
            <span>글자 색상</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <div className='w-[28px] h-[28px] overflow-hidden'>
              <img
                src='/assets/text-style.png'
                alt='글자체'
                className='object-cover w-full h-full'
              />
            </div>
            <span>글자체</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <div className='w-[28px] h-[28px] overflow-hidden'>
              <img
                src='/assets/date.png'
                alt='날짜'
                className='object-cover w-full h-full'
              />
            </div>
            <span>날짜</span>
          </button>
        </li>
        <li className='min-w-[80px] flex items-center justify-center'>
          <button className='flex flex-col items-center justify-center'>
            <div className='w-[28px] h-[28px] overflow-hidden'>
              <img
                src='/assets/weather.png'
                alt='날씨'
                className='object-cover w-full h-full'
              />
            </div>
            <span>날씨</span>
          </button>
        </li>
      </ul>
      {frame && (
        <DetailOptionbar
          title='프레임 색상'
          onSave={onSaveFrame}
          onClose={onCloseFrame}
        >
          <li>
            <button
              onClick={() => props.onChangeFrame('white')}
              className='bg-white border border-gray-500 rounded-[100px] w-[28px] h-[28px]'
            ></button>
          </li>
          <li>
            <button
              onClick={() => props.onChangeFrame('black')}
              className='bg-black border border-gray-500 rounded-[100px] w-[28px] h-[28px]'
            ></button>
          </li>
        </DetailOptionbar>
      )}
      {text && (
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
      {textSize && (
        <DetailOptionbar
          title='글자 크기'
          onSave={onSaveTextSize}
          onClose={onCloseTextSize}
        >
          <li className='w-full'>
            <input
              type='range'
              min='16'
              max='56'
              step='4'
              onChange={props.onChangeTextSize}
              value={props.textSizeValue}
              className='w-[75%] mx-auto my-0 block h-[36px]'
            />
          </li>
        </DetailOptionbar>
      )}
      {textColor && (
        <DetailOptionbar
          title='글자 색상'
          onSave={onSaveTextColor}
          onClose={onCloseTextColor}
        >
          <li>
            <button
              onClick={() => props.onChangeTextColor('white')}
              className='bg-white border border-gray-500 rounded-[100px] w-[28px] h-[28px]'
            ></button>
          </li>
          <li>
            <button
              onClick={() => props.onChangeTextColor('black')}
              className='bg-black border border-gray-500 rounded-[100px] w-[28px] h-[28px]'
            ></button>
          </li>
        </DetailOptionbar>
      )}
    </>
  );
};

export default Optionbar;
