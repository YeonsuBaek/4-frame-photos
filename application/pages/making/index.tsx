import Form from '@/components/Form/Form';
import React, { useRef, useState } from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import * as htmlToImage from 'html-to-image';

const MakingPage = () => {
  const [defaultStyle, setDefaultStyle] = useState({
    frame: 'salmon',
  });
  const [frameColor, setFrameColor] = useState(defaultStyle.frame);
  const ref = useRef<any>();

  const handleSaveImage = async () => {
    const dataUrl = await htmlToImage.toPng(ref.current);

    const link = document.createElement('a');
    link.download = '네컷사진.png';
    link.href = dataUrl;
    link.click();
  };

  const handleChangeFrame = (color: string) => {
    setFrameColor(color);
  };

  const handleSaveStyle = () => {
    setDefaultStyle({
      frame: frameColor,
    });
  };

  return (
    <>
      <Layout title='네컷사진 만들기' onSaveImage={handleSaveImage}>
        <div ref={ref}>
          <Form frameColor={frameColor} />
        </div>
      </Layout>
      <Optionbar
        onChangeFrame={(color) => handleChangeFrame(color)}
        onSaveStyle={handleSaveStyle}
      />
    </>
  );
};

export default MakingPage;
