import { create } from 'zustand';

interface STYLES {
  current: {
    frame: string;
    text: string;
    textSize: string;
    textColor: string;
    textStyle: string;
    date: string;
    datePos: string;
    weather: string;
  };
  setCurrent: (type: string, selection: string) => void;
  def: {
    frame: string;
    text: string;
    textSize: string;
    textColor: string;
    textStyle: string;
    date: string;
    datePos: string;
    weather: string;
  };
  setDef: (type: string, selection: string) => void;
}

const useStore = create<STYLES>((set) => ({
  current: {
    frame: 'black',
    text: '네컷사진',
    textSize: '176',
    textColor: 'white',
    textStyle: 'Do Hyeon',
    date: '',
    datePos: 'bottom',
    weather: '',
  },
  setCurrent: (type, selection) =>
    set((state) => ({ current: { ...state.current, [type]: selection } })),
  def: {
    frame: 'black',
    text: '네컷사진',
    textSize: '176',
    textColor: 'white',
    textStyle: 'Do Hyeon',
    date: '',
    datePos: 'bottom',
    weather: '',
  },
  setDef: (type, selection) =>
    set((state) => ({ def: { ...state.def, [type]: selection } })),
}));

export default useStore;
