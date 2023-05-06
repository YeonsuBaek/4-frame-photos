import React from 'react';
import useModalStore from '../../stores/modal';

const Modal: React.FC<{ onSaveImage2: () => void }> = (props) => {
  const { setModal } = useModalStore((state) => state);
  return (
    <div className='absolute top-0 left-0 z-50 bg-red-300'>
      <button
        onClick={() => {
          props.onSaveImage2();
          setModal(false);
        }}
      >
        저장할거임
      </button>
    </div>
  );
};

export default Modal;
