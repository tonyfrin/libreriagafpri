import type { ErrorResponseProps, CustomErrorResponseProps } from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesIncomeReturn } from './useGafpriPagesIncome';
import type { UseGafpriAttributesIncomeReturn } from './useGafpriAttributesIncome';
export type UseGafpriApiIncomeReturn = {
    actions: {
        newError: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        add: () => void;
    };
};
export type UseGafpriApiIncomeProps = {
    usePages: UseGafpriPagesIncomeReturn;
    useAttributes: UseGafpriAttributesIncomeReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiIncome: ({ usePages, useAttributes, useError, token, }: UseGafpriApiIncomeProps) => UseGafpriApiIncomeReturn;
