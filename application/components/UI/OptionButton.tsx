import React from 'react';

type OPTION = {
  name: string;
  event: () => void;
  icon: string;
};

const OptionButton: React.FC<{
  option: OPTION;
}> = (props) => {
  return (
    <li
      key={props.option.name}
      className='min-w-[80px] flex items-center justify-center'
    >
      <button
        className='flex flex-col items-center justify-center'
        onClick={props.option.event}
      >
        <div className='w-[28px] h-[28px] overflow-hidden'>
          <img
            src={props.option.icon}
            alt={props.option.name}
            className='object-cover w-full h-full'
          />
        </div>
        <span>{props.option.name}</span>
      </button>
    </li>
  );
};

export default OptionButton;
