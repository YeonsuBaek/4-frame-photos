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
    textSize,
    textColor,
    setFrame,
    setText,
    setTextSize,
    setTextColor,
    defFrame,
    defText,
    defTextSize,
    defTextColor,
    setDefFrame,
    setDefText,
    setDefTextSize,
    setDefTextColor,
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
        <div className='my-[64px] flex items-center justify-center'>
          <div ref={ref}>
            <Form
              frameColor={frame}
              text={text}
              textSize={textSize}
              textColor={textColor}
            />
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
        textSizeValue={textSize}
        onChangeTextSize={(e) => setTextSize(e.target.value)}
        onSaveTextSize={() => setDefTextSize(textSize)}
        onResetTextSize={() => setTextSize(defTextSize)}
        onChangeTextColor={(color) => setTextColor(color)}
        onSaveTextColor={() => setDefTextColor(textColor)}
        onResetTextColor={() => setTextColor(defTextColor)}
      />
    </>
  );
};

export default MakingPage;
