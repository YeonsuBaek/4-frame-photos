import React, { useRef, useState } from 'react';
import heic2any from 'heic2any';

const ImageForm = () => {
  const [image, setImage] = useState('/assets/default.png');
  const fileInput = useRef<any>(null);

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    let file = fileInput.current.files[0];

    if (file.name.split('.')[1] === 'heic') {
      let blob = fileInput.current.files[0];
      heic2any({ blob: blob, toType: 'image/jpeg' })
        .then((resultBlob: any) => {
          file = new File([resultBlob], file.name.split('.')[0] + '.jpg', {
            type: 'image/jpeg',
            lastModified: new Date().getTime(),
          });
          reader.readAsDataURL(file);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      reader.readAsDataURL(file);
    }

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
        type='file'
        accept='.heic, image/*'
        onChange={handleUploadImage}
        ref={fileInput}
        className='block w-full aspect-[3/2] object-cover bg-white cursor-pointer'
      />
    </div>
  );
};

export default ImageForm;
