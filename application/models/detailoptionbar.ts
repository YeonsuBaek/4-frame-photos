type DETAIL_OPTIONBAR = {
  title: string;
  children: React.ReactChild[] | React.ReactChild;
  onClose: () => void;
  onSave: () => void;
};

export default DETAIL_OPTIONBAR;
