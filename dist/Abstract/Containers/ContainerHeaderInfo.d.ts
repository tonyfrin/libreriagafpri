import React from 'react';
export type ContainerHeaderInfoStylesContainerProps = {
    width?: string;
    borderRight?: string;
    margin?: string;
    custom?: string;
};
export type ContainerHeaderInfoProps = {
    containerStyles?: ContainerHeaderInfoStylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    children: React.ReactNode;
};
export declare const ContainerHeaderInfo: ({ containerStyles, containerProps, children, }: ContainerHeaderInfoProps) => React.JSX.Element;
