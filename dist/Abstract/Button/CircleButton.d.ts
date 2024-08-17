import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
export type CircleButtonStylesContainerProps = {
    custom?: string;
};
export type CircleButtonStylesContentProps = {
    cursor?: string;
    custom?: string;
};
export type CircleButtonStylesImageProps = {
    width?: string;
    padding?: string;
    display?: string;
    alignContent?: string;
    flexWrap?: string;
    justifyContent?: string;
    backgroundColor?: string;
    borderRadius?: string;
    fontSize?: string;
    color?: string;
    custom?: string;
};
export type CircleButtonStylesTitleProps = {
    textTransform?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    custom?: string;
};
export type CircleButtonProps = {
    containerStyles?: CircleButtonStylesContainerProps;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    contentStyles?: CircleButtonStylesContentProps;
    contentProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    image: string;
    imageStyles?: CircleButtonStylesImageProps;
    imageProps?: HTMLAttributes<HTMLImageElement>;
    title?: string;
    titleStyles?: CircleButtonStylesTitleProps;
    titleProps?: HTMLAttributes<HTMLSpanElement>;
};
export type CircleButtonPropsExtended = {
    containerStyles?: CircleButtonStylesContainerProps;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    contentStyles?: CircleButtonStylesContentProps;
    contentProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    imageStyles?: CircleButtonStylesImageProps;
    imageProps?: HTMLAttributes<HTMLImageElement>;
    titleStyles?: CircleButtonStylesTitleProps;
    titleProps?: HTMLAttributes<HTMLSpanElement>;
};
export declare const CircleButton: ({ containerStyles, containerProps, contentStyles, contentProps, imageProps, imageStyles, image, title, titleStyles, titleProps, }: CircleButtonProps) => React.JSX.Element;
