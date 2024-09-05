import React from 'react';
import { ImgHTMLAttributes } from 'react';
type SectionStyle = {
    display?: string;
    margin?: string;
    padding?: string;
};
type ContainerStyle = {
    width?: string;
    margin?: string;
    textAlign?: string;
};
type Media = {
    marginTop?: string;
    maxWidth?: string;
};
type ImageStyle = {
    marginTop?: string;
    marginBottom?: string;
    maxWidth?: string;
    media600Style?: Media | undefined;
    media300Style?: Media | undefined;
};
type Style = {
    sectionClass?: string;
    divClass?: string;
    imgClass?: string;
    image: string;
    styleSection?: SectionStyle;
    styleContainer?: ContainerStyle;
    styleImage?: ImageStyle;
};
export type LogoProps = ImgHTMLAttributes<HTMLImageElement> & Style;
export declare const LogoContainer: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & Style & React.RefAttributes<HTMLImageElement>>;
export {};
