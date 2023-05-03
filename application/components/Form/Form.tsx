import React from 'react';
import ImageForm from './ImageForm';

const Form: React.FC<{ frameColor: string }> = (props) => {
  const styles = {
    frame: {
      backgroundColor: props.frameColor,
    },
  };

  return (
    <div
      style={styles.frame}
      className='mx-auto my-0 px-[12px] pb-[96px] w-[300px] h-[900px] gap-[12px] flex items-start justify-center flex-col'
    >
      <ImageForm />
      <ImageForm />
      <ImageForm />
      <ImageForm />
    </div>
  );
};

export default Form;
