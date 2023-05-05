type LAYOUT = {
  title: string;
  onBack: () => void;
  onSaveImage: () => void;
  children: React.ReactChild | React.ReactChild[];
};

export default LAYOUT;
