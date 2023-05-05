import OPTION from '@/models/option';
import React from 'react';
import useOptionbarStore from '../../stores/optionbar';

const OptionButton: React.FC<{
  option: OPTION;
}> = (props) => {
  const { setOptionbar } = useOptionbarStore((state) => state);

  return (
    <li
      key={props.option.name}
      className='min-w-[80px] flex items-center justify-center'
    >
      <button
        className='flex flex-col items-center justify-center'
        onClick={() => setOptionbar(`${props.option.type}`)}
      >
        <div className='w-[28px] h-[28px] overflow-hidden'>
          <img
            src={`/assets/${props.option.type}.png`}
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
