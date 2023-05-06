import Form from '@/components/Form/Form';
import React from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';
import useStore from '../../stores/create';
import styles from '../../assets/styles';
import useColorlistStore from '../../stores/colorlist';
import html2canvas from 'html2canvas';

const MakingPage = () => {
  const { colorPicker } = useColorlistStore((state) => state);

  const { setCurrent, setDef } = useStore((state) => state);

  const handleSaveImage = () => {
    const div: any = document.getElementById('photoWrapper');
    const canvasDiv: any = document.getElementById('canvas');
    const ref: any = document.getElementById('photo');
    div.style = { scale: '100%' };
    canvasDiv.appendChild(ref);
    html2canvas(canvasDiv, {
      allowTaint: true,
      useCORS: true,
    }).then((canvas: HTMLCanvasElement) => {
      let el = document.createElement('a');
      el.href = canvas.toDataURL('image/jpeg');
      el.download = 'photo.jpg';
      el.click();
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

  return (
    <>
      <Layout
        title='네컷사진 만들기'
        onBack={handleResetStyle}
        onSaveImage={handleSaveImage}
      >
        <div
          id='photoWrapper'
          className='mt-[-1200px]'
          style={{ scale: '30%' }}
        >
          <div id='photo'>
            <Form />
          </div>
        </div>
        <div id='canvas'></div>
      </Layout>
      <Optionbar />
    </>
  );
};

export default MakingPage;
