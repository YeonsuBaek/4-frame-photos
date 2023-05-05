import Form from '@/components/Form/Form';
import React, { useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import * as htmlToImage from 'html-to-image';
import useStore from '../../stores/create';
import styles from '../../assets/styles';

const MakingPage = () => {
  const {
    setFrame,
    setText,
    setTextSize,
    setTextColor,
    setTextStyle,
    setDate,
    setDatePos,
    setDefFrame,
    setDefText,
    setDefTextSize,
    setDefTextColor,
    setDefTextStyle,
    setDefDate,
    setDefDatePos,
  } = useStore((state) => state);

  const ref = useRef<any>();

  const handleSaveImage = async () => {
    const dataUrl = await htmlToImage.toPng(ref.current);

    const link = document.createElement('a');
    link.download = '네컷사진.png';
    link.href = dataUrl;
    link.click();
  };

  const handleResetStyle = () => {
    setDefFrame(styles.frame);
    setDefText(styles.text);
    setDefTextSize(styles.textSize);
    setDefTextColor(styles.textColor);
    setDefTextStyle(styles.textStyle);
    setDefDate(styles.date);
    setDefDatePos(styles.datePos);
    setFrame(styles.frame);
    setText(styles.text);
    setTextSize(styles.textSize);
    setTextColor(styles.textColor);
    setTextStyle(styles.textStyle);
    setDate(styles.date);
    setDatePos(styles.datePos);
  };

  return (
    <>
      <Layout
        title='네컷사진 만들기'
        onBack={handleResetStyle}
        onSaveImage={handleSaveImage}
      >
        <div className='mt-[64px] mb-[96px] flex items-center justify-center'>
          <div ref={ref}>
            <Form />
          </div>
        </div>
      </Layout>
      <Optionbar />
    </>
  );
};

export default MakingPage;
