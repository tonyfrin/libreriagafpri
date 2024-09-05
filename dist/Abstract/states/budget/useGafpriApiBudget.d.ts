import type { ErrorResponseProps, CustomErrorResponseProps } from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesBudgetReturn } from './useGafpriPagesBudget';
import type { UseGafpriAttributesBudgetReturn } from './useGafpriAttributesBudget';
import type { UseGafpriAttributesBudgetItemsReturn } from '../productsItems';
export type UseGafpriApiBudgetReturn = {
    actions: {
        newError: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        newErrorUpdate: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        add: () => void;
        update: () => void;
    };
};
export type UseGafpriApiBudgetProps = {
    usePages: UseGafpriPagesBudgetReturn;
    useAttributes: UseGafpriAttributesBudgetReturn;
    useProductItems: UseGafpriAttributesBudgetItemsReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiBudget: ({ usePages, useAttributes, useProductItems, useError, token, }: UseGafpriApiBudgetProps) => UseGafpriApiBudgetReturn;
