import React from 'react';
import Button from '../UI/Button';

const Buttons = () => {
  return (
    <div className='absolute bottom-[20%] left-1/2 translate-x-[-50%] w-full px-9'>
      <Button text='네컷사진 만들기' color='#fff' bg='#4A9D93' link='/making' />
    </div>
  );
};

export default Buttons;
