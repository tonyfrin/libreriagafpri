import type { UseErrorReturn } from './useGafpriError';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { UseGafpriBankTypeReturn } from './useGafpriBankType';
import { UseGafpriAttributesPaymentReturn, UseGafpriPagesPaymentReturn, UseGafpriSubPagesDepositPaymentReturn, UseGafpriApiPaymentReturn } from '../Abstract';
import { UseGafpriOrderReturn } from './useGafpriOrder';
import { UseGafpriAccountsReceivableReturn } from './useGafpriAccountsReceivable';
import { UseGafpriOrderReturnReturn } from './useGafpriOrderReturn';
export interface UseGafpriPaymentReturn {
    attributes: UseGafpriAttributesPaymentReturn;
    pages: UseGafpriPagesPaymentReturn;
    subPagesDeposit: UseGafpriSubPagesDepositPaymentReturn;
    api: UseGafpriApiPaymentReturn;
    error: UseErrorReturn;
}
export type UseGafpriPaymentProps = {
    currencies: UseCurrenciesReturn;
    useBankType: UseGafpriBankTypeReturn;
    useOrder: UseGafpriOrderReturn;
    useOrderReturn: UseGafpriOrderReturnReturn;
    useCredit: UseGafpriAccountsReceivableReturn;
    token: string | null;
};
export declare function useGafpriPayment({ currencies, useBankType, useOrder, useCredit, useOrderReturn, token, }: UseGafpriPaymentProps): UseGafpriPaymentReturn;
