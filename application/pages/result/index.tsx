import Form from '@/components/Form/Form';
import React, { useRef } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const resultPage = () => {
  const saveImage = () => {
    const canvas: any = document.getElementById('photo');
    domtoimage.toBlob(canvas).then((blob) => {
      const saveConfirm = window.confirm('이미지를 저장하시겠습니까?');
      if (saveConfirm === true) {
        saveAs(blob, 'download.png');
      }
    });
  };

  return (
    <div>
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
