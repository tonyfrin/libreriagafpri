import React from 'react';
export type BoxLabelConatinerStylesProps = {
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
export type BoxLabelContentStylesProps = {
    position?: string;
    display?: string;
    alignItems?: string;
    marginBottom?: string;
    custom?: string;
};
export type BoxLabelContentItemsStylesProps = {
    position?: string;
    display?: string;
    alignItems?: string;
    marginRight?: string;
    marginBottom?: string;
    custom?: string;
};
export type BoxLabelContentButtonProps = {
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
export type BoxLabelContentTitleStylesProps = {
    marginRight?: string;
    padding?: string;
    color?: string;
    borderRadius?: string;
    border?: string;
    custom?: string;
};
export type BoxLabelProps = {
    containerStyles?: BoxLabelConatinerStylesProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentStyles?: BoxLabelContentStylesProps;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
    contentItemsStyles?: BoxLabelContentItemsStylesProps;
    contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
    contentButtonStyles?: BoxLabelContentButtonProps;
    contentButtonProps?: React.HTMLAttributes<HTMLSpanElement>;
    contentTitleStyles?: BoxLabelContentTitleStylesProps;
    contentTitleProps?: React.HTMLAttributes<HTMLSpanElement>;
    items: string[];
    removeItem: (index: number) => void;
};
export declare const BoxLabel: ({ containerStyles, containerProps, contentStyles, contentProps, contentItemsStyles, contentItemsProps, contentButtonStyles, contentButtonProps, contentTitleStyles, contentTitleProps, items, removeItem, }: BoxLabelProps) => React.JSX.Element;
