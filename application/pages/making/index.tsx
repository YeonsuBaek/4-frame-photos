import Form from '@/components/Form/Form';
import React, { useRef, useState, useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import * as htmlToImage from 'html-to-image';

const MakingPage = () => {
  const [defaultStyle, setDefaultStyle] = useState({
    frame: 'salmon',
    text: '네컷사진',
  });
  const [frameColor, setFrameColor] = useState(defaultStyle.frame);
  const [text, setText] = useState(defaultStyle.text);
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
      text: defaultStyle.text,
    });
  };

  const handleResetStyle = () => {
    setFrameColor(defaultStyle.frame);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSaveText = () => {
    setDefaultStyle({
      frame: defaultStyle.frame,
      text: text,
    });
  };

  const handleResetText = () => {
    setText(defaultStyle.text);
  };

  return (
    <>
      <Layout title='네컷사진 만들기' onSaveImage={handleSaveImage}>
        <div className='my-[64px]'>
          <div ref={ref}>
            <Form frameColor={frameColor} text={text} />
          </div>
        </div>
      </Layout>
      <Optionbar
        onChangeFrame={(color) => handleChangeFrame(color)}
        onSaveStyle={handleSaveStyle}
        onResetStyle={handleResetStyle}
        textValue={text}
        onChangeText={(e) => handleChangeText(e)}
        onSaveText={handleSaveText}
        onResetText={handleResetText}
      />
    </>
  );
};

export default MakingPage;
