import React from 'react';
import { css } from '@emotion/css';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';

export type PhotoGalleryFormProps = {
  formId: string;
  imageFormConatinerStyle?: string;
  changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePhotoButtonProps?: ButtonProps;
};

export type PhotoGalleryFormPropsExtended = {
  imageFormConatinerStyle?: string;
  changePhotoButtonProps?: ButtonProps;
  loadingContainerStyle?: string;
  imageStyle?: string;
};

const defaultImageFormConatinerStyle = css`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`;

export const PhotoGalleryForm = ({
  formId,
  imageFormConatinerStyle = defaultImageFormConatinerStyle,
  changePhoto,
  changePhotoButtonProps = {
    title: 'Agregar Foto',
    styles: {
      fontSize: '10px',
      margin: '20px auto 40px auto',
      backgroundColor: '#439b57',
    },
  },
}: PhotoGalleryFormProps) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <form
        className={css(imageFormConatinerStyle)}
        onSubmit={handleSubmit}
        id={formId}
      >
        <>
          <input
            type="file"
            id="file-input"
            ref={fileInputRef}
            hidden
            onChange={changePhoto}
          />
          <Button
            buttonProps={{
              onClick: handleButtonClick,
            }}
            {...changePhotoButtonProps}
          />
        </>
      </form>
    </>
  );
};
