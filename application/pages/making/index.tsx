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
        onChangeFrame={(color) => setFrame(color)}
        onSaveFrame={() => setDefFrame(frame)}
        onResetFrame={() => setFrame(defFrame)}
        textValue={text}
        onChangeText={(e) => setText(e.target.value)}
        onSaveText={() => setDefText(text)}
        onResetText={() => setText(defText)}
      />
    </>
  );
};

export default MakingPage;
