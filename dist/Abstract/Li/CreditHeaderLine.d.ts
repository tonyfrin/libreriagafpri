type CreditHeaderLineContainerStylesProps = {
    backgroundColor?: string;
    margin?: string;
    borderRadius?: string;
    padding?: string;
    custom?: string;
};
export type CreditHeaderLineProps = {
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    containerStyles?: CreditHeaderLineContainerStylesProps;
};
export declare const CreditHeaderLine: ({ col1, col2, col3, col4, containerStyles, }: CreditHeaderLineProps) => JSX.Element;
export {};
