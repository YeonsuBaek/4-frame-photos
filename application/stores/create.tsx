import { create } from 'zustand';

interface STYLES {
  frame: string;
  text: string;
  textSize: string;
  textColor: string;
  textStyle: string;
  date: string;
  datePos: string;
  weather: string;
  setFrame: (color: string) => void;
  setText: (text: string) => void;
  setTextSize: (size: string) => void;
  setTextColor: (color: string) => void;
  setTextStyle: (font: string) => void;
  setDate: (date: string) => void;
  setDatePos: (move: string) => void;
  setWeather: (type: string) => void;
  defFrame: string;
  defText: string;
  defTextSize: string;
  defTextColor: string;
  defTextStyle: string;
  defDate: string;
  defDatePos: string;
  defWeather: string;
  setDefFrame: (color: string) => void;
  setDefText: (text: string) => void;
  setDefTextSize: (size: string) => void;
  setDefTextColor: (color: string) => void;
  setDefTextStyle: (font: string) => void;
  setDefDate: (date: string) => void;
  setDefDatePos: (move: string) => void;
  setDefWeather: (type: string) => void;
}

const useStore = create<STYLES>((set) => ({
  frame: 'black',
  text: '네컷사진',
  textSize: '44',
  textColor: 'white',
  textStyle: 'do-hyeon',
  date: '',
  datePos: 'bottom',
  weather: '',
  setFrame: (color) => set({ frame: color }),
  setText: (text) => set({ text: text }),
  setTextSize: (size) => set({ textSize: size }),
  setTextColor: (color) => set({ textColor: color }),
  setTextStyle: (font) => set({ textStyle: font }),
  setDate: (date) => set({ date: date }),
  setDatePos: (move) => set({ datePos: move }),
  setWeather: (type) => set({ weather: type }),
  defFrame: 'black',
  defText: '네컷사진',
  defTextSize: '44',
  defTextColor: 'white',
  defTextStyle: 'do-hyeon',
  defDate: '',
  defDatePos: 'bottom',
  defWeather: '',
  setDefFrame: (color) => set({ defFrame: color }),
  setDefText: (text) => set({ defText: text }),
  setDefTextSize: (size) => set({ defTextSize: size }),
  setDefTextColor: (color) => set({ defTextColor: color }),
  setDefTextStyle: (font) => set({ defTextStyle: font }),
  setDefDate: (date) => set({ defDate: date }),
  setDefDatePos: (move) => set({ defDatePos: move }),
  setDefWeather: (type) => set({ defWeather: type }),
}));

export default useStore;
