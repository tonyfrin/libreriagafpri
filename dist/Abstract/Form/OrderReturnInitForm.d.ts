import React from 'react';
import type { UseGafpriOrderReturnReturn } from '../../states';
type OrderReturnInitFormStaylesContainerProps = {
    color?: string;
    fontSize?: string;
    paddingBottom?: string;
    custom?: string;
};
export type OrderReturnInitFormProps = {
    containerStyles?: OrderReturnInitFormStaylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    use: UseGafpriOrderReturnReturn;
    returnModule: () => void;
};
export declare const OrderReturnInitForm: ({ containerStyles, containerProps, use, returnModule, }: OrderReturnInitFormProps) => React.JSX.Element;
export {};
