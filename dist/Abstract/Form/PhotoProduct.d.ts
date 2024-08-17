import React from 'react';
import { PhotoFormPropsExtended } from '../Form';
export type PhotoProductProps = {
    photo: string | null;
    changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submitting: boolean;
    changeError: (error: string[]) => void;
    setSubmitting: (submitting: boolean) => void;
    props?: PhotoFormPropsExtended;
    inputId?: string;
};
export declare const PhotoProduct: ({ photo, changePhoto, submitting, changeError, setSubmitting, props, inputId, }: PhotoProductProps) => React.JSX.Element;
