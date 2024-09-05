import React from 'react';
type PaymentHeaderContainerStyleProps = {
    display?: string;
    justifyContent?: string;
    custom?: string;
};
type PaymentHeaderContentStyleProps = {
    marginTop?: string;
    custom?: string;
};
export type PaymentHeaderProps = {
    error: string[] | null;
    stepName: string;
    step: string;
    moduleName: string;
    returnFunction: () => void;
    returnTitle?: string;
    nextTitle?: string;
    nextFunction?: () => void;
    containerStyle?: PaymentHeaderContainerStyleProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentStyle?: PaymentHeaderContentStyleProps;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const PaymentHeader: ({ error, stepName, step, moduleName, returnFunction, returnTitle, nextTitle, nextFunction, containerStyle, containerProps, contentStyle, contentProps, }: PaymentHeaderProps) => JSX.Element;
export {};
