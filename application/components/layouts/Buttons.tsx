import React from 'react';
import Button from '../UI/Button';

const Buttons = () => {
  return (
    <div className='absolute bottom-[20%] left-1/2 translate-x-[-50%] w-full px-9'>
      <Button color='#fff' bg='#4A9D93' link='/making'>
        네컷사진 만들기
      </Button>
    </div>
  );
};

export default Buttons;
