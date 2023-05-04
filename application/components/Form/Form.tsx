import FORM from '@/models/form';
import useOptionbarStore from '@/stores/optionbar';
import React from 'react';
import ImageForm from './ImageForm';

const Form: React.FC<FORM> = (props) => {
  const { dateBar } = useOptionbarStore((state) => state);

  const styles = {
    frame: {
      backgroundColor: props.frameColor,
    },
    text: {
      fontSize: props.textSize + 'px',
      color: props.textColor,
      fontFamily: `var(--${props.textStyle})`,
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
        className='w-full h-[96px] flex items-center justify-center'
        style={styles.text}
      >
        <span>{props.text}</span>
        {dateBar && <span>{props.date}</span>}
      </div>
    </div>
  );
};

export default Form;
