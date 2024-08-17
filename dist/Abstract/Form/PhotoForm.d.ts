import React from 'react';
import type { ButtonProps } from '../Button';
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
export declare const PhotoForm: ({ formId, photo, imageFormConatinerStyle, changePhoto, changePhotoButtonProps, submitting, loadingContainerStyle, loadingProps, imageStyle, changeError, setSubmitting, }: PhotoFormProps) => React.JSX.Element;
