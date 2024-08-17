import { PostsAttributes } from '../../../states';
import { SelectDefault } from '../../../helpers';
import { CashRegisterTypeUserAttributes } from './cashRegisterTypeUser';
import { CashTransactionsAttributes } from '../cashRegister';
export type CashRegisterCurrenciesAttributes = {
    id?: number;
    cashRegisterPostsId?: number;
    currenciesId: number;
    initCash: number;
    endCash: number;
    initCashChange: number;
    endCashChange: number;
};
export type CashRegisterAttributes = {
    postsId: number;
    cashRegisterTypePostsId: number;
    posts: PostsAttributes;
    cashTransactions: CashTransactionsAttributes[];
    cashRegisterCurrencies: CashRegisterCurrenciesAttributes[];
};
export type CashRegisterTypeCurrenciesAttributes = {
    id?: number;
    cashRegisterTypePostsId: number;
    currenciesId: number;
    balance: number;
    balanceChange: number;
};
export interface CashRegisterTypeAttributes {
    postsId: number;
    name: string;
    sitesId: number;
    posts: PostsAttributes;
    cashRegisterTypeUser: CashRegisterTypeUserAttributes[];
    cashRegister: CashRegisterAttributes[];
    cashRegisterTypeCurrencies: CashRegisterTypeCurrenciesAttributes[];
}
type DeletedCashRegisterType = {
    itemId: number;
};
interface CashRegisterTypeData {
    data: {
        items: CashRegisterTypeAttributes[] | [] | null;
    };
}
type State = {
    isReady: boolean;
    items: CashRegisterTypeData;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    offItems: () => void;
    getById: (id: number) => CashRegisterTypeAttributes | null;
    handleNewItem: (newStorage: CashRegisterTypeAttributes) => void;
    handleUpdatedItem: (updatedStorage: CashRegisterTypeAttributes) => void;
    handleDeletedItem: ({ itemId }: DeletedCashRegisterType) => void;
    getOptionsItems: (sitesId: number) => SelectDefault[];
    getCurrentCashRegisterPostsId(postsId: number): number;
    getOptionsItemsByAutorized: (userId: number) => SelectDefault[];
};
export type UseGafpriDataCashRegisterTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataCashRegisterTypeProps = {
    token: string | null;
};
export declare function useGafpriDataCashRegisterType({ token, }: UseGafpriDataCashRegisterTypeProps): UseGafpriDataCashRegisterTypeReturn;
export {};
