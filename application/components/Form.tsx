import React from 'react';

const Form = () => {
  return (
    <div className='mx-auto my-0 px-[12px] pb-[96px] w-[300px] h-[900px] bg-pink-200 gap-[12px] flex items-start justify-center flex-col'>
      <button className='w-full aspect-[3/2] bg-white object-cover'>
        <input accept='image/*' type='file' className='w-full h-full' />
      </button>
      <button className='w-full aspect-[3/2] bg-white object-cover'>
        <input accept='image/*' type='file' className='w-full h-full' />
      </button>
      <button className='w-full aspect-[3/2] bg-white object-cover'>
        <input accept='image/*' type='file' className='w-full h-full' />
      </button>
      <button className='w-full aspect-[3/2] bg-white object-cover'>
        <input accept='image/*' type='file' className='w-full h-full' />
      </button>
    </div>
  );
};

export default Form;
