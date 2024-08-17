import React from 'react';
import { ButtonProps } from './Button';
export type ButtonOptionsContainerProps = {
    props: ButtonProps;
    containerStayles?: StylesContainer;
};
export type StylesContainer = {
    display?: string;
    justifyContent?: string;
    width?: string;
    customStyles?: string;
};
export declare const ButtonOptionsContainer: ({ props, containerStayles, }: ButtonOptionsContainerProps) => React.JSX.Element;
