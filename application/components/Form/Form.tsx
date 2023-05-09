import useOptionbarStore from '@/stores/optionbar';
import React from 'react';
import useStore from '@/stores/create';
import ImageForm from './ImageForm';

const Form = () => {
  const { current, def } = useStore((state) => state);
  const { optionbar } = useOptionbarStore((state) => state);

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
      className='relative px-[60px] pt-[60px] w-[1500px] h-[4500px] gap-[60px] flex justify-start flex-col'
    >
      <ImageForm id='photo1' />
      <ImageForm id='photo2' />
      <ImageForm id='photo3' />
      <ImageForm id='photo4' />
      <div
        className='absolute bottom-[60px] left-0 w-full h-[460px] overflow-hidden '
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
