import { UseErrorReturn } from '../../../states';
import { UseGafpriPagesCashRegisterTypeReturn } from './useGafpriPagesCashRegisterType';
import { UseGafpriAttributesCashRegisterTypeReturn } from './useGafpriAttributesCashRegisterType';
import { UseGafpriAttributesCashRegisterTypeUserReturn } from './cashRegisterTypeUser';
type Actions = {
    update: () => void;
    add: () => void;
    erase: (id: number) => void;
    conciliate: (cashRegisterPostId: number) => void;
};
export type UseGafpriApiCashRegisterTypeReturn = {
    actions: Actions;
};
export type UseGafpriApiCashRegisterTypeProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesCashRegisterTypeReturn;
    attributes: UseGafpriAttributesCashRegisterTypeReturn;
    crtu: UseGafpriAttributesCashRegisterTypeUserReturn;
};
export declare function useGafpriApiCashRegisterType({ token, useError, pages, attributes, crtu, }: UseGafpriApiCashRegisterTypeProps): UseGafpriApiCashRegisterTypeReturn;
export {};
