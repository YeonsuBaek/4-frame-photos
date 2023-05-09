type LAYOUT = {
  title: string;
  onBack: () => void;
  onSave: () => void;
  children: React.ReactChild | React.ReactChild[];
};

export default LAYOUT;
