import React, { HTMLAttributes } from 'react';
import type { MainMenuProps } from '../../Abstract';
import type { UseErrorReturn } from '../../states';
export type InitMainMenuStylesContainerProps = {
    padding?: string;
    custom?: string;
    backgroundImage?: string;
    height?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
};
export type InitMainMenuProps = {
    stylesContainer?: InitMainMenuStylesContainerProps;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    contentProps: MainMenuProps;
    useError?: UseErrorReturn;
};
export declare const InitMainMenu: ({ stylesContainer, containerProps, contentProps, useError, }: InitMainMenuProps) => React.JSX.Element;
