import { PostsAttributes } from '../../../states';
import { GeneralAttribute } from '../../../Validations';
import { EntityAttributes } from '../entity';
import { CreditOpeningAttributes } from './creditOpening';
export interface AccountsReceivableAttributes {
    postsId: number;
    entityId: number;
    authorizedId: number;
    limit: number;
    timeToPay: number;
    creditScore: number;
    balance: number;
    statistics: GeneralAttribute[];
    posts: PostsAttributes;
    entity: EntityAttributes;
    creditOpening: CreditOpeningAttributes[];
}
type DeletedAccountsReceivable = {
    itemId: number;
};
interface AccountsReceivableData {
    data: {
        items: AccountsReceivableAttributes[] | [] | null;
    };
}
type State = {
    isReady: boolean;
    items: AccountsReceivableData;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    offItems: () => void;
    getById: (id: number) => AccountsReceivableAttributes | null;
    handleNewItem: (newStorage: AccountsReceivableAttributes) => void;
    handleUpdatedItem: (updatedStorage: AccountsReceivableAttributes) => void;
    handleDeletedItem: ({ itemId }: DeletedAccountsReceivable) => void;
};
export type UseGafpriDataAccountsReceivableReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataAccountsReceivableProps = {
    token: string | null;
};
export declare function useGafpriDataAccountsReceivable({ token, }: UseGafpriDataAccountsReceivableProps): UseGafpriDataAccountsReceivableReturn;
export {};
