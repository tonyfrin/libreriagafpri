import React from 'react';
type DivSigleCheckStyle = {
    borderColor?: string;
    borderRadius?: string;
    borderStyle?: string;
    borderWidth?: string;
    boxSizing?: string;
    padding?: string;
    customStyle?: string;
};
type LabelSingleCheckStyle = {
    customStyle?: string;
};
type SpanSingleCheckStyle = {
    customStyle?: string;
};
export interface SingleCheckBoxProps {
    selected: boolean;
    title: string;
    onChange: () => void;
    containerStyles?: DivSigleCheckStyle;
    itemStayles?: LabelSingleCheckStyle;
    titleStyles?: SpanSingleCheckStyle;
}
export declare const SingleCheckBox: React.FC<SingleCheckBoxProps>;
export {};
