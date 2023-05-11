import React, { useRef, useState } from 'react';
import heic2any from 'heic2any';

const ImageForm = () => {
  const [image, setImage] = useState('/assets/default.png');
  const fileInput = useRef<any>(null);

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type.startsWith('image/')) {
      const blob = await readFileAsBlob(file);
      const pngBlob = await convertBlobToPng(blob);
      const convertedUrl = URL.createObjectURL(pngBlob);

      setImage(convertedUrl);
    }
  };

  const readFileAsBlob = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const blob = new Blob([e.target?.result as ArrayBuffer], {
          type: file.type,
        });
        resolve(blob);
      };

      reader.onerror = () => {
        reject(new Error('Failed to read the file.'));
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const convertBlobToPng = (blob: Blob): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      heic2any({
        blob: blob,
        toType: 'image/png',
      })
        .then((convertedBlob: any) => {
          resolve(convertedBlob);
        })
        .catch(() => {
          reject(new Error('Failed to convert the image.'));
        });
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
        type='file'
        onChange={handleUploadImage}
        ref={fileInput}
        className='block w-full aspect-[3/2] object-cover bg-white cursor-pointer'
      />
    </div>
  );
};

export default ImageForm;
