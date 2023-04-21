// ImageUploader.js
import React, { useEffect, useState } from 'react';
import styles from './ImageUploader.module.scss';
import { selectInitialConfig } from 'state/product/slice';
import { useSelector } from 'react-redux';

interface IImageUploader {
  default: string;
  name: string;
  handlePictureChange: (img: any) => void;
}

const ImageUploader = (props: IImageUploader) => {
  const [, setImage] = useState<string | null>();
  const [previewUrl, setPreviewUrl] = useState<any>();
  const { mainColor } = useSelector(selectInitialConfig);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      props.handlePictureChange(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    props.handlePictureChange(null);
  };

  useEffect(() => {
    setPreviewUrl(props.default);
  }, [props]);

  return (
    <div className={styles.image_wrapper}>
      {!previewUrl && (
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={`right-0  text-xl text-white absolute top-0  p-4 rounded-bl-lg`}
          style={{ backgroundColor: mainColor }}
        />
      )}
      {previewUrl && (
        <>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={previewUrl}
            alt="Uploaded"
          />

          <div
            className={`right-0   text-xl text-white absolute top-0  p-4 rounded-bl-lg`}
            style={{ backgroundColor: mainColor }}
          >
            <button onClick={handleRemoveImage}>Remove</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
