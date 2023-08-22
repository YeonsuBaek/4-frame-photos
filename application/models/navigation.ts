import { ReactElement } from 'react';

type NAVIGATION = {
  onBack: () => void;
  onSave: () => void;
  children: ReactElement | string;
};

export default NAVIGATION;
