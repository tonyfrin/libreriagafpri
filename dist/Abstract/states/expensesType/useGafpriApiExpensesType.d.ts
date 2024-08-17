import type { UseErrorReturn } from '../../../states';
import { UseGafpriPagesExpensesTypeReturn } from './useGafpriPagesExpensesType';
import { UseGafpriAttributesExpensesTypeReturn } from './useGafpriAttributesExpensesType';
import { UseGafpriDataExpensesTypeReturn } from './useGafpriDataExpensesType';
type Actions = {
    deleteParentId: (id: number) => void;
    add: () => void;
    erase: (id: number) => void;
    update: () => void;
};
export type UseGafpriApiExpensesTypeReturn = {
    actions: Actions;
};
export type UseGafpriApiExpensesTypeProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesExpensesTypeReturn;
    attributes: UseGafpriAttributesExpensesTypeReturn;
    data: UseGafpriDataExpensesTypeReturn;
};
export declare function useGafpriApiExpensesType({ token, useError, pages, attributes, data, }: UseGafpriApiExpensesTypeProps): UseGafpriApiExpensesTypeReturn;
export {};
