import React from 'react';
import { Title1Props } from '../Title';
type CircleContentStyleProps = {
    width?: string;
    height?: string;
    fontSize?: string;
    display?: string;
    justifyContent?: string;
    alignContent?: string;
    backgroundColor?: string;
    borderRadius?: string;
    color?: string;
    padding?: string;
    flexWrap?: string;
    marginRight?: string;
    custom?: string;
};
export type CircleStepProps = {
    step: string;
    circleStyle?: CircleContentStyleProps;
    circleProps?: React.HTMLAttributes<HTMLSpanElement>;
    titleStyle?: Title1Props['styles'];
    title?: string;
};
export declare const CircleStep: ({ step, title, circleStyle, circleProps, titleStyle, }: CircleStepProps) => JSX.Element;
export {};
