import COLOR_LIST from '@/models/colorlist';
import React from 'react';
import { ChromePicker } from 'react-color';
import useColorlistStore from '../../stores/colorlist';

const ColorList: React.FC<COLOR_LIST> = (props) => {
  const { colorPicker, selectedColor, setColorPicker, setSelectedColor } =
    useColorlistStore((state) => state);

  const onChangeColor = (color: { hex: string }) => {
    setSelectedColor(color.hex);
    props.onChangeColor(color.hex);
  };

  return (
    <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide'>
      <li className='mx-[8px] flex items-center justify-center'>
        <button
          className='rounded-[100px] w-[32px] h-[32px] flex items-center justify-center'
          onClick={() => setColorPicker(colorPicker ? false : true)}
        >
          <img
            src='/assets/colors.png'
            alt='사용자 색상 지정'
            className='w-[28px] h-[28px]'
          />
        </button>
        {colorPicker && (
          <div style={{ position: 'fixed', left: '20px', bottom: '100px' }}>
            <ChromePicker color={selectedColor} onChange={onChangeColor} />
          </div>
        )}
      </li>
      {props.colors.map((color) => {
        const handleClick = (color: string) => {
          props.onChangeFrame(color);
          props.onChangeTextColor(color);
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
