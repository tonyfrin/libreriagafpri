import React from 'react';
import { PHOTO_INPUT } from '../../constants';
import { PhotoForm, PhotoFormPropsExtended } from '../Form';

export type PhotoProductProps = {
  photo: string | null;
  changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitting: boolean;
  changeError: (error: string[]) => void;
  setSubmitting: (submitting: boolean) => void;
  props?: PhotoFormPropsExtended;
  inputId?: string;
};

export const PhotoProduct = ({
  photo,
  changePhoto,
  submitting,
  changeError,
  setSubmitting,
  props,
  inputId = '',
}: PhotoProductProps) => {
  return (
    <>
      <PhotoForm
        formId={`${PHOTO_INPUT}${inputId}`}
        photo={photo}
        imageFormConatinerStyle={props?.imageFormConatinerStyle}
        changePhoto={changePhoto}
        changePhotoButtonProps={props?.changePhotoButtonProps}
        submitting={submitting}
        loadingContainerStyle={props?.loadingContainerStyle}
        loadingProps={props?.loadingProps}
        imageStyle={props?.imageStyle}
        changeError={changeError}
        setSubmitting={setSubmitting}
      />
    </>
  );
};
