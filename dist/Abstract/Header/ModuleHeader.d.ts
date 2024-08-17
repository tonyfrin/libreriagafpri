import React from 'react';
export type ModuleHeaderStylesContainerProps = {
    display?: string;
    borderTop?: string;
    marginTop?: string;
    custom?: string;
};
export type ModuleHeaderProps = {
    containerStyles?: ModuleHeaderStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    children: React.ReactNode;
};
export declare const ModuleHeader: ({ containerStyles, containerProps, children, }: ModuleHeaderProps) => React.JSX.Element;
