import FORM from '@/models/form';
import useOptionbarStore from '@/stores/optionbar';
import React from 'react';
import useStore from '@/stores/create';
import ImageForm from './ImageForm';

const Form: React.FC<FORM> = (props) => {
  const { defDate } = useStore((state) => state);
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
    date: {
      [props.datePos]: 0,
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
          {props.text}
        </span>
        {(dateBar || defDate) && (
          <span className='absolute text-[14px]' style={styles.date}>
            {props.date.replaceAll('-', '.')}
          </span>
        )}
      </div>
    </div>
  );
};

export default Form;
