import { ChangeEvent } from 'react';
export type GeneralChangePhotoProps = {
    e: ChangeEvent<HTMLInputElement>;
    changeError: (valueError: string[]) => void;
    setSubmitting: (valueSubmitting: boolean) => void;
    setPhoto: (valuePhoto: string) => void;
    validation?: (valueValid: string) => boolean;
};
export declare const generalChangePhoto: ({ e, changeError, setSubmitting, setPhoto, validation, }: GeneralChangePhotoProps) => Promise<void>;
