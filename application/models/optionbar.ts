type OPTIONBAR = {
  onChangeFrame: (color: string) => void;
  onSaveFrame: () => void;
  onResetFrame: () => void;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textValue: string;
  onSaveText: () => void;
  onResetText: () => void;
  textSizeValue: string;
  onChangeTextSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveTextSize: () => void;
  onResetTextSize: () => void;
  onChangeTextColor: (color: string) => void;
  onSaveTextColor: () => void;
  onResetTextColor: () => void;
  onChangeTextStyle: (font: string) => void;
  onSaveTextStyle: () => void;
  onResetTextStyle: () => void;
};

export default OPTIONBAR;
