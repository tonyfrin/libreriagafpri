import type { EntityAttributes } from './useGafpriAttributesEntity';
interface EntityData {
    data: {
        items: EntityAttributes[] | [] | null;
    };
}
export type UseGafpriDataEntityReturn = {
    states: {
        isReady: boolean;
        items: EntityData;
    };
    actions: {
        onIsReady: () => void;
        notReady: () => void;
        offItems: () => void;
        handleNewItem: (newItem: EntityAttributes) => void;
        handleUpdatedItem: (itemUpdate: EntityAttributes) => void;
        getById: (id: number) => EntityAttributes | null;
        findByDocumentIdDigit: (digit: string) => EntityAttributes | null;
        findByNameAndLastName: (searchTerm: string) => EntityAttributes[];
        findByEmail: (emailToFind: string) => EntityAttributes | null;
        findByPhone: (phoneToFind: string) => EntityAttributes | null;
    };
};
export type UseGafpriDataEntityProps = {
    token: string | null;
};
export declare const useGafpriDataEntity: ({ token, }: UseGafpriDataEntityProps) => UseGafpriDataEntityReturn;
export {};
