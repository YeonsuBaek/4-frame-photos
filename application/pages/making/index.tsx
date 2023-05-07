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
  const { setPhoto1, setPhoto2, setPhoto3, setPhoto4 } = usePhotoStore(
    (state) => state
  );

  const handleSaveImage = async () => {
    const ref: any = document.getElementById('photo');
    ref.style.transform = 'none';
    console.log('콘솔이 안찍히는 이유?');
    const canvas: any = await html2canvas(ref);
    document.body.appendChild(canvas);

    const image = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const a = document.createElement('a');
    a.setAttribute('download', `info.png`);
    a.setAttribute('href', image);
    a.click();
    console.log('canvas' + canvas);
    console.log('ref' + ref);
    console.log('image' + image);
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

  return (
    <>
      <Layout
        title='네컷사진 만들기'
        onBack={handleResetStyle}
        onSaveImage={handleSaveImage}
      >
        <div className='mt-[-1200px]'>
          <div id='photo' style={{ transform: 'scale(0.3)' }}>
            <Form />
          </div>
        </div>
      </Layout>
      <Optionbar />
    </>
  );
};

export default MakingPage;
