import { create } from 'zustand';

const useStore = create((set) => ({
  frame: 'skyblue',
  text: '네컷사진!',
  setFrame: (color: string) => set({ frame: color }),
  setText: (text: string) => set({ text: text }),
  defFrame: 'skyblue',
  defText: '네컷사진!',
  setDefFrame: (color: string) => set({ defFrame: color }),
  setDefText: (text: string) => set({ defText: text }),
}));

export default useStore;
