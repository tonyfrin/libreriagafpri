import React from 'react';
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
export declare const PhotoGalleryForm: ({ formId, imageFormConatinerStyle, changePhoto, changePhotoButtonProps, }: PhotoGalleryFormProps) => React.JSX.Element;
