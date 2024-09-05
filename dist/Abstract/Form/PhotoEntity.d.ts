import React from 'react';
import type { PhotoFormPropsExtended } from './PhotoForm';
export type PhotoEntityProps = {
    photo: string | null;
    changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submitting: boolean;
    changeError: (error: string[]) => void;
    setSubmitting: (submitting: boolean) => void;
    props?: PhotoFormPropsExtended;
    inputId?: string;
};
export declare const PhotoEntity: ({ photo, changePhoto, submitting, changeError, setSubmitting, props, inputId, }: PhotoEntityProps) => React.JSX.Element;
