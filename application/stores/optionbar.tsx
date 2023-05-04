import { create } from 'zustand';

interface OPTIONBAR {
  frame: boolean;
  text: boolean;
  textSize: boolean;
  textColor: boolean;
  textStyle: boolean;
  setFrame: (open: boolean) => void;
  setText: (open: boolean) => void;
  setTextSize: (open: boolean) => void;
  setTextColor: (open: boolean) => void;
  setTextStyle: (open: boolean) => void;
}

const useOptionbarStore = create<OPTIONBAR>((set) => ({
  frame: false,
  text: false,
  textSize: false,
  textColor: false,
  textStyle: false,
  setFrame: (open: boolean) => set({ frame: open }),
  setText: (open: boolean) => set({ text: open }),
  setTextSize: (open: boolean) => set({ textSize: open }),
  setTextColor: (open: boolean) => set({ textColor: open }),
  setTextStyle: (open: boolean) => set({ textStyle: open }),
}));

export default useOptionbarStore;
