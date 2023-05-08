import Form from '@/components/Form/Form';
import Link from 'next/link';
import React from 'react';
import html2canvas from 'html2canvas';

const resultPage = () => {
  const saveImage = () => {
    const ref: any = document.getElementById('photo');
    html2canvas(ref, { allowTaint: true }).then((canvas) => {
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
      <Link
        className='absolute top-0 left-0 bg-white'
        onClick={saveImage}
        href='/'
      >
        저장하기
      </Link>
    </div>
  );
};

export default resultPage;
