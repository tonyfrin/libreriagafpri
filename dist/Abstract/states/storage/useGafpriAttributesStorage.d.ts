import { SingleValue } from 'react-select';
import { UseGafpriSitesReturn, UseErrorReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
type State = {
    name: string;
    nameValid: boolean;
    address1: string;
    address1Valid: boolean;
    address2: string;
    address2Valid: boolean;
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
    site: string;
    siteValid: boolean;
    siteDefault: SelectDefault;
    siteOptions: SelectDefault[];
    currentId: number;
};
type Actions = {
    setStateCountry: (value: string) => void;
    setCountry: (value: string) => void;
    validationName: (value: string) => boolean;
    validationAddress1: (value: string) => boolean;
    validationAddress2: (value: string) => boolean;
    validationCity: (value: string) => boolean;
    validationStateCountry: (value: string) => boolean;
    validationCountry: (value: string) => boolean;
    validationPostCode: (value: string) => boolean;
    validationSite: (value: string) => boolean;
    validationButtonNext: () => void;
    changeName: (value: string) => void;
    changeAddress1: (value: string) => void;
    changeAddress2: (value: string) => void;
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
    changeSite: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    infoReset: () => void;
    setCurrentId: (id: number) => void;
};
export type UseGafpriAttributesStorageReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesStorageProps = {
    useError: UseErrorReturn;
    useSites: UseGafpriSitesReturn;
};
export declare function useGafpriAttributesStorage({ useError, useSites, }: UseGafpriAttributesStorageProps): UseGafpriAttributesStorageReturn;
export {};
