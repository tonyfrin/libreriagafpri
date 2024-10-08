import { ChangeEvent } from 'react';
export type GeneralChangePhotoWebSocketsProps = {
    e: ChangeEvent<HTMLInputElement>;
    setSubmitting: (valueSubmitting: boolean) => void;
    from: string;
    setPhoto: (valuePhoto: string) => void;
    changeError: (valueError: string[]) => void;
    validation?: (value: string) => boolean;
};
export declare const generalChangePhotoWebSockets: ({ e, setSubmitting, changeError, setPhoto, from, validation, }: GeneralChangePhotoWebSocketsProps) => Promise<void>;
