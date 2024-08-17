import React from 'react';
import type { ContainerFormPropsExtended } from '../Containers';
import type { Title1Props, Title2Props } from '../Title';
import type { ButtonProps } from '../Button';
import type { ErrorProps } from '../Error';
import type { Box1Props } from '../Box';
interface BoxProps {
    styles?: Box1Props['styles'];
    Class?: Box1Props['Class'];
}
export type ModelFormProps = {
    boxProps?: BoxProps;
    titles: {
        title1: string;
        title2: string;
    };
    title1Props?: Title1Props;
    title2Props?: Title2Props;
    handleActions: (action: string, value: any) => void;
    buttonConditional?: boolean;
    buttonTitles: {
        mainButton?: string;
        returnButton: string;
    };
    mainButtonProps?: ButtonProps;
    buttonNextId?: string;
    returnButtonStyle?: ButtonProps['styles'];
    returnButtonProps?: ButtonProps;
    children: React.ReactElement;
    error: string[] | null;
    errorProps?: ErrorProps;
    childrenContainerProps?: ContainerFormPropsExtended;
    titleContainerStyle?: string;
    actionButtonContainerStyle?: string;
    returnButtonConatinerStyle?: string;
};
export type ModelFormPropsExtended = {
    boxProps?: BoxProps;
    title1Props?: Title1Props;
    title2Props?: Title2Props;
    handleActions?: (action: string, value: any) => void;
    buttonConditional?: boolean;
    buttonTitles: {
        mainButton?: string;
        returnButton: string;
    };
    mainButtonProps?: ButtonProps;
    buttonNextId?: string;
    returnButtonStyle?: ButtonProps['styles'];
    returnButtonProps?: ButtonProps;
    error?: string[] | null;
    errorProps?: ErrorProps;
    childrenContainerProps?: ContainerFormPropsExtended;
    titleContainerStyle?: string;
    actionButtonContainerStyle?: string;
    returnButtonConatinerStyle?: string;
};
export declare const ModelForm: ({ boxProps, titles, title1Props, title2Props, handleActions, buttonConditional, buttonTitles, mainButtonProps, buttonNextId, returnButtonStyle, returnButtonProps, children, error, errorProps, childrenContainerProps, titleContainerStyle, actionButtonContainerStyle, returnButtonConatinerStyle, }: ModelFormProps) => JSX.Element;
export {};
