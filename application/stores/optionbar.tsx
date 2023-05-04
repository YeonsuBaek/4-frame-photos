import { create } from 'zustand';

interface OPTIONBAR {
  frame: boolean;
  text: boolean;
  textSize: boolean;
  textColor: boolean;
  setFrame: (open: boolean) => void;
  setText: (open: boolean) => void;
  setTextSize: (open: boolean) => void;
  setTextColor: (open: boolean) => void;
}

const useOptionbarStore = create<OPTIONBAR>((set) => ({
  frame: false,
  text: false,
  textSize: false,
  textColor: false,
  setFrame: (open: boolean) => set({ frame: open }),
  setText: (open: boolean) => set({ text: open }),
  setTextSize: (open: boolean) => set({ textSize: open }),
  setTextColor: (open: boolean) => set({ textColor: open }),
}));

export default useOptionbarStore;
