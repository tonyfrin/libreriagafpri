import type { ListPropsExtended } from '../List';
import type { ErrorProps } from '../Error';
import type { HeaderProps } from '../Header';
import type { UseGafpriProductsReturn, SiteOptions, UseGafpriOrderReturn } from '../../states';
export type SearchProductsProps = {
    use: UseGafpriProductsReturn;
    useOrder: UseGafpriOrderReturn;
    sitesOptions: SiteOptions;
    optionsButtonMainContainerStyle?: string;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export type SearchProductsPropsExtended = {
    use?: UseGafpriProductsReturn;
    sitesOptions?: SiteOptions;
    optionsButtonMainContainerStyle?: string;
    headerProps?: HeaderProps;
    errorProps?: ErrorProps;
    listProps?: ListPropsExtended;
};
export declare const SearchProducts: ({ use, useOrder, sitesOptions, optionsButtonMainContainerStyle, headerProps, errorProps, listProps, }: SearchProductsProps) => JSX.Element;
