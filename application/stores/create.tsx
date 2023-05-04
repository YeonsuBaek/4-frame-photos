import { create } from 'zustand';

interface STYLES {
  frame: string;
  text: string;
  textSize: string;
  textColor: string;
  textStyle: string;
  setFrame: (color: string) => void;
  setText: (text: string) => void;
  setTextSize: (size: string) => void;
  setTextColor: (color: string) => void;
  setTextStyle: (font: string) => void;
  defFrame: string;
  defText: string;
  defTextSize: string;
  defTextColor: string;
  defTextStyle: string;
  setDefFrame: (color: string) => void;
  setDefText: (text: string) => void;
  setDefTextSize: (size: string) => void;
  setDefTextColor: (color: string) => void;
  setDefTextStyle: (font: string) => void;
}

const useStore = create<STYLES>((set) => ({
  frame: 'skyblue',
  text: '네컷사진!',
  textSize: '36',
  textColor: 'gray',
  textStyle: 'playfair',
  setFrame: (color) => set({ frame: color }),
  setText: (text) => set({ text: text }),
  setTextSize: (size) => set({ textSize: size }),
  setTextColor: (color) => set({ textColor: color }),
  setTextStyle: (font) => set({ textStyle: font }),
  defFrame: 'skyblue',
  defText: '네컷사진!',
  defTextSize: '36',
  defTextColor: 'gray',
  defTextStyle: 'playfair',
  setDefFrame: (color) => set({ defFrame: color }),
  setDefText: (text) => set({ defText: text }),
  setDefTextSize: (size) => set({ defTextSize: size }),
  setDefTextColor: (color) => set({ defTextColor: color }),
  setDefTextStyle: (font) => set({ defTextStyle: font }),
}));

export default useStore;
