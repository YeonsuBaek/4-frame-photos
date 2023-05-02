import Form from '@/components/Form';
import React, { useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import * as htmlToImage from 'html-to-image';

const MakingPage = () => {
  const ref = useRef<any>();

  const handleSaveImage = async () => {
    const dataUrl = await htmlToImage.toPng(ref.current);

    const link = document.createElement('a');
    link.download = '네컷사진.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <>
      <Layout title='네컷사진 만들기' onSaveImage={handleSaveImage}>
        <div className='h-[1000px]' ref={ref}>
          <Form />
        </div>
      </Layout>
      <Optionbar />
    </>
  );
};

export default MakingPage;
