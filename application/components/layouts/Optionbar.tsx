import React from 'react';
import DetailOptionbar from '../UI/DetailOptionbar';
import useOptionbarStore from '../../stores/optionbar';
import OptionButton from '../UI/OptionButton';
import OPTIONBAR from '@/models/optionbar';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

const Optionbar: React.FC<OPTIONBAR> = (props) => {
  const {
    frame,
    text,
    textSize,
    textColor,
    textStyle,
    setFrame,
    setText,
    setTextSize,
    setTextColor,
    setTextStyle,
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

  const onSaveTextStyle = () => {
    props.onSaveTextStyle();
    setTextStyle(false);
  };

  const onCloseTextStyle = () => {
    props.onResetTextStyle();
    setTextStyle(false);
  };

  const options = [
    {
      name: '프레임',
      event: () => setFrame(true),
      icon: '/assets/frame.png',
    },
    {
      name: '글자 편집',
      event: () => setText(true),
      icon: '/assets/text.png',
    },
    {
      name: '글자 크기',
      event: () => setTextSize(true),
      icon: '/assets/text-size.png',
    },
    {
      name: '글자 색상',
      event: () => setTextColor(true),
      icon: '/assets/text-color.png',
    },
    {
      name: '글씨체',
      event: () => setTextStyle(true),
      icon: '/assets/text-style.png',
    },
    {
      name: '날짜',
      event: () => setText(true),
      icon: '/assets/date.png',
    },
    {
      name: '날씨',
      event: () => setText(true),
      icon: '/assets/weather.png',
    },
  ];

  return (
    <>
      <ul className='fixed bottom-0 left-0 z-30 flex items-center justify-start w-screen h-[64px] px-[8px] overflow-scroll text-white bg-black'>
        {options.map((option) => {
          return <OptionButton key={option.name} option={option} />;
        })}
      </ul>
      {frame && (
        <DetailOptionbar
          title='프레임 색상'
          onSave={onSaveFrame}
          onClose={onCloseFrame}
        >
          <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide'>
            {colors.map((color) => {
              return (
                <li
                  key={color}
                  className='mx-[8px] flex items-center justify-center'
                >
                  <button
                    onClick={() => props.onChangeFrame(color)}
                    className='border border-gray-500 rounded-[100px] w-[32px] h-[32px]'
                    style={{ backgroundColor: color }}
                  ></button>
                </li>
              );
            })}
          </ul>
        </DetailOptionbar>
      )}
      {text && (
        <DetailOptionbar
          title='글자 편집'
          onSave={onSaveText}
          onClose={onCloseText}
        >
          <input
            type='text'
            onChange={(e) => props.onChangeText(e)}
            value={props.textValue}
            className='mx-[40px] text-black w-full block rounded-[4px] p-[4px] outline-none'
          />
        </DetailOptionbar>
      )}
      {textSize && (
        <DetailOptionbar
          title='글자 크기'
          onSave={onSaveTextSize}
          onClose={onCloseTextSize}
        >
          <input
            type='range'
            min='16'
            max='56'
            step='4'
            onChange={props.onChangeTextSize}
            value={props.textSizeValue}
            className='w-[75%] h-[4px] mx-auto my-0 accent-white rounded-lg cursor-pointer'
          />
        </DetailOptionbar>
      )}
      {textColor && (
        <DetailOptionbar
          title='글자 색상'
          onSave={onSaveTextColor}
          onClose={onCloseTextColor}
        >
          <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide'>
            {colors.map((color) => {
              return (
                <li
                  key={color}
                  className='mx-[8px] flex items-center justify-center'
                >
                  <button
                    onClick={() => props.onChangeTextColor(color)}
                    className='border border-gray-500 rounded-[100px] w-[32px] h-[32px]'
                    style={{ backgroundColor: color }}
                  ></button>
                </li>
              );
            })}
          </ul>
        </DetailOptionbar>
      )}
      {textStyle && (
        <DetailOptionbar
          title='글씨체'
          onSave={onSaveTextStyle}
          onClose={onCloseTextStyle}
        >
          <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide'>
            {fonts.map((font) => {
              return (
                <li
                  key={font}
                  className='mx-[8px] flex items-center justify-center'
                >
                  <button
                    onClick={() => props.onChangeTextStyle(font)}
                    style={{ fontFamily: `var(--${font})` }}
                  >
                    폰트 Font
                  </button>
                </li>
              );
            })}
          </ul>
        </DetailOptionbar>
      )}
    </>
  );
};

export default Optionbar;
