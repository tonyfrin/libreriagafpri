import type { ErrorResponseProps, CustomErrorResponseProps } from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesExpensesReturn } from './useGafpriPagesExpenses';
import type { UseGafpriAttributesExpensesReturn } from './useGafpriAttributesExpenses';
export type UseGafpriApiExpensesReturn = {
    actions: {
        newError: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        add: () => void;
    };
};
export type UseGafpriApiExpensesProps = {
    usePages: UseGafpriPagesExpensesReturn;
    useAttributes: UseGafpriAttributesExpensesReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiExpenses: ({ usePages, useAttributes, useError, token, }: UseGafpriApiExpensesProps) => UseGafpriApiExpensesReturn;
