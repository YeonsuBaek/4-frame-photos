import { create } from 'zustand';

interface OPTIONBAR {
  optionbar: string;
  setOptionbar: (option: string) => void;
}

const useOptionbarStore = create<OPTIONBAR>((set) => ({
  optionbar: '',
  setOptionbar: (option) => set({ optionbar: option }),
}));

export default useOptionbarStore;
