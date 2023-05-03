import Form from '@/components/Form/Form';
import React, { useRef, useState, useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import * as htmlToImage from 'html-to-image';
import useStore from '../../components/stores/create';

const MakingPage = () => {
  const {
    frame,
    text,
    setFrame,
    setText,
    defFrame,
    defText,
    setDefFrame,
    setDefText,
  } = useStore((state) => state);

  const ref = useRef<any>();

  const handleSaveImage = async () => {
    const dataUrl = await htmlToImage.toPng(ref.current);

    const link = document.createElement('a');
    link.download = '네컷사진.png';
    link.href = dataUrl;
    link.click();
  };

  const handleChangeFrame = (color: string) => {
    setFrame(color);
  };

  const handleSaveFrame = () => {
    setDefFrame(frame);
  };

  const handleResetFrame = () => {
    setFrame(defFrame);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSaveText = () => {
    setDefText(text);
  };

  const handleResetText = () => {
    setText(defText);
  };

  return (
    <>
      <Layout title='네컷사진 만들기' onSaveImage={handleSaveImage}>
        <div className='my-[64px]'>
          <div ref={ref}>
            <Form frameColor={frame} text={text} />
          </div>
        </div>
      </Layout>
      <Optionbar
        onChangeFrame={(color) => handleChangeFrame(color)}
        onSaveFrame={handleSaveFrame}
        onResetFrame={handleResetFrame}
        textValue={text}
        onChangeText={(e) => handleChangeText(e)}
        onSaveText={handleSaveText}
        onResetText={handleResetText}
      />
    </>
  );
};

export default MakingPage;
