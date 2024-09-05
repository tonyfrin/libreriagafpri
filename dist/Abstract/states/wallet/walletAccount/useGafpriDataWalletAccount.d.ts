export interface WalletAccountAttributes {
    id: number;
    userId: number;
    authorId: number;
    currenciesId: number;
    name: string;
    status: string;
    balance: number;
    createdAt: Date;
    modifiedAt: Date;
}
type DeletedWalletAccount = {
    itemId: number;
};
interface WalletAccountData {
    data: {
        items: WalletAccountAttributes[] | [] | null;
    };
}
type State = {
    isReady: boolean;
    items: WalletAccountData;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    offItems: () => void;
    getById: (id: number) => WalletAccountAttributes | null;
    handleNewItem: (newStorage: WalletAccountAttributes) => void;
    handleUpdatedItem: (updatedStorage: WalletAccountAttributes) => void;
    handleDeletedItem: ({ itemId }: DeletedWalletAccount) => void;
};
export type UseGafpriDataWalletAccountReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataWalletAccountProps = {
    token: string | null;
};
export declare function useGafpriDataWalletAccount({ token, }: UseGafpriDataWalletAccountProps): UseGafpriDataWalletAccountReturn;
export {};
