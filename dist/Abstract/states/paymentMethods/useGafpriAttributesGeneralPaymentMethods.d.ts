import { SingleValue } from 'react-select';
import { PaymentMethodsAttributes, UseGafpriAttributesPaymentMethodsReturn } from './useGafpriAttributesPaymentMethods';
import { CashTransactionsAttributes, UseGafpriAttributesCashTransactionsReturn } from '../cashRegister';
import { UseCurrenciesReturn, UseErrorReturn, UseGafpriBankTypeReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
import { BankTransactionsAttributes, UseGafpriAttributesBankTransactionsReturn } from '../bank/bankTransactions/useGafpriAttributesBankTransactions';
import { UseGafpriPagesPaymentMethodsReturn } from './useGafpriPagesPaymentMethods';
import { UseGafpriAttributesCreditOpeningReturn, CreditOpeningAttributes, CreditPaymentAttributes } from '../credits';
export type GeneralPaymentMethodsAttributes = {
    paymentMethods: PaymentMethodsAttributes;
    cashTransactions?: CashTransactionsAttributes;
    bankTransactions?: BankTransactionsAttributes;
    creditOpening?: CreditOpeningAttributes;
    creditPayment?: CreditPaymentAttributes;
};
type State = {
    arrayPaymentMethod: GeneralPaymentMethodsAttributes[];
    totalPaymentMethod: number;
    totalMethods: number;
    currenciesId: number;
    currenciesIdValid: boolean;
    currenciesIdDefault: SelectDefault;
    currenciesIdOptions: SelectDefault[];
    change: number;
    debitAmount: number;
    depositAmount: number;
    type: 'deposit' | 'debit';
};
type Actions = {
    infoReset: () => void;
    addCashTransaction: () => void;
    emptyPaymentMethodArray: () => void;
    deletePaymentMethod: (index: number) => void;
    validationCurrenciesId: (value: string) => boolean;
    changeCashCurrenciesId: (value: SingleValue<{
        label: string;
        value: string;
    }>) => void;
    addTransferCashRegister: (currentCashRegisterPostsId: number, currentCashRegisterTypePostsId: number, cashRegisterPostsId: number, cashRegisterTypePostsId: number) => void;
    addTransferBankRegister: (debitBankTypePostsId: number, depositBankTypePostsId: number) => void;
    setChange: (value: number) => void;
    setDebitAmount: (value: number) => void;
    setDepositAmount: (value: number) => void;
    setType: (value: 'deposit' | 'debit') => void;
    partiallyInfoReset: () => void;
    addElectronicPaymentMethod: () => void;
    addCreditPaymentMethod: (entityId: number, currenciesId: number) => void;
    addSinglePaymentMethod: (siteCurrenciesId: number) => void;
    addCreditPaymentPaymentMethod: (creditOpeningPostsId: number, siteCurrenciesId: number, newAmount: number) => void;
};
export type UseGafpriAttributesGeneralPaymentMethodsReturn = {
    states: State;
    actions: Actions;
    pages: UseGafpriPagesPaymentMethodsReturn;
    usePaymentMethods: UseGafpriAttributesPaymentMethodsReturn;
    useCashTransactions: UseGafpriAttributesCashTransactionsReturn;
    useBankTransactions: UseGafpriAttributesBankTransactionsReturn;
    useCreditOpening: UseGafpriAttributesCreditOpeningReturn;
};
export type UseGafpriAttributesGeneralPaymentMethodsProps = {
    currencies?: UseCurrenciesReturn;
    useBankType?: UseGafpriBankTypeReturn;
    useError?: UseErrorReturn;
};
export declare function useGafpriAttributesGeneralPaymentMethods({ currencies, useBankType, useError, }: UseGafpriAttributesGeneralPaymentMethodsProps): UseGafpriAttributesGeneralPaymentMethodsReturn;
export {};
