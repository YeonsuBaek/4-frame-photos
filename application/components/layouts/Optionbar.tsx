import React from 'react';
import DetailOptionbar from '../UI/DetailOptionbar';
import useOptionbarStore from '../../stores/optionbar';
import OptionButton from '../UI/OptionButton';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import ColorList from '../UI/ColorList';
import useStore from '../../stores/create';

const Optionbar: React.FC = () => {
  const {
    frame,
    text,
    textSize,
    textColor,
    textStyle,
    date,
    setFrame,
    setText,
    setTextSize,
    setTextColor,
    setTextStyle,
    setDate,
    defFrame,
    defText,
    defTextSize,
    defTextColor,
    defTextStyle,
    defDate,
    setDefFrame,
    setDefText,
    setDefTextSize,
    setDefTextColor,
    setDefTextStyle,
    setDefDate,
  } = useStore((state) => state);

  const {
    frameBar,
    textBar,
    textSizeBar,
    textColorBar,
    textStyleBar,
    dateBar,
    setFrameBar,
    setTextBar,
    setTextSizeBar,
    setTextColorBar,
    setTextStyleBar,
    setDateBar,
  } = useOptionbarStore((state) => state);

  const onSaveFrame = () => {
    setDefFrame(frame);
    setFrameBar(false);
  };

  const onCloseFrame = () => {
    setFrame(defFrame);
    setFrameBar(false);
  };

  const onSaveText = () => {
    setDefText(text);
    setTextBar(false);
  };

  const onCloseText = () => {
    setText(defText);
    setTextBar(false);
  };

  const onSaveTextSize = () => {
    setDefTextSize(textSize);
    setTextSizeBar(false);
  };

  const onCloseTextSize = () => {
    setTextSize(defTextSize);
    setTextSizeBar(false);
  };

  const onSaveTextColor = () => {
    setDefTextColor(textColor);
    setTextColorBar(false);
  };

  const onCloseTextColor = () => {
    setTextColor(defTextColor);
    setTextColorBar(false);
  };

  const onSaveTextStyle = () => {
    setDefTextStyle(textStyle);
    setTextStyleBar(false);
  };

  const onCloseTextStyle = () => {
    setTextStyle(defTextStyle);
    setTextStyleBar(false);
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const formattedDate = date.replaceAll('-', '.');
    setDate(formattedDate);
  };

  const onSaveDate = () => {
    setDefDate(date);
    setDateBar(false);
  };

  const onCloseDate = () => {
    setDate(defDate);
    setDateBar(false);
  };

  const onRemoveDate = () => {
    setDate('');
  };

  const options = [
    {
      name: '프레임',
      event: () => setFrameBar(true),
      icon: '/assets/frame.png',
    },
    {
      name: '글자 편집',
      event: () => setTextBar(true),
      icon: '/assets/text.png',
    },
    {
      name: '글자 크기',
      event: () => setTextSizeBar(true),
      icon: '/assets/text-size.png',
    },
    {
      name: '글자 색상',
      event: () => setTextColorBar(true),
      icon: '/assets/text-color.png',
    },
    {
      name: '글씨체',
      event: () => setTextStyleBar(true),
      icon: '/assets/text-style.png',
    },
    {
      name: '날짜',
      event: () => setDateBar(true),
      icon: '/assets/date.png',
    },
    {
      name: '날씨',
      event: () => setTextBar(true),
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
      {frameBar && (
        <DetailOptionbar
          title='프레임 색상'
          onSave={onSaveFrame}
          onClose={onCloseFrame}
        >
          <ColorList
            colors={colors}
            onChangeFrame={(color) => setFrame(color)}
            onChangeTextColor={() => null}
          />
        </DetailOptionbar>
      )}
      {textBar && (
        <DetailOptionbar
          title='글자 편집'
          onSave={onSaveText}
          onClose={onCloseText}
        >
          <input
            type='text'
            onChange={(e) => setText(e.target.value)}
            value={text}
            className='mx-[40px] text-black w-full block rounded-[4px] p-[4px] outline-none'
          />
        </DetailOptionbar>
      )}
      {textSizeBar && (
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
            onChange={(e) => setTextSize(e.target.value)}
            value={textSize}
            className='w-[75%] h-[4px] mx-auto my-0 accent-white rounded-lg cursor-pointer'
          />
        </DetailOptionbar>
      )}
      {textColorBar && (
        <DetailOptionbar
          title='글자 색상'
          onSave={onSaveTextColor}
          onClose={onCloseTextColor}
        >
          <ColorList
            colors={colors}
            onChangeTextColor={(color) => setTextColor(color)}
            onChangeFrame={() => null}
          />
        </DetailOptionbar>
      )}
      {textStyleBar && (
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
                    onClick={() => setTextStyle(font)}
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
      {dateBar && (
        <DetailOptionbar title='날짜' onSave={onSaveDate} onClose={onCloseDate}>
          <input
            type='date'
            onChange={handleChangeDate}
            className='mx-[40px] text-black w-full block rounded-[4px] p-[4px] outline-none'
          />
          <button onClick={onRemoveDate}>삭제</button>
        </DetailOptionbar>
      )}
    </>
  );
};

export default Optionbar;
