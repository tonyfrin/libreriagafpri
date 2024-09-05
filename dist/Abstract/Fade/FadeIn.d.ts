import React, { ReactNode } from 'react';
export type FadeInProps = {
    keyName: string;
    children: ReactNode;
    isVisible: boolean;
};
export declare const FadeIn: React.FC<FadeInProps>;
