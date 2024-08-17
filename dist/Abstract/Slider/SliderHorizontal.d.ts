import React from 'react';
export type SliderHorizontalProps = {
    images: string[];
    title?: string;
    stylesSpan?: SpanSliderStyle;
    remove: (image: string) => void;
};
export type SpanSliderStyle = {
    fontSize?: string;
    color?: string;
    paddingLeft?: string;
    props?: string;
};
export declare const SliderHorizontal: React.FC<SliderHorizontalProps>;
