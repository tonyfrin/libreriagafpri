import { SingleValue } from 'react-select';
import { UseSitesReturn, UseCurrenciesReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
import { GeneralAttribute } from '../../../Validations';
type State = {
    sitesId: string;
    sitesIdValid: boolean;
    sitesIdDefault: SelectDefault;
    sitesIdOptions: SelectDefault[];
    name: string;
    nameValid: boolean;
    bankName: string;
    bankNameValid: boolean;
    account: string;
    accountValid: boolean;
    accountType: string;
    accountTypeValid: boolean;
    accountTypeDefault: SelectDefault;
    accountTypeOptions: SelectDefault[];
    currency: string;
    currencyValid: boolean;
    currencyDefault: SelectDefault;
    currencyOptions: SelectDefault[];
    settings: GeneralAttribute[];
    settingsValid: boolean;
    valueSettings: string;
    descriptionSettings: string;
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationName: (value: string) => boolean;
    validationSite: (value: string) => boolean;
    validationBankName: (value: string) => boolean;
    validationAccount: (value: string) => boolean;
    validationAccountType: (value: string) => boolean;
    validationCurrency: (value: string) => boolean;
    validationSettings: (value: GeneralAttribute[]) => boolean;
    validationButtonNext: () => void;
    changeSitesId: (options: SingleValue<{
        label: string;
        value: string;
    }>) => void;
    changeName: (value: string) => void;
    changeBankName: (value: string) => void;
    changeAccount: (value: string) => void;
    changeAccountType: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeCurrency: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeSettings: (value: GeneralAttribute) => void;
    setCurrentId: (value: number) => void;
    setSettings: (value: GeneralAttribute[]) => void;
    setValueSettings: (value: string) => void;
    setDescriptionSettings: (value: string) => void;
    addSettings: () => void;
    onRemoveSettings: (value: string) => void;
};
export type UseGafpriAttributesBankTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesBankTypeProps = {
    useSites: UseSitesReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare function useGafpriAttributesBankType({ useCurrencies, useSites, }: UseGafpriAttributesBankTypeProps): UseGafpriAttributesBankTypeReturn;
export {};
