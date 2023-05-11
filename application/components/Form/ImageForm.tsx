import React, { useRef, useState } from 'react';

const ImageForm: React.FC<{ id: string }> = (props) => {
  const [image, setImage] = useState('/assets/default.png');
  const fileInput = useRef<any>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const file = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        const result = reader.result as string;
        setImage(result);
        resolve();
      };
    });
  };

  return (
    <div className='relative w-full aspect-[3/2]'>
      <img
        src={image}
        onClick={() => {
          fileInput.current.click();
        }}
        className='absolute top-0 left-0 object-cover w-full aspect-[3/2]'
      />
      <input
        accept='image/*'
        type='file'
        onChange={handleUploadImage}
        ref={fileInput}
        className='block w-full aspect-[3/2] object-cover bg-white cursor-pointer'
      />
    </div>
  );
};

export default ImageForm;
