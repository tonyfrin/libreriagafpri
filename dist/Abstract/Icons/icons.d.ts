import React from 'react';
export type GloboStyle = {
    width?: string;
    height?: string;
    padding?: string;
    backgroundColor?: string;
    borderRadius?: string;
    color?: string;
    fontWeight?: string;
    margin?: string;
    fontSize?: string;
};
type Globo = {
    styles?: GloboStyle | undefined;
    step: string;
    globoClass?: string | undefined;
};
export declare const Globo: ({ styles, step, globoClass }: Globo) => React.JSX.Element;
export {};
