import React from 'react';
import { UseGafpriOrderReturn, SiteOptions } from '../../states';
import { PaymentMethodsImages } from '../Sections';
export type OrderViewProps = {
    useOrder: UseGafpriOrderReturn;
    sitesOptions: SiteOptions;
    logoPdf: string;
    returnFunction: () => void;
    images?: PaymentMethodsImages;
};
export declare const OrderView: ({ useOrder, sitesOptions, logoPdf, returnFunction, images, }: OrderViewProps) => React.JSX.Element | null;
