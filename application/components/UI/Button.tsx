import BUTTON from '@/models/button';
import Link from 'next/link';
import React from 'react';
import usePhotoStore from '../../stores/photos';

const Button: React.FC<BUTTON> = (props) => {
  const { setScale } = usePhotoStore((state) => state);
  return (
    <Link
      style={{ color: props.color, backgroundColor: props.bg }}
      className='flex items-center justify-center w-full h-16 mb-3 text-2xl rounded-2xl'
      href={props.link}
      onClick={() => setScale('scale(0.2)')}
    >
      {props.text}
    </Link>
  );
};

export default Button;
