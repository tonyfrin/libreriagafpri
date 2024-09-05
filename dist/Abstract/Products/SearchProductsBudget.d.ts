import type { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderProps } from '../Header';
import type { UseGafpriProductsReturn, SiteOptions, UseGafpriBudgetReturn } from '../../states';
export type SearchProductsBudgetProps = {
    use: UseGafpriProductsReturn;
    useBudget: UseGafpriBudgetReturn;
    sitesOptions: SiteOptions;
    optionsButtonMainContainerStyle?: string;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type SearchProductsBudgetPropsExtended = {
    use?: UseGafpriProductsReturn;
    sitesOptions?: SiteOptions;
    optionsButtonMainContainerStyle?: string;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const SearchProductsBudget: ({ use, useBudget, sitesOptions, optionsButtonMainContainerStyle, headerProps, errorProps, listProps, }: SearchProductsBudgetProps) => JSX.Element;
