import React from 'react';
export type PaymentInfoFormProps = {
    type: string;
    postsId: string;
    total: string;
    totalMethodsPayment: string;
    difference: string;
};
export declare const PaymentInfoForm: ({ type, postsId, total, totalMethodsPayment, difference, }: PaymentInfoFormProps) => React.JSX.Element;
