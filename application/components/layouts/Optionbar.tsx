import React from 'react';
import DetailOptionbar from '../UI/DetailOptionbar';
import useOptionbarStore from '../stores/optionbar';
import OptionButton from '../UI/OptionButton';

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
      event: () => setText(true),
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
      <ul className='fixed bottom-0 left-0 z-30 flex items-center justify-start w-screen overflow-scroll text-white bg-black'>
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
