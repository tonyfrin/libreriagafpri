import { SingleValue } from 'react-select';
import { UseGafpriAttributesPaymentReturn } from '../../payment';
import { SelectDefault } from '../../../../helpers';
import { SiteOptions, UseCurrenciesReturn, UseGafpriCashRegisterTypeReturn } from '../../../../states';
type State = {
    cashRegisterTypePostsId: string;
    cashRegisterTypePostsIdValid: boolean;
    cashRegisterTypePostsIdDefault: SelectDefault;
    cashRegisterTypePostsIdOptions: SelectDefault[];
    cashRegisterPostsId: number;
    currentCashRegisterTypePostsId: number;
    currentCashRegisterPostsId: number;
};
type Actions = {
    setCurrentCashRegisterTypePostsId: (value: number) => void;
    setCurrentCashRegisterPostsId: (value: number) => void;
    validationCashRegisterTypePostsId: (value: string) => boolean;
    validationButtonNextPaymentCr: () => void;
    validationButtonNextAdd: () => void;
    changeCashRegisterTypeId: (value: SingleValue<{
        label: string;
        value: string;
    }>) => void;
    infoReset: () => void;
};
export type UseGafpriAttributesPaymentTransferCashRegisterReturn = {
    states: State;
    actions: Actions;
    usePayment: UseGafpriAttributesPaymentReturn;
};
export type UseGafpriAttributesPaymentTransferCashRegisterProps = {
    cashRegisterType: UseGafpriCashRegisterTypeReturn;
    currencies: UseCurrenciesReturn;
    siteOptions: SiteOptions;
};
export declare function useGafpriAttributesPaymentTransferCashRegister({ cashRegisterType, currencies, siteOptions, }: UseGafpriAttributesPaymentTransferCashRegisterProps): UseGafpriAttributesPaymentTransferCashRegisterReturn;
export {};
