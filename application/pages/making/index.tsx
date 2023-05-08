import Form from '@/components/Form/Form';
import React from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import useStore from '../../stores/create';
import styles from '../../assets/styles';
import useColorlistStore from '../../stores/colorlist';
import usePhotoStore from '@/stores/photos';
import html2canvas from 'html2canvas';
import photos from '../../assets/photos';
import * as htmlToImage from 'html-to-image';

const MakingPage = () => {
  const { colorPicker } = useColorlistStore((state) => state);
  const { setCurrent, setDef } = useStore((state) => state);
  const { scale, setScale } = usePhotoStore((state) => state);
  const [saveButton, setSaveButton] = React.useState(false);

  const handleSaveImage = () => {
    setSaveButton(true);
  };

  const saveImage = () => {
    const ref: any = document.getElementById('photo');
    html2canvas(ref, { allowTaint: true }).then((canvas) => {
      let base64image = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const a = document.createElement('a');
      a.setAttribute('download', `info.png`);
      a.setAttribute('href', base64image);
      a.click();
    });
  };

  const handleResetStyle = () => {
    setDef('frame', styles.frame);
    setDef('text', styles.text);
    setDef('textSize', styles.textSize);
    setDef('textColor', styles.textColor);
    setDef('textStyle', styles.textStyle);
    setDef('date', styles.date);
    setDef('weather', styles.weather);
    setDef('datePos', styles.datePos);
    setCurrent('frame', styles.frame);
    setCurrent('text', styles.text);
    setCurrent('textSize', styles.textSize);
    setCurrent('textColor', styles.textColor);
    setCurrent('textStyle', styles.textStyle);
    setCurrent('date', styles.date);
    setCurrent('datePos', styles.datePos);
    setCurrent('weather', styles.weather);
  };

  function useBodyScrollLock() {
    const lockScroll = React.useCallback(() => {
      document.body.style.overflow = 'hidden';
    }, []);

    const openScroll = React.useCallback(() => {
      document.body.style.removeProperty('overflow');
    }, []);

    return { lockScroll, openScroll };
  }

  const { lockScroll, openScroll } = useBodyScrollLock();

  React.useEffect(() => {
    if (colorPicker) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [colorPicker]);

  const photo = {
    transform: scale,
  };

  return (
    <>
      <Layout
        title='네컷사진 만들기'
        onBack={handleResetStyle}
        onSaveImage={handleSaveImage}
      >
        <div className='mt-[-1200px]' style={photo}>
          <div id='photo'>
            <Form />
          </div>
          {saveButton && (
            <button
              className='absolute top-0 left-0 z-50 bg-white'
              onClick={saveImage}
            >
              저장하기
            </button>
          )}
        </div>
      </Layout>
      <Optionbar />
    </>
  );
};

export default MakingPage;
