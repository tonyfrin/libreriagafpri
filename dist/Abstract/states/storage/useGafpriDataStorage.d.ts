import { PostsAttributes } from '../../../states';
export interface StorageStockAttributes {
    id: number;
    storageId: number;
    productId: number;
    stock: number;
    createdAt: Date;
    modifiedAt: Date;
}
export interface StorageAttributes {
    postsId: number;
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    sitesId: number;
    posts: PostsAttributes;
    storageStock: StorageStockAttributes[];
}
type DeletedStorage = {
    itemId: number;
};
interface StorageData {
    data: {
        items: StorageAttributes[] | [] | null;
    };
}
type State = {
    isReady: boolean;
    items: StorageData;
};
type Actions = {
    setIsReady: (value: boolean) => void;
    offItems: () => void;
    getById: (id: number) => StorageAttributes | null;
    handleNewItem: (newStorage: StorageAttributes) => void;
    handleUpdatedItem: (updatedStorage: StorageAttributes) => void;
    handleDeletedItem: ({ itemId }: DeletedStorage) => void;
};
export type UseGafpriDataStorageReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataStorageProps = {
    token: string | null;
};
export declare function useGafpriDataStorage({ token, }: UseGafpriDataStorageProps): UseGafpriDataStorageReturn;
export {};
