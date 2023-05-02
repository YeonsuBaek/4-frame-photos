import React from 'react';

const ImageForm = () => {
  return (
    <button className='w-full aspect-[3/2] bg-white object-cover'>
      <input accept='image/*' type='file' className='w-full h-full' />
    </button>
  );
};

export default ImageForm;
