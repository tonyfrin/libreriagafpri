import React from 'react';
import { CashRegisterTypeUserAttributes } from '../states';
import { UseUserReturn } from '../../states';
export type BoxCashRegisterTypeUserConatinerStylesProps = {
    display?: string;
    flexWrap?: string;
    justifyContent?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    width?: string;
    custom?: string;
};
export type BoxCashRegisterTypeUserContentStylesProps = {
    position?: string;
    display?: string;
    alignItems?: string;
    marginBottom?: string;
    custom?: string;
};
export type BoxCashRegisterTypeUserContentItemsStylesProps = {
    position?: string;
    display?: string;
    alignItems?: string;
    marginRight?: string;
    marginBottom?: string;
    custom?: string;
};
export type BoxCashRegisterTypeUserContentButtonProps = {
    position?: string;
    top?: string;
    transform?: string;
    right?: string;
    cursor?: string;
    color?: string;
    backgroundColor?: string;
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    custom?: string;
};
export type BoxCashRegisterTypeUserContentTitleStylesProps = {
    marginRight?: string;
    padding?: string;
    color?: string;
    borderRadius?: string;
    border?: string;
    custom?: string;
};
export type BoxCashRegisterTypeUserProps = {
    containerStyles?: BoxCashRegisterTypeUserConatinerStylesProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentStyles?: BoxCashRegisterTypeUserContentStylesProps;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
    contentItemsStyles?: BoxCashRegisterTypeUserContentItemsStylesProps;
    contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
    contentButtonStyles?: BoxCashRegisterTypeUserContentButtonProps;
    contentButtonProps?: React.HTMLAttributes<HTMLSpanElement>;
    contentTitleStyles?: BoxCashRegisterTypeUserContentTitleStylesProps;
    contentTitleProps?: React.HTMLAttributes<HTMLSpanElement>;
    items: CashRegisterTypeUserAttributes[];
    removeItem: (id: number) => void;
    useUser: UseUserReturn;
};
export declare const BoxCashRegisterTypeUser: ({ containerStyles, containerProps, contentStyles, contentProps, contentItemsStyles, contentItemsProps, contentButtonStyles, contentButtonProps, contentTitleStyles, contentTitleProps, items, removeItem, useUser, }: BoxCashRegisterTypeUserProps) => React.JSX.Element;
