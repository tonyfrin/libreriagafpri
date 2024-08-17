import React from 'react';
import type { ButtonProps } from '../Button';
export type LineInfoThreeStylesContainerProps = {
    display?: string;
    width?: string;
    custom?: string;
};
export type LineInfoThreeStylesContentTitleProps = {
    width?: string;
    margin?: string;
    fontWeight?: string;
    custom?: string;
};
export type LineInfoThreeStylesSpanTitle = {
    fontSize?: string;
    margin?: string;
    custom?: string;
};
export type LineInfoThreeStylesContentInfoProps = {
    width?: string;
    margin?: string;
    custom?: string;
};
export type LineInfoThreeStylesSpanInfo = {
    fontSize?: string;
    margin?: string;
    custom?: string;
};
export type LineInfoThreeStylesContentButtonProps = {
    width?: string;
    margin?: string;
    custom?: string;
};
export type LineInfoThreeProps = {
    containerStyles?: LineInfoThreeStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentTitleStyles?: LineInfoThreeStylesContentTitleProps;
    contentTitleProps?: React.HTMLAttributes<HTMLDivElement>;
    spanTitleStyles?: LineInfoThreeStylesSpanTitle;
    spanTitleProps?: React.HTMLAttributes<HTMLSpanElement>;
    title: string;
    contentInfoStyles?: LineInfoThreeStylesContentInfoProps;
    contentInfoProps?: React.HTMLAttributes<HTMLDivElement>;
    spanInfoStyles?: LineInfoThreeStylesSpanInfo;
    spanInfoProps?: React.HTMLAttributes<HTMLSpanElement>;
    info: string;
    contentButtonStyles?: LineInfoThreeStylesContentButtonProps;
    contentButtonProps?: React.HTMLAttributes<HTMLDivElement>;
    buttonProps: ButtonProps;
};
export declare const LineInfoThree: ({ containerStyles, containerProps, contentTitleStyles, contentTitleProps, spanTitleStyles, spanTitleProps, title, contentInfoStyles, contentInfoProps, spanInfoStyles, spanInfoProps, info, contentButtonStyles, contentButtonProps, buttonProps, }: LineInfoThreeProps) => React.JSX.Element;
