import { create } from 'zustand';

interface STYLES {
  frame: string;
  text: string;
  textSize: string;
  textColor: string;
  setFrame: (color: string) => void;
  setText: (text: string) => void;
  setTextSize: (size: string) => void;
  setTextColor: (color: string) => void;
  defFrame: string;
  defText: string;
  defTextSize: string;
  defTextColor: string;
  setDefFrame: (color: string) => void;
  setDefText: (text: string) => void;
  setDefTextSize: (size: string) => void;
  setDefTextColor: (color: string) => void;
}

const useStore = create<STYLES>((set) => ({
  frame: 'skyblue',
  text: '네컷사진!',
  textSize: '36',
  textColor: 'gray',
  setFrame: (color) => set({ frame: color }),
  setText: (text) => set({ text: text }),
  setTextSize: (size) => set({ textSize: size }),
  setTextColor: (color) => set({ textColor: color }),
  defFrame: 'skyblue',
  defText: '네컷사진!',
  defTextSize: '36',
  defTextColor: 'gray',
  setDefFrame: (color) => set({ defFrame: color }),
  setDefText: (text) => set({ defText: text }),
  setDefTextSize: (size) => set({ defTextSize: size }),
  setDefTextColor: (color) => set({ defTextColor: color }),
}));

export default useStore;
