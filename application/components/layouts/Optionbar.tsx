import React from 'react';
import DetailOptionbar from '../UI/DetailOptionbar';
import useOptionbarStore from '../../stores/optionbar';
import OptionButton from '../UI/OptionButton';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import ColorList from '../UI/ColorList';
import useStore from '../../stores/create';
import useColorlistStore from '../../stores/colorlist';
import options from '../../assets/options';

const Optionbar = () => {
  const { current, def, setCurrent, setDef } = useStore((state) => state);
  const { optionbar } = useOptionbarStore((state) => state);
  const { setColorPicker } = useColorlistStore((state) => state);

  return (
    <>
      <ul className='fixed bottom-0 left-0 z-30 flex items-center justify-start w-screen h-[64px] px-[8px] overflow-scroll text-white bg-black scrollbar-hide md:justify-center'>
        {options.map((option) => {
          return <OptionButton key={option.name} option={option} />;
        })}
      </ul>
      {optionbar == 'frame' && (
        <DetailOptionbar
          title='프레임 색상'
          onSave={() => {
            setDef('frame', current.frame);
            setColorPicker(false);
          }}
          onClose={() => {
            setCurrent('frame', def.frame);
            setColorPicker(false);
          }}
        >
          <ColorList
            colors={colors}
            onChangeFrame={(color) => setCurrent('frame', color)}
            onChangeColor={(color) => setCurrent('frame', color)}
          />
        </DetailOptionbar>
      )}
      {optionbar == 'text' && (
        <DetailOptionbar
          title='글자 편집'
          onSave={() => setDef('text', current.text)}
          onClose={() => setCurrent('text', def.text)}
        >
          <input
            type='text'
            onChange={(e) => setCurrent('text', e.target.value)}
            value={current.text}
            className='mx-[40px] text-black w-full block rounded-[4px] p-[4px] outline-none'
          />
        </DetailOptionbar>
      )}
      {optionbar == 'textSize' && (
        <DetailOptionbar
          title='글자 크기'
          onSave={() => setDef('textSize', current.textSize)}
          onClose={() => setCurrent('textSize', def.textSize)}
        >
          <input
            type='range'
            min='64'
            max='288'
            step='16'
            onChange={(e) => setCurrent('textSize', e.target.value)}
            value={current.textSize}
            className='w-[75%] h-[4px] mx-auto my-0 accent-white rounded-lg cursor-pointer'
          />
        </DetailOptionbar>
      )}
      {optionbar == 'textColor' && (
        <DetailOptionbar
          title='글자 색상'
          onSave={() => {
            setDef('textColor', current.textColor);
            setColorPicker(false);
          }}
          onClose={() => {
            setCurrent('textColor', def.textColor);
            setColorPicker(false);
          }}
        >
          <ColorList
            colors={colors}
            onChangeTextColor={(color) => setCurrent('textColor', color)}
            onChangeColor={(color) => setCurrent('textColor', color)}
          />
        </DetailOptionbar>
      )}
      {optionbar == 'textStyle' && (
        <DetailOptionbar
          title='글씨체'
          onSave={() => setDef('textStyle', current.textStyle)}
          onClose={() => setCurrent('textStyle', def.textStyle)}
        >
          <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide md:justify-center'>
            {fonts.map((font) => {
              return (
                <li
                  key={font}
                  className='mx-[8px] flex items-center justify-center'
                >
                  <button
                    onClick={() => setCurrent('textStyle', font)}
                    className='w-[84px]'
                    style={{ fontFamily: font }}
                  >
                    폰트 Font
                  </button>
                </li>
              );
            })}
          </ul>
        </DetailOptionbar>
      )}
      {optionbar == 'date' && (
        <DetailOptionbar
          title='날짜'
          onSave={() => {
            setDef('date', current.date);
            setDef('datePos', current.datePos);
          }}
          onClose={() => {
            setCurrent('date', def.date);
            setCurrent('datePos', def.datePos);
          }}
        >
          <button
            className='flex items-center justify-center w-[48px] h-[48px]'
            onClick={() =>
              setCurrent(
                'datePos',
                current.datePos == 'bottom' ? 'top' : 'bottom'
              )
            }
          >
            <img
              src='/assets/move.png'
              alt='위치 상하로 옮기기'
              className='w-[28px] h-[28px]'
            />
          </button>
          <input
            type='date'
            onChange={(e) => setCurrent('date', e.target.value)}
            value={current.date}
            className='mx-[8px] w-[75%] block rounded-[4px] outline-none bg-white text-black'
          />
          <button
            onClick={() => {
              setCurrent('date', 'bottom');
              setCurrent('date', '');
            }}
            className='flex items-center justify-center w-[48px] h-[48px]'
          >
            <img
              src='/assets/remove.png'
              alt='날짜 삭제하기'
              className='w-[28px] h-[28px]'
            />
          </button>
        </DetailOptionbar>
      )}
    </>
  );
};

export default Optionbar;
