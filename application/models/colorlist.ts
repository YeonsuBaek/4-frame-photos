type COLOR_LIST = {
  colors: string[];
  currentColor?: string;
  onChangeFrame?: (color: string) => void | null;
  onChangeTextColor?: (color: string) => void | null;
  onChangeColor: (color: string) => void;
};

export default COLOR_LIST;
