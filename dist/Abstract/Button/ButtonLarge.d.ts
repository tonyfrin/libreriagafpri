import React from 'react';
import { IconType } from 'react-icons';
export interface ButtonLargeProps {
    label: string;
    description: string;
    onClick: () => void;
    Icon: IconType;
    titleButton: string;
    mainContainerStyle?: string;
    infoContainerStyle?: string;
    gridContainerStyle?: string;
    iconContainerStyle?: string;
    iconStyle?: string;
    textContainerStyle?: string;
    titleStyle?: string;
    descriptionStyle?: string;
    buttonContainerStyle?: string;
    buttonStyle?: string;
    buttonTitleStyle?: string;
}
export declare const ButtonLarge: React.FC<ButtonLargeProps>;
