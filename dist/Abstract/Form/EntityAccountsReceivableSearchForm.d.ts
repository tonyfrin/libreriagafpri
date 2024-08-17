import React from 'react';
import type { UseGafpriEntityReturn, UseGafpriAccountsReceivableReturn } from '../../states';
export type EntityAccountsReceivableSearchFormStaylesContainerProps = {
    color?: string;
    fontSize?: string;
    paddingBottom?: string;
    custom?: string;
};
export type EntityAccountsReceivableSearchFormProps = {
    containerStyles?: EntityAccountsReceivableSearchFormStaylesContainerProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    use: UseGafpriAccountsReceivableReturn;
    useEntity: UseGafpriEntityReturn;
    returnModule: () => void;
};
export declare const EntityAccountsReceivableSearchForm: ({ containerStyles, containerProps, use, useEntity, returnModule, }: EntityAccountsReceivableSearchFormProps) => React.JSX.Element;
