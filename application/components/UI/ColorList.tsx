import React from 'react';

const ColorList: React.FC<{
  colors: string[];
  onChangeFrame: (color: string) => void | null;
  onChangeTextColor: (color: string) => void | null;
}> = (props) => {
  return (
    <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide'>
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
