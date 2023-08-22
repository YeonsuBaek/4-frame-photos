import { ReactElement } from 'react';

type LAYOUT = {
  onBack: () => void;
  onSave: () => void;
  children: ReactElement | string;
};

export default LAYOUT;
