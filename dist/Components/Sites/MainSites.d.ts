import type { LoadingProps } from '../Loading';
import type { UseCurrenciesReturn, UseGafpriSitesReturn } from '../../states';
import type { InitSitesPropsExtended, SitesFormPropsExtended } from '../../Abstract';
export type MainSitesProps = {
    useSites: UseGafpriSitesReturn;
    useCurrencies: UseCurrenciesReturn;
    loadingProps?: LoadingProps;
    initProps?: InitSitesPropsExtended;
    addFormProps?: SitesFormPropsExtended;
    updateFormProps?: SitesFormPropsExtended;
};
export type MainSitesPropsExtended = {
    useSites: UseGafpriSitesReturn;
    useCurrencies: UseCurrenciesReturn;
    loadingProps?: LoadingProps;
    initProps?: InitSitesPropsExtended;
    addFormProps?: SitesFormPropsExtended;
    updateFormProps?: SitesFormPropsExtended;
};
export declare const MainSites: ({ useSites, useCurrencies, loadingProps, initProps, addFormProps, updateFormProps, }: MainSitesProps) => JSX.Element;
