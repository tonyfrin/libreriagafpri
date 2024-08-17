import React from 'react';
import { PhotoForm } from './PhotoForm';
import type { PhotoFormPropsExtended } from './PhotoForm';
import { PHOTO_DOCUMENT_ID_INPUT } from '../../constants';

export type PhotoDocumentIdProps = {
  photo: string | null;
  changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitting: boolean;
  changeError: (error: string[]) => void;
  setSubmitting: (submitting: boolean) => void;
  props?: PhotoFormPropsExtended;
  inputId?: string;
};

export const PhotoDocumentId = ({
  photo,
  changePhoto,
  submitting,
  changeError,
  setSubmitting,
  props,
  inputId = '',
}: PhotoDocumentIdProps) => {
  return (
    <>
      <PhotoForm
        formId={`${PHOTO_DOCUMENT_ID_INPUT}${inputId}`}
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
