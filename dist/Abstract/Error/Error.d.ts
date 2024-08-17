import { FC } from 'react';
export interface ErrorProps {
    error: string[] | null;
    mainContainerStyle?: string;
    textStyle?: string;
}
export declare const Error: FC<ErrorProps>;
