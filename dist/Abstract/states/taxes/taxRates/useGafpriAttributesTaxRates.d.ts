import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../../helpers';
type State = {
    taxClassesId: string;
    taxClassesIdValid: boolean;
    rate: string;
    rateValid: boolean;
    city: string;
    cityValid: boolean;
    cityDefault: SelectDefault;
    cityOptions: SelectDefault[];
    state: string;
    stateCountryValid: boolean;
    stateCountryDefault: SelectDefault;
    stateCountryOptions: SelectDefault[];
    country: string;
    countryValid: boolean;
    countryDefault: SelectDefault;
    countryOptions: SelectDefault[];
    postCode: string;
    postCodeValid: boolean;
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationTaxClassesId: (value: number) => boolean;
    validationRate: (value: number) => boolean;
    validationCity: (value: string) => boolean;
    validationStateCountry: (value: string) => boolean;
    validationCountry: (value: string) => boolean;
    validationPostCode: (value: string) => boolean;
    validationButtonNext: () => void;
    changeTaxClasses: (value: string) => void;
    changeRate: (value: string) => void;
    changeCity: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeCityOptions: () => void;
    changeStateCountry: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeStateCountryOptions: () => void;
    changeCountry: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changePostCode: (newPostCode: string) => void;
    setStateCountry: (value: string) => void;
    setCountry: (value: string) => void;
    setCurrentId: (value: number) => void;
};
export type UseGafpriAttributesTaxRatesReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesTaxRates(): UseGafpriAttributesTaxRatesReturn;
export {};
