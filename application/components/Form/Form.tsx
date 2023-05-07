import useOptionbarStore from '@/stores/optionbar';
import React from 'react';
import useStore from '@/stores/create';
import usePhotoStrore from '@/stores/photos';
import ImageForm from './ImageForm';

const Form = () => {
  const { current, def } = useStore((state) => state);
  const { optionbar } = useOptionbarStore((state) => state);
  const {
    photo1,
    photo2,
    photo3,
    photo4,
    setPhoto1,
    setPhoto2,
    setPhoto3,
    setPhoto4,
  } = usePhotoStrore((state) => state);

  const weatherIcon = () => {
    if (current.weather.includes('비')) return 'rain';
    if (current.weather.includes('약간')) return 'little-cloudy';
    if (current.weather.includes('흐림')) return 'cloudy';
    if (current.weather.includes('비')) return 'rain';
    if (current.weather.includes('눈')) return 'snow';
    return 'clear';
  };

  const styles = {
    frame: {
      backgroundColor: current.frame,
    },
    text: {
      fontSize: current.textSize + 'px',
      color: current.textColor,
      fontFamily: current.textStyle,
    },
    date: {
      [current.datePos]: '0',
    },
    weather: {
      img: `/assets/${weatherIcon()}.png`,
    },
  };

  return (
    <div
      style={styles.frame}
      className='relative px-[48px] pt-[48px] w-[1200px] h-[3600px] gap-[48px] flex justify-start flex-col'
    >
      <ImageForm state={photo1} set={setPhoto1} />
      <ImageForm state={photo2} set={setPhoto2} />
      <ImageForm state={photo3} set={setPhoto3} />
      <ImageForm state={photo4} set={setPhoto4} />
      <div
        className='absolute bottom-[48px] left-0 w-[1200px] h-[368px] overflow-hidden '
        style={styles.text}
      >
        <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap flex items-center justify-center'>
          {current.text}
        </span>
        {(optionbar == 'date' || def.date) && (
          <span
            className='absolute text-[64px] left-[50%] translate-x-[-50%]'
            style={styles.date}
          >
            {current.date.replaceAll('-', '.')}
          </span>
        )}
        {(optionbar == 'weather' || def.weather) && (
          <img
            src={styles.weather.img}
            alt='날씨'
            className='absolute top-0 right-0 w-[96px] h-[96px]'
          />
        )}
      </div>
    </div>
  );
};

export default Form;
