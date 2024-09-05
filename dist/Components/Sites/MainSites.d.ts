import type { LoadingProps } from '../Loading';
import type { UseCurrenciesReturn, UseSitesReturn } from '../../states';
import type { InitSitesPropsExtended, SitesFormPropsExtended } from '../../Abstract';
export type MainSitesProps = {
    useSites: UseSitesReturn;
    useCurrencies: UseCurrenciesReturn;
    loadingProps?: LoadingProps;
    initProps?: InitSitesPropsExtended;
    addFormProps?: SitesFormPropsExtended;
    updateFormProps?: SitesFormPropsExtended;
};
export type MainSitesPropsExtended = {
    useSites: UseSitesReturn;
    useCurrencies: UseCurrenciesReturn;
    loadingProps?: LoadingProps;
    initProps?: InitSitesPropsExtended;
    addFormProps?: SitesFormPropsExtended;
    updateFormProps?: SitesFormPropsExtended;
};
export declare const MainSites: ({ useSites, useCurrencies, loadingProps, initProps, addFormProps, updateFormProps, }: MainSitesProps) => JSX.Element;
