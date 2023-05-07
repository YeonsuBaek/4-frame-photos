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

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  };

  return (
    <div className='relative w-full'>
      {/* <img
        src={uploadedImage}
        onClick={() => {
          fileInput.current.click();
        }}
        className='absolute top-0 left-0 object-cover w-full aspect-[3/2]'
      /> */}
      <label
        htmlFor={props.id}
        className='block w-full aspect-[3/2] object-cover bg-white cursor-pointer'
        style={styles}
      ></label>
      <input
        id={props.id}
        accept='image/*'
        type='file'
        onChange={handleUploadImage}
        ref={fileInput}
      />
    </div>
  );
};

export default ImageForm;
