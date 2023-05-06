import { create } from 'zustand';

interface MODAL {
  modal: boolean;
  setModal: (open: boolean) => void;
}

const useModalStore = create<MODAL>((set) => ({
  modal: false,
  setModal: (open: boolean) => set({ modal: open }),
}));

export default useModalStore;
