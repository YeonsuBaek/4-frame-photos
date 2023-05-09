import Form from '@/components/Form/Form';
import React, { useRef } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const resultPage = () => {
  const ref = React.createRef<any>();
  const saveImage = () => {
    domtoimage.toBlob(ref.current).then((blob) => {
      const saveConfirm = window.confirm('이미지를 저장하시겠습니까?');
      if (saveConfirm === true) {
        saveAs(blob, 'download.png');
      }
    });
  };

  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 z-50 w-screen h-screen bg-white'>
        <button className='bg-red-400' onClick={saveImage}>
          저장하기
        </button>
      </div>
      <div ref={ref}>
        <Form />
      </div>
    </div>
  );
};

export default resultPage;
