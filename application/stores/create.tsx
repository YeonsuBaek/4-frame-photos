import { create } from 'zustand';

interface STYLES {
  frame: string;
  text: string;
  textSize: string;
  textColor: string;
  textStyle: string;
  date: string;
  datePos: string;
  setFrame: (color: string) => void;
  setText: (text: string) => void;
  setTextSize: (size: string) => void;
  setTextColor: (color: string) => void;
  setTextStyle: (font: string) => void;
  setDate: (date: string) => void;
  setDatePos: (move: string) => void;
  defFrame: string;
  defText: string;
  defTextSize: string;
  defTextColor: string;
  defTextStyle: string;
  defDate: string;
  defDatePos: string;
  setDefFrame: (color: string) => void;
  setDefText: (text: string) => void;
  setDefTextSize: (size: string) => void;
  setDefTextColor: (color: string) => void;
  setDefTextStyle: (font: string) => void;
  setDefDate: (date: string) => void;
  setDefDatePos: (move: string) => void;
}

const useStore = create<STYLES>((set) => ({
  frame: 'skyblue',
  text: '네컷사진!',
  textSize: '36',
  textColor: 'gray',
  textStyle: 'playfair',
  date: '',
  datePos: 'bottom',
  setFrame: (color) => set({ frame: color }),
  setText: (text) => set({ text: text }),
  setTextSize: (size) => set({ textSize: size }),
  setTextColor: (color) => set({ textColor: color }),
  setTextStyle: (font) => set({ textStyle: font }),
  setDate: (date) => set({ date: date }),
  setDatePos: (move) => set({ datePos: move }),
  defFrame: 'skyblue',
  defText: '네컷사진!',
  defTextSize: '36',
  defTextColor: 'gray',
  defTextStyle: 'playfair',
  defDate: '',
  defDatePos: 'bottom',
  setDefFrame: (color) => set({ defFrame: color }),
  setDefText: (text) => set({ defText: text }),
  setDefTextSize: (size) => set({ defTextSize: size }),
  setDefTextColor: (color) => set({ defTextColor: color }),
  setDefTextStyle: (font) => set({ defTextStyle: font }),
  setDefDate: (date) => set({ defDate: date }),
  setDefDatePos: (move) => set({ defDatePos: move }),
}));

export default useStore;
