import React from 'react';
import { SiteOptions } from '../../states';
export type MethodsPaymentItems = {
    title: string;
    amount: number;
    remove: (() => void) | null;
};
type MethodsPaymentTableContainerStylesProps = {
    width?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    height?: string;
    custom?: string;
};
export type MethodsPaymentTableProps = {
    siteOptions: SiteOptions;
    methods: MethodsPaymentItems[];
    title: string;
    total: number;
    containerStyles?: MethodsPaymentTableContainerStylesProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
};
export declare const MethodsPaymentTable: ({ siteOptions, methods, title, total, containerStyles, containerProps, }: MethodsPaymentTableProps) => JSX.Element;
export {};
