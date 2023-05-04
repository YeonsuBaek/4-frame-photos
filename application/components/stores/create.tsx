import { create } from 'zustand';

interface STYLES {
  frame: string;
  text: string;
  textSize: string;
  setFrame: (color: string) => void;
  setText: (text: string) => void;
  setTextSize: (size: string) => void;
  defFrame: string;
  defText: string;
  defTextSize: string;
  setDefFrame: (color: string) => void;
  setDefText: (text: string) => void;
  setDefTextSize: (size: string) => void;
}

const useStore = create<STYLES>((set) => ({
  frame: 'skyblue',
  text: '네컷사진!',
  textSize: '36',
  setFrame: (color) => set({ frame: color }),
  setText: (text) => set({ text: text }),
  setTextSize: (size) => set({ textSize: size }),
  defFrame: 'skyblue',
  defText: '네컷사진!',
  defTextSize: '36',
  setDefFrame: (color) => set({ defFrame: color }),
  setDefText: (text) => set({ defText: text }),
  setDefTextSize: (size) => set({ defTextSize: size }),
}));

export default useStore;
