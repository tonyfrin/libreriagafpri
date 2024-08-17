import React from 'react';
export type LineInfoTwoStylesContainerProps = {
    display?: string;
    width?: string;
    custom?: string;
};
export type LineInfoTwoStylesContentTitleProps = {
    width?: string;
    margin?: string;
    fontWeight?: string;
    custom?: string;
};
export type LineInfoTwoStylesSpanTitle = {
    fontSize?: string;
    margin?: string;
    custom?: string;
};
export type LineInfoTwoStylesContentInfoProps = {
    width?: string;
    margin?: string;
    custom?: string;
};
export type LineInfoTwoStylesSpanInfo = {
    fontSize?: string;
    margin?: string;
    custom?: string;
};
export type LineInfoTwoProps = {
    containerStyles?: LineInfoTwoStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentTitleStyles?: LineInfoTwoStylesContentTitleProps;
    contentTitleProps?: React.HTMLAttributes<HTMLDivElement>;
    spanTitleStyles?: LineInfoTwoStylesSpanTitle;
    spanTitleProps?: React.HTMLAttributes<HTMLSpanElement>;
    title: string;
    contentInfoStyles?: LineInfoTwoStylesContentInfoProps;
    contentInfoProps?: React.HTMLAttributes<HTMLDivElement>;
    spanInfoStyles?: LineInfoTwoStylesSpanInfo;
    spanInfoProps?: React.HTMLAttributes<HTMLSpanElement>;
    info: string;
};
export declare const LineInfoTwo: ({ containerStyles, containerProps, contentTitleStyles, contentTitleProps, spanTitleStyles, spanTitleProps, title, contentInfoStyles, contentInfoProps, spanInfoStyles, spanInfoProps, info, }: LineInfoTwoProps) => React.JSX.Element;
