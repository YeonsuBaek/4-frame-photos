import React from 'react';
import ImageForm from './ImageForm';

const Form: React.FC<{ frameColor: string; text: string; textSize: string }> = (
  props
) => {
  const styles = {
    frame: {
      backgroundColor: props.frameColor,
    },
    text: {
      fontSize: props.textSize + 'px',
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
        className='w-full h-[96px] flex items-center justify-center text-white'
        style={styles.text}
      >
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default Form;