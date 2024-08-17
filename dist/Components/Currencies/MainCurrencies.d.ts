import type { InitCurrenciesPropsExtended, CurrencyFormPropsExtended } from '../../Abstract';
import type { UseCurrenciesReturn } from '../../states';
export type MainCurrenciesProps = {
    useCurrencies: UseCurrenciesReturn;
    initCurrenciesProps?: InitCurrenciesPropsExtended;
    addFormProps?: CurrencyFormPropsExtended;
    updateFormProps?: CurrencyFormPropsExtended;
};
export type MainCurrenciesPropsExtended = {
    useCurrencies?: UseCurrenciesReturn;
    initCurrenciesProps?: InitCurrenciesPropsExtended;
    addFormProps?: CurrencyFormPropsExtended;
    updateFormProps?: CurrencyFormPropsExtended;
};
export declare const MainCurrencies: ({ useCurrencies, initCurrenciesProps, addFormProps, updateFormProps, }: MainCurrenciesProps) => JSX.Element;
