import Form from '@/components/Form/Form';
import Link from 'next/link';
import React from 'react';
import html2canvas from 'html2canvas';

const resultPage = () => {
  const saveImage = () => {
    const ref: any = document.getElementById('photo');
    html2canvas(ref).then((canvas) => {
      let base64image = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const a = document.createElement('a');
      a.setAttribute('download', `info.png`);
      a.setAttribute('href', base64image);
      a.click();
    });
  };

  return (
    <div className='relative'>
      <div id='photo'>
        <Form />
      </div>
      <button className='bg-white' onClick={saveImage}>
        저장하기
      </button>
    </div>
  );
};

export default resultPage;
