import { SingleValue } from 'react-select';
import { UseCurrenciesReturn, UserAttributes } from '../../../../states';
import { SelectDefault } from '../../../../helpers';
type State = {
    userId: number;
    userIdValid: boolean;
    user: UserAttributes | null;
    name: string;
    nameValid: boolean;
    currency: string;
    currencyValid: boolean;
    currencyDefault: SelectDefault;
    currencyOptions: {
        value: string;
        label: string;
    }[];
    status: string;
    statusValid: boolean;
    statusDefault: SelectDefault;
    statusOptions: {
        value: string;
        label: string;
    }[];
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationName: (value: string) => boolean;
    validationUserId: (value: number) => boolean;
    validationCurrency: (value: string) => boolean;
    validationStatus: (value: string) => boolean;
    validationButtonNext: () => void;
    setUser: (value: UserAttributes | null) => void;
    changeCurrency: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeName: (value: string) => void;
    changeStatus: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    setCurrentId: (value: number) => void;
    changeUserId: (value: number) => void;
};
export type UseGafpriAttributesWalletAccountReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesWalletAccountProps = {
    useCurrencies: UseCurrenciesReturn;
};
export declare function useGafpriAttributesWalletAccount({ useCurrencies, }: UseGafpriAttributesWalletAccountProps): UseGafpriAttributesWalletAccountReturn;
export {};
