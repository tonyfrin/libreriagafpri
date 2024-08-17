import { UseErrorReturn } from '../../../states';
import { UseGafpriPagesStorageReturn } from './useGafpriPagesStorage';
import { UseGafpriAttributesStorageReturn } from './useGafpriAttributesStorage';
type Actions = {
    update: () => void;
    add: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiStorageReturn = {
    actions: Actions;
};
export type UseGafpriApiStorageProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesStorageReturn;
    attributes: UseGafpriAttributesStorageReturn;
};
export declare function useGafpriApiStorage({ token, useError, pages, attributes, }: UseGafpriApiStorageProps): UseGafpriApiStorageReturn;
export {};
