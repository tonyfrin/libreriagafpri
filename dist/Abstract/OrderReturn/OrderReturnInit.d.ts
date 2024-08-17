import React from 'react';
import { UseGafpriOrderReturnReturn } from '../../states';
export type OrderReturnInitStylesContainerProps = {
    maxWidht?: string;
    margin?: string;
    custom?: string;
};
export type OrderReturnInitProps = {
    containerStyles?: OrderReturnInitStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    use: UseGafpriOrderReturnReturn;
    returnModule: () => void;
};
export declare const OrderReturnInit: ({ containerStyles, containerProps, use, returnModule, }: OrderReturnInitProps) => JSX.Element;
