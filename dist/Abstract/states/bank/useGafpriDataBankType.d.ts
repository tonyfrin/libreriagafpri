import { PostsAttributes } from '../../../states';
import { SelectDefault } from '../../../helpers';
import { GeneralAttribute } from '../../../Validations';
import { BankTransactionsAttributes } from './bankTransactions';
export interface BankTypeAttributes {
    postsId: number;
    sitesId: number;
    name: string;
    bankName: string;
    account: string;
    accountType: string;
    balance: number;
    balanceChange: number;
    currenciesId: number;
    settings: GeneralAttribute[];
    posts: PostsAttributes;
    bankTransactions: BankTransactionsAttributes[];
}
type DeletedBankType = {
    itemId: number;
};
interface BankTypeData {
    data: {
        items: BankTypeAttributes[] | [] | null;
    };
}
type State = {
    isReady: boolean;
    items: BankTypeData;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    offItems: () => void;
    getById: (id: number) => BankTypeAttributes | null;
    handleNewItem: (newStorage: BankTypeAttributes) => void;
    handleUpdatedItem: (updatedStorage: BankTypeAttributes) => void;
    handleDeletedItem: ({ itemId }: DeletedBankType) => void;
    getOptionsItems: (sitesId: number) => SelectDefault[];
    getOptionsByMethods: (sitesId: number, methods: string) => SelectDefault[];
    isWalletGafpri: (id: number) => boolean;
};
export type UseGafpriDataBankTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataBankTypeProps = {
    token: string | null;
};
export declare function useGafpriDataBankType({ token, }: UseGafpriDataBankTypeProps): UseGafpriDataBankTypeReturn;
export {};
