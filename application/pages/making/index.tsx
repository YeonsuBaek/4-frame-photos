import Form from '@/components/Form/Form';
import React, { useRef, useCallback, useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import useStore from '../../stores/create';
import styles from '../../assets/styles';
import useColorlistStore from '../../stores/colorlist';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const MakingPage = () => {
  const { colorPicker } = useColorlistStore((state) => state);
  const { setCurrent, setDef } = useStore((state) => state);

  const formRef = useRef<any>();
  const handleSaveImage = async () => {
    await domtoimage.toBlob(formRef.current).then((blob) => {
      const saveConfirm = window.confirm('이미지를 저장하시겠습니까?');
      if (saveConfirm) {
        saveAs(blob, 'download.png');
      }
    });
  };

  const handleResetStyle = () => {
    setDef('frame', styles.frame);
    setDef('text', styles.text);
    setDef('textSize', styles.textSize);
    setDef('textColor', styles.textColor);
    setDef('textStyle', styles.textStyle);
    setDef('date', styles.date);
    setDef('datePos', styles.datePos);
    setCurrent('frame', styles.frame);
    setCurrent('text', styles.text);
    setCurrent('textSize', styles.textSize);
    setCurrent('textColor', styles.textColor);
    setCurrent('textStyle', styles.textStyle);
    setCurrent('date', styles.date);
    setCurrent('datePos', styles.datePos);
  };

  function useBodyScrollLock() {
    const lockScroll = useCallback(() => {
      document.body.style.overflow = 'hidden';
    }, []);

    const openScroll = useCallback(() => {
      document.body.style.removeProperty('overflow');
    }, []);

    return { lockScroll, openScroll };
  }

  const { lockScroll, openScroll } = useBodyScrollLock();

  useEffect(() => {
    if (colorPicker) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [colorPicker, lockScroll, openScroll]);

  return (
    <>
      <Layout onBack={handleResetStyle} onSave={handleSaveImage}>
        <div className='my-[-1700px] scale-[0.2]'>
          <div ref={formRef}>
            <Form />
          </div>
        </div>
      </Layout>
      <Optionbar />
    </>
  );
};

export default MakingPage;
