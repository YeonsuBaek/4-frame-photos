import COLOR_LIST from '@/models/colorlist';
import React from 'react';
import { ChromePicker } from 'react-color';

const ColorList: React.FC<COLOR_LIST> = (props) => {
  const [colorPicker, setColorPicker] = React.useState(false);
  const [color, setColor] = React.useState('#ffffff');

  const onChangeColor = (color: { hex: string }) => {
    setColor(color.hex);
    props.onChangeColor(color.hex);
  };

  return (
    <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide'>
      <li className='mx-[8px] flex items-center justify-center'>
        <button
          className='border border-gray-500 rounded-[100px] w-[32px] h-[32px]'
          style={{ backgroundColor: color }}
          onClick={() => setColorPicker(colorPicker ? false : true)}
        >
          지정
        </button>
        {colorPicker && (
          <div style={{ position: 'fixed', left: '20px', bottom: '100px' }}>
            <ChromePicker color={color} onChange={onChangeColor} />
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
