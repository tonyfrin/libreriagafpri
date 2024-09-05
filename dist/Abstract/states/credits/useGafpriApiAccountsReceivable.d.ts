import { UseErrorReturn } from '../../../states';
import { UseGafpriPagesAccountsReceivableReturn } from './useGafpriPagesAccountsReceivable';
import { UseGafpriAttributesAccountsReceivableReturn } from './useGafpriAttributesAccountsReceivable';
type Actions = {
    update: () => void;
    add: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiAccountsReceivableReturn = {
    actions: Actions;
};
export type UseGafpriApiAccountsReceivableProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesAccountsReceivableReturn;
    attributes: UseGafpriAttributesAccountsReceivableReturn;
};
export declare function useGafpriApiAccountsReceivable({ token, useError, pages, attributes, }: UseGafpriApiAccountsReceivableProps): UseGafpriApiAccountsReceivableReturn;
export {};
