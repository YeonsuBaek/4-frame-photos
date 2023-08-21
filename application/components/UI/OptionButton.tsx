import OPTION from '@/models/option';
import React from 'react';
import useOptionbarStore from '../../stores/optionbar';

const OptionButton = ({ option }: OPTION) => {
  const { setOptionbar } = useOptionbarStore((state) => state);

  return (
    <li
      key={option.name}
      className='min-w-[80px] flex items-center justify-center'
    >
      <button
        className='flex flex-col items-center justify-center'
        onClick={() => setOptionbar(`${option.type}`)}
      >
        <div className='w-[28px] h-[28px] overflow-hidden'>
          <img
            src={`/assets/${option.type}.png`}
            alt={option.name}
            className='object-cover w-full h-full'
          />
        </div>
        <span>{option.name}</span>
      </button>
    </li>
  );
};

export default OptionButton;
