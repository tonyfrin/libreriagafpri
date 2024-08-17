import React from 'react';
type Box1Media500Style = {
    padding: string | number | undefined;
    width: string | number;
};
type Box1Media400Style = {
    padding: string | number;
    width: string | number;
};
type Box1Media300Style = {
    padding: string | number;
    width: string | number;
};
export type Box1Style = {
    backgroundColor?: string;
    padding?: string | number;
    width?: string | number;
    borderRadius?: string | number;
    height?: string | number;
    media500Style?: Box1Media500Style | undefined;
    media400Style?: Box1Media400Style | undefined;
    media300Style?: Box1Media300Style | undefined;
    margin?: string | number;
    transition?: string;
};
export type Box1Props = {
    styles?: Box1Style | undefined;
    children: JSX.Element;
    Class?: string;
};
export declare const Box1: ({ styles, children, Class }: Box1Props) => React.JSX.Element;
export {};
