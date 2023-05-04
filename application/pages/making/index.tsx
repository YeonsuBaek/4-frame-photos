import Form from '@/components/Form/Form';
import React, { useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import * as htmlToImage from 'html-to-image';
import useStore from '../../stores/create';

const MakingPage = () => {
  const { frame, text, textSize, textColor, textStyle } = useStore(
    (state) => state
  );

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
        <div className='mt-[64px] mb-[96px] flex items-center justify-center'>
          <div ref={ref}>
            <Form
              frameColor={frame}
              text={text}
              textSize={textSize}
              textColor={textColor}
              textStyle={textStyle}
            />
          </div>
        </div>
      </Layout>
      <Optionbar />
    </>
  );
};

export default MakingPage;
