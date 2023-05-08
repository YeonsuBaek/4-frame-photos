import { create } from 'zustand';

interface PHOTO {
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  setPhoto1: (img: string) => void;
  setPhoto2: (img: string) => void;
  setPhoto3: (img: string) => void;
  setPhoto4: (img: string) => void;
}

const usePhotoStore = create<PHOTO>((set) => ({
  photo1: '/assets/default.png',
  photo2: '/assets/default.png',
  photo3: '/assets/default.png',
  photo4: '/assets/default.png',
  setPhoto1: (img) => set({ photo1: img }),
  setPhoto2: (img) => set({ photo2: img }),
  setPhoto3: (img) => set({ photo3: img }),
  setPhoto4: (img) => set({ photo4: img }),
}));

export default usePhotoStore;
