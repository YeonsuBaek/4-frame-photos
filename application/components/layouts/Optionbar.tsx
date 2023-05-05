import React from 'react';
import DetailOptionbar from '../UI/DetailOptionbar';
import useOptionbarStore from '../../stores/optionbar';
import OptionButton from '../UI/OptionButton';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import ColorList from '../UI/ColorList';
import useStore from '../../stores/create';
import useColorlistStore from '../../stores/colorlist';

const Optionbar = () => {
  const {
    frame,
    text,
    textSize,
    textColor,
    textStyle,
    date,
    datePos,
    weather,
    setFrame,
    setText,
    setTextSize,
    setTextColor,
    setTextStyle,
    setDate,
    setDatePos,
    setWeather,
    defFrame,
    defText,
    defTextSize,
    defTextColor,
    defTextStyle,
    defDate,
    defDatePos,
    defWeather,
    setDefFrame,
    setDefText,
    setDefTextSize,
    setDefTextColor,
    setDefTextStyle,
    setDefDate,
    setDefDatePos,
    setDefWeather,
  } = useStore((state) => state);

  const {
    frameBar,
    textBar,
    textSizeBar,
    textColorBar,
    textStyleBar,
    dateBar,
    weatherBar,
    setFrameBar,
    setTextBar,
    setTextSizeBar,
    setTextColorBar,
    setTextStyleBar,
    setDateBar,
    setWeatherBar,
  } = useOptionbarStore((state) => state);

  const { setColorPicker } = useColorlistStore((state) => state);

  const onSaveFrame = () => {
    setDefFrame(frame);
    setFrameBar(false);
    setColorPicker(false);
  };

  const onCloseFrame = () => {
    setFrame(defFrame);
    setFrameBar(false);
    setColorPicker(false);
  };

  const onSaveText = () => {
    setDefText(text);
    setTextBar(false);
  };

  const onCloseText = () => {
    setText(defText);
    setTextBar(false);
  };

  const onSaveTextSize = () => {
    setDefTextSize(textSize);
    setTextSizeBar(false);
  };

  const onCloseTextSize = () => {
    setTextSize(defTextSize);
    setTextSizeBar(false);
  };

  const onSaveTextColor = () => {
    setDefTextColor(textColor);
    setTextColorBar(false);
    setColorPicker(false);
  };

  const onCloseTextColor = () => {
    setTextColor(defTextColor);
    setTextColorBar(false);
    setColorPicker(false);
  };

  const onSaveTextStyle = () => {
    setDefTextStyle(textStyle);
    setTextStyleBar(false);
  };

  const onCloseTextStyle = () => {
    setTextStyle(defTextStyle);
    setTextStyleBar(false);
  };

  const onSaveDate = () => {
    setDefDate(date);
    setDefDatePos(datePos);
    setDateBar(false);
  };

  const onCloseDate = () => {
    setDate(defDate);
    setDatePos(defDatePos);
    setDateBar(false);
  };

  const onRemoveDate = () => {
    setDatePos('bottom');
    setDate('');
  };

  const onSaveWeather = () => {
    setDefWeather(weather);
    setWeatherBar(false);
    console.log(weather);
  };

  const onCloseWeather = () => {
    setWeather(defWeather);
    setWeatherBar(false);
  };

  const handleGetWeather = () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  const handleSuccess = (position: {
    coords: { latitude: number; longitude: number };
  }) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude); //얻은 좌표값을 바탕으로 날씨정보를 불러온다.
  };

  const handleError = () => {
    alert("can't not access to location");
  };

  const getWeather = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=kr`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          const weatherDescription = json.weather[0].description;
          setWeather(weatherDescription);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const options = [
    {
      name: '프레임',
      event: () => setFrameBar(true),
      icon: '/assets/frame.png',
    },
    {
      name: '글자 편집',
      event: () => setTextBar(true),
      icon: '/assets/text.png',
    },
    {
      name: '글자 크기',
      event: () => setTextSizeBar(true),
      icon: '/assets/text-size.png',
    },
    {
      name: '글자 색상',
      event: () => setTextColorBar(true),
      icon: '/assets/text-color.png',
    },
    {
      name: '글씨체',
      event: () => setTextStyleBar(true),
      icon: '/assets/text-style.png',
    },
    {
      name: '날짜',
      event: () => setDateBar(true),
      icon: '/assets/date.png',
    },
    {
      name: '날씨',
      event: () => setWeatherBar(true),
      icon: '/assets/weather.png',
    },
  ];

  return (
    <>
      <ul className='fixed bottom-0 left-0 z-30 flex items-center justify-start w-screen h-[64px] px-[8px] overflow-scroll text-white bg-black scrollbar-hide'>
        {options.map((option) => {
          return <OptionButton key={option.name} option={option} />;
        })}
      </ul>
      {frameBar && (
        <DetailOptionbar
          title='프레임 색상'
          onSave={onSaveFrame}
          onClose={onCloseFrame}
        >
          <ColorList
            colors={colors}
            onChangeFrame={(color) => setFrame(color)}
            onChangeTextColor={() => null}
            onChangeColor={(color) => setFrame(color)}
          />
        </DetailOptionbar>
      )}
      {textBar && (
        <DetailOptionbar
          title='글자 편집'
          onSave={onSaveText}
          onClose={onCloseText}
        >
          <input
            type='text'
            onChange={(e) => setText(e.target.value)}
            value={text}
            className='mx-[40px] text-black w-full block rounded-[4px] p-[4px] outline-none'
          />
        </DetailOptionbar>
      )}
      {textSizeBar && (
        <DetailOptionbar
          title='글자 크기'
          onSave={onSaveTextSize}
          onClose={onCloseTextSize}
        >
          <input
            type='range'
            min='16'
            max='72'
            step='4'
            onChange={(e) => setTextSize(e.target.value)}
            value={textSize}
            className='w-[75%] h-[4px] mx-auto my-0 accent-white rounded-lg cursor-pointer'
          />
        </DetailOptionbar>
      )}
      {textColorBar && (
        <DetailOptionbar
          title='글자 색상'
          onSave={onSaveTextColor}
          onClose={onCloseTextColor}
        >
          <ColorList
            colors={colors}
            onChangeTextColor={(color) => setTextColor(color)}
            onChangeFrame={() => null}
            onChangeColor={(color) => setTextColor(color)}
          />
        </DetailOptionbar>
      )}
      {textStyleBar && (
        <DetailOptionbar
          title='글씨체'
          onSave={onSaveTextStyle}
          onClose={onCloseTextStyle}
        >
          <ul className='flex justify-start w-screen overflow-scroll px-[8px] scrollbar-hide'>
            {fonts.map((font) => {
              return (
                <li
                  key={font}
                  className='mx-[8px] flex items-center justify-center'
                >
                  <button
                    onClick={() => setTextStyle(font)}
                    className='w-[84px]'
                    style={{ fontFamily: `var(--${font})` }}
                  >
                    폰트 Font
                  </button>
                </li>
              );
            })}
          </ul>
        </DetailOptionbar>
      )}
      {dateBar && (
        <DetailOptionbar title='날짜' onSave={onSaveDate} onClose={onCloseDate}>
          <button
            className='flex items-center justify-center w-[48px] h-[48px]'
            onClick={() => setDatePos(datePos == 'bottom' ? 'top' : 'bottom')}
          >
            <img
              src='/assets/move.png'
              alt='위치 상하로 옮기기'
              className='w-[28px] h-[28px]'
            />
          </button>
          <input
            type='date'
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className='mx-[8px] w-[75%] block rounded-[4px] outline-none bg-white text-black'
          />
          <button
            onClick={onRemoveDate}
            className='flex items-center justify-center w-[48px] h-[48px]'
          >
            <img
              src='/assets/remove.png'
              alt='날짜 삭제하기'
              className='w-[28px] h-[28px]'
            />
          </button>
        </DetailOptionbar>
      )}
      {weatherBar && (
        <DetailOptionbar
          title='날씨'
          onSave={onSaveWeather}
          onClose={onCloseWeather}
        >
          <button onClick={handleGetWeather}>날씨 불러오기</button>
        </DetailOptionbar>
      )}
    </>
  );
};

export default Optionbar;
