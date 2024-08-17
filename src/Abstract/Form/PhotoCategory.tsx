import React from 'react';
import { PhotoForm } from './PhotoForm';
import type { PhotoFormPropsExtended } from './PhotoForm';
import { PHOTO_CATEGORY_INPUT } from '../../constants';

export type PhotoCategoryProps = {
  photo: string | null;
  changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitting: boolean;
  changeError: (error: string[]) => void;
  setSubmitting: (submitting: boolean) => void;
  props?: PhotoFormPropsExtended;
  inputId?: string;
};

export const PhotoCategory = ({
  photo,
  changePhoto,
  submitting,
  changeError,
  setSubmitting,
  props,
  inputId = '',
}: PhotoCategoryProps) => {
  return (
    <>
      <PhotoForm
        formId={`${PHOTO_CATEGORY_INPUT}${inputId}`}
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
