import Link from 'next/link';
import React from 'react';

const Button: React.FC<{
  text: string;
  color: string;
  bg: string;
  link: string;
}> = (props) => {
  return (
    <Link
      style={{ color: props.color, backgroundColor: props.bg }}
      className='flex items-center justify-center mb-3 w-full h-16 rounded-2xl text-2xl'
      href={props.link}
    >
      {props.text}
    </Link>
  );
};

export default Button;
