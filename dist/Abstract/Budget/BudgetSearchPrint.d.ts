import type { SiteOptions } from '../../states';
import { UseGafpriBudgetReturn } from '../../states';
import type { ListProps } from '../List';
import type { ErrorProps } from '../Error';
export type BudgetSearchPrintProps = {
    useBudget: UseGafpriBudgetReturn;
    optionButtonContainerStyle?: string;
    siteOptions: SiteOptions;
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export type BudgetSearchPrintExtended = {
    errorProps?: ErrorProps;
    listProps?: ListProps;
};
export declare const BudgetSearchPrint: ({ useBudget, siteOptions, optionButtonContainerStyle, errorProps, listProps, }: BudgetSearchPrintProps) => JSX.Element;
