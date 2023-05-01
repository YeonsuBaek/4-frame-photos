import React from 'react';

const Button: React.FC<{ text: string; color: string; bg: string }> = (
  props
) => {
  return (
    <button
      style={{ color: props.color, backgroundColor: props.bg }}
      className='mb-3 w-full h-16 rounded-2xl text-2xl'
    >
      {props.text}
    </button>
  );
};

export default Button;
