import { create } from 'zustand';

interface OPTIONBAR {
  frameBar: boolean;
  textBar: boolean;
  textSizeBar: boolean;
  textColorBar: boolean;
  textStyleBar: boolean;
  setFrameBar: (open: boolean) => void;
  setTextBar: (open: boolean) => void;
  setTextSizeBar: (open: boolean) => void;
  setTextColorBar: (open: boolean) => void;
  setTextStyleBar: (open: boolean) => void;
}

const useOptionbarStore = create<OPTIONBAR>((set) => ({
  frameBar: false,
  textBar: false,
  textSizeBar: false,
  textColorBar: false,
  textStyleBar: false,
  setFrameBar: (open: boolean) => set({ frameBar: open }),
  setTextBar: (open: boolean) => set({ textBar: open }),
  setTextSizeBar: (open: boolean) => set({ textSizeBar: open }),
  setTextColorBar: (open: boolean) => set({ textColorBar: open }),
  setTextStyleBar: (open: boolean) => set({ textStyleBar: open }),
}));

export default useOptionbarStore;
