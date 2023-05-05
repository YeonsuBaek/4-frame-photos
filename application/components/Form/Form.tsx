import useOptionbarStore from '@/stores/optionbar';
import React from 'react';
import useStore from '@/stores/create';
import ImageForm from './ImageForm';

const Form = () => {
  const {
    frame,
    text,
    textSize,
    textColor,
    textStyle,
    date,
    datePos,
    defDate,
  } = useStore((state) => state);
  const { dateBar } = useOptionbarStore((state) => state);

  const styles = {
    frame: {
      backgroundColor: frame,
    },
    text: {
      fontSize: textSize + 'px',
      color: textColor,
      fontFamily: `var(--${textStyle})`,
    },
    date: {
      [datePos]: 0,
    },
  };

  return (
    <div
      style={styles.frame}
      className='px-[12px] w-[300px] h-[900px] gap-[12px] flex items-start justify-center flex-col'
    >
      <ImageForm />
      <ImageForm />
      <ImageForm />
      <ImageForm />
      <div
        className='relative w-full h-[96px] flex items-center justify-center overflow-hidden'
        style={styles.text}
      >
        <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center whitespace-nowrap'>
          {text}
        </span>
        {(dateBar || defDate) && (
          <span className='absolute text-[14px]' style={styles.date}>
            {date.replaceAll('-', '.')}
          </span>
        )}
      </div>
    </div>
  );
};

export default Form;
