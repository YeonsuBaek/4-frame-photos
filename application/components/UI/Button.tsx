import BUTTON from '@/models/button';
import Link from 'next/link';
import React from 'react';

const Button = ({ color, bg, link, children }: BUTTON) => {
  return (
    <Link
      style={{ color: color, backgroundColor: bg }}
      className='flex items-center justify-center w-full h-16 mb-3 text-2xl rounded-2xl'
      href={link}
    >
      {children}
    </Link>
  );
};

export default Button;
