import Image from 'next/image';
import React, { useRef, useState } from 'react';

const ImageForm: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);

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
    <div>
      {uploadedImage ? (
        <img
          src={uploadedImage}
          onClick={() => {
            fileInput.current.click();
          }}
          className='w-full aspect-[3/2] bg-white object-cover'
        />
      ) : (
        <input
          accept='image/*'
          type='file'
          onChange={handleUploadImage}
          ref={fileInput}
          className='w-full aspect-[3/2] bg-white object-cover'
        />
      )}
    </div>
  );
};

export default ImageForm;
