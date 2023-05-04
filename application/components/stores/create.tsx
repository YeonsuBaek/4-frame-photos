import { create } from 'zustand';

interface STYLES {
  frame: string;
  text: string;
  setFrame: (color: string) => void;
  setText: (text: string) => void;
  defFrame: string;
  defText: string;
  setDefFrame: (color: string) => void;
  setDefText: (text: string) => void;
}

const useStore = create<STYLES>((set) => ({
  frame: 'skyblue',
  text: '네컷사진!',
  setFrame: (color) => set({ frame: color }),
  setText: (text) => set({ text: text }),
  defFrame: 'skyblue',
  defText: '네컷사진!',
  setDefFrame: (color) => set({ defFrame: color }),
  setDefText: (text) => set({ defText: text }),
}));

export default useStore;
