import { create } from 'zustand';

interface COLOR_LIST {
  colorPicker: boolean;
  selectedColor: string;
  setColorPicker: (open: boolean) => void;
  setSelectedColor: (color: string) => void;
}

const useColorlistStore = create<COLOR_LIST>((set) => ({
  colorPicker: false,
  selectedColor: '#ffffff',
  setColorPicker: (open: boolean) => set({ colorPicker: open }),
  setSelectedColor: (color: string) => set({ selectedColor: color }),
}));

export default useColorlistStore;
