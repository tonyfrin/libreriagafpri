import React from 'react';
export type ModalProps = {
    children: JSX.Element;
    open: boolean;
    onClose?: () => void;
};
export declare const Modal: ({ children, open, onClose }: ModalProps) => React.JSX.Element;
