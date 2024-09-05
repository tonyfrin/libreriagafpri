import React from 'react';
import { ParagraphProps } from './Paragraph';
export type ParagraphNoteProps = {
    change: (value: string) => void;
    props?: ParagraphProps;
};
export declare const ParagraphNote: ({ change, props }: ParagraphNoteProps) => React.JSX.Element;
