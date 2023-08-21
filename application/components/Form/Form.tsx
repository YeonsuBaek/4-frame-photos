import useOptionbarStore from '@/stores/optionbar';
import React from 'react';
import useStore from '@/stores/create';
import ImageForm from './ImageForm';

const Form = () => {
  const { current, def } = useStore((state) => state);
  const { optionbar } = useOptionbarStore((state) => state);

  const styles = {
    frame: {
      backgroundColor: current.frame,
    },
    text: {
      fontSize: current.textSize + 'px',
      color: current.textColor,
      fontFamily: current.textStyle,
    },
    date: {
      [current.datePos]: '0',
    },
  };

  return (
    <div
      style={styles.frame}
      className='relative px-[60px] pt-[60px] w-[1500px] h-[4500px] gap-[60px] flex justify-start flex-col'
    >
      <ImageForm />
      <ImageForm />
      <ImageForm />
      <ImageForm />
      <div
        className='absolute bottom-[60px] left-0 w-full h-[460px] overflow-hidden '
        style={styles.text}
      >
        <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap flex items-center justify-center'>
          {current.text}
        </span>
        {(optionbar == 'date' || def.date) && (
          <span
            className='absolute text-[64px] left-[50%] translate-x-[-50%]'
            style={styles.date}
          >
            {current.date.replaceAll('-', '.')}
          </span>
        )}
      </div>
    </div>
  );
};

export default Form;
