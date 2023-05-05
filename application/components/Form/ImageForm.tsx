import React, { useRef, useState } from 'react';

const ImageForm = () => {
  const [uploadedImage, setUploadedImage] = useState('');
  const fileInput = useRef<any>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const file = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        const result = reader.result as string;
        setUploadedImage(result);
        resolve();
      };
    });
  };

  return (
    <div className='relative'>
      <img
        src={uploadedImage ? uploadedImage : '/assets/default.png'}
        onClick={() => {
          fileInput.current.click();
        }}
        className='absolute top-0 left-0 object-cover w-full aspect-[3/2] bg-white'
      />
      <input
        accept='image/*'
        type='file'
        onChange={handleUploadImage}
        ref={fileInput}
        className='w-full aspect-[3/2] bg-white object-cover'
      />
    </div>
  );
};

export default ImageForm;
