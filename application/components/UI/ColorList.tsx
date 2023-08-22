import COLOR_LIST from '@/models/colorlist';
import React from 'react';
import { ChromePicker } from 'react-color';
import useColorlistStore from '../../stores/colorlist';

const ColorList = ({
  colors,
  onChangeColor,
  onChangeFrame,
  onChangeTextColor,
}: COLOR_LIST) => {
  const { colorPicker, selectedColor, setColorPicker, setSelectedColor } =
    useColorlistStore((state) => state);

  const handleChangeColor = (color: { hex: string }) => {
    setSelectedColor(color.hex);
    onChangeColor(color.hex);
  };

  return (
    <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide md:justify-center'>
      <li className='mx-[8px] flex items-center justify-center'>
        <button
          className='rounded-[100px] w-[32px] h-[32px] flex items-center justify-center'
          onClick={() => setColorPicker(!colorPicker)}
        >
          <img
            src='/assets/colors.png'
            alt='사용자 색상 지정'
            className='w-[28px] h-[28px]'
          />
        </button>
        {colorPicker && (
          <div style={{ position: 'fixed', left: '20px', bottom: '100px' }}>
            <ChromePicker color={selectedColor} onChange={handleChangeColor} />
          </div>
        )}
      </li>
      {colors.map((color) => {
        const handleClick = (color: string) => {
          onChangeFrame && onChangeFrame(color);
          onChangeTextColor && onChangeTextColor(color);
        };

        return (
          <li key={color} className='mx-[8px] flex items-center justify-center'>
            <button
              onClick={() => handleClick(color)}
              className='border border-gray-500 rounded-[100px] w-[32px] h-[32px]'
              style={{ backgroundColor: color }}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

export default ColorList;
