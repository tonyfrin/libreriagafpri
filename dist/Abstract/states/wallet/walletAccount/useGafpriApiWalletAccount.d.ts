import { UseErrorReturn } from '../../../../states';
import { UseGafpriPagesWalletAccountReturn } from './useGafpriPagesWalletAccount';
import { UseGafpriAttributesWalletAccountReturn } from './useGafpriAttributesWalletAccount';
type Actions = {
    update: () => void;
    add: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiWalletAccountReturn = {
    actions: Actions;
};
export type UseGafpriApiWalletAccountProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesWalletAccountReturn;
    attributes: UseGafpriAttributesWalletAccountReturn;
};
export declare function useGafpriApiWalletAccount({ token, useError, pages, attributes, }: UseGafpriApiWalletAccountProps): UseGafpriApiWalletAccountReturn;
export {};
