import { ChangeEvent } from 'react';
export type GeneralChangeGalleryPhotoWebSocketsProps = {
    from: string;
    e: ChangeEvent<HTMLInputElement>;
    changeError: (valueError: string[]) => void;
    setSubmitting: (valueSubmitting: boolean) => void;
    setPhoto: (valuePhoto: string[]) => void;
    validation?: (valueValid: string[]) => boolean;
    selectedOptions: string[];
};
export declare const generalChangeGalleryPhotoWebSockets: ({ e, setSubmitting, changeError, setPhoto, from, validation, selectedOptions, }: GeneralChangeGalleryPhotoWebSocketsProps) => Promise<void>;
