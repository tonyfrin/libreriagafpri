import { ChangeEvent } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { getMimeTypeByExtension } from '../helpers';
import { UPLOAD_PHOTO_ROUTE } from '../constants';

export type GeneralChangeGalleryPhotoProps = {
  e: ChangeEvent<HTMLInputElement>;
  changeError: (valueError: string[]) => void;
  setSubmitting: (valueSubmitting: boolean) => void;
  setPhoto: (valuePhoto: string[]) => void;
  validation?: (valueValid: string[]) => boolean;
  selectedOptions: string[];
};

export const generalChangeGalleryPhoto = async ({
  e,
  changeError,
  setSubmitting,
  setPhoto,
  validation,
  selectedOptions,
}: GeneralChangeGalleryPhotoProps): Promise<void> => {
  const newFile = e.target.files && e.target.files[0];

  if (!newFile) return;

  // Obtén el tipo MIME en función de la extensión del archivo
  const mimeType = getMimeTypeByExtension(newFile.name);
  if (!mimeType) {
    changeError([
      'El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.',
    ]);
    return;
  }

  const formData = new FormData();
  formData.append('file', newFile);
  formData.append('fileName', newFile.name);

  setSubmitting(true);

  const config: AxiosRequestConfig = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  try {
    const response = await axios.post(UPLOAD_PHOTO_ROUTE, formData, config);

    if (response.status === 200) {
      const selectedOption = response.data.imageUrl;
      if (!selectedOptions.includes(selectedOption)) {
        const updatedOptions = [...selectedOptions, selectedOption];

        const valid: boolean = validation ? validation(updatedOptions) : true;

        if (valid) {
          setPhoto(updatedOptions);
        }
      }
    }
    setSubmitting(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (newErrorValue: any) {
    changeError([`${newErrorValue.message}`]);
    setSubmitting(false);
  }
};
