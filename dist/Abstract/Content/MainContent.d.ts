import React from 'react';
export interface MainContentProps {
    isOpen: boolean;
    children: JSX.Element;
    mainContainerStyle?: string;
}
export declare const MainContent: React.FC<MainContentProps>;
