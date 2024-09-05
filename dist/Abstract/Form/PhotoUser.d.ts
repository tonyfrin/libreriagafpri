import React from 'react';
import type { PhotoFormPropsExtended } from './PhotoForm';
export type PhotoUserProps = {
    photo: string | null;
    changePhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submitting: boolean;
    changeError: (error: string[]) => void;
    setSubmitting: (submitting: boolean) => void;
    props?: PhotoFormPropsExtended;
    inputId?: string;
};
export declare const PhotoUser: ({ photo, changePhoto, submitting, changeError, setSubmitting, props, inputId, }: PhotoUserProps) => React.JSX.Element;
