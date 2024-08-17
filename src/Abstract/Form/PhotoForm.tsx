import React from 'react';
import { css } from '@emotion/css';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { Loading } from '../../Components';
import type { LoadingProps } from '../../Components';

export type PhotoFormProps = {
  formId: string;
  photo: string | null;
  imageFormConatinerStyle?: string;
  changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePhotoButtonProps?: ButtonProps;
  submitting: boolean;
  loadingContainerStyle?: string;
  loadingProps?: LoadingProps;
  imageStyle?: string;
  changeError: (error: string[]) => void;
  setSubmitting: (submitting: boolean) => void;
};

export type PhotoFormPropsExtended = {
  imageFormConatinerStyle?: string;
  changePhotoButtonProps?: ButtonProps;
  loadingContainerStyle?: string;
  loadingProps?: LoadingProps;
  imageStyle?: string;
};

const defaultImageFormConatinerStyle = css`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`;

const defaultLoadingContainerStyle = css`
  transition: all 1s ease 0s;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: auto;
`;

const defaultImageStyle = css`
  transition: all 1s ease 0s;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: auto;
  border-radius: 10px;
`;

export const PhotoForm = ({
  formId,
  photo,
  imageFormConatinerStyle = defaultImageFormConatinerStyle,
  changePhoto,
  changePhotoButtonProps = {
    title: 'Cambiar Foto',
    styles: {
      fontSize: '10px',
      margin: '20px auto 40px auto',
      backgroundColor: '#439b57',
    },
  },
  submitting,
  loadingContainerStyle = defaultLoadingContainerStyle,
  loadingProps,
  imageStyle = defaultImageStyle,
  changeError,
  setSubmitting,
}: PhotoFormProps) => {
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

  React.useEffect(() => {
    if (photo) {
      const img = new Image();
      img.src = photo;
      img.onload = () => {
        setSubmitting(false);
      };
      img.onerror = () => {
        changeError([`Error al cargar la imagen: ${photo}`]);
        setSubmitting(true);
      };
    }
  }, [photo]);

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
        {submitting ? (
          <div className={css(loadingContainerStyle)}>
            <Loading {...loadingProps} />
          </div>
        ) : (
          photo && (
            <img className={css(imageStyle)} src={photo} alt="Category" />
          )
        )}
      </form>
    </>
  );
};
