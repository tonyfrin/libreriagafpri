import React from 'react';
import { ParagraphProps } from './Paragraph';
export type ParagraphDescriptionProps = {
    changeDescription: (description: string) => void;
    props?: ParagraphProps;
};
export declare const ParagraphDescription: ({ changeDescription, props, }: ParagraphDescriptionProps) => React.JSX.Element;
