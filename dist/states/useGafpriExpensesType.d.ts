import type { UseErrorReturn } from './useGafpriError';
import { UseGafpriAttributesExpensesTypeReturn, UseGafpriApiExpensesTypeReturn, UseGafpriPagesExpensesTypeReturn, UseGafpriDataExpensesTypeReturn, UseGafpriPaginationsExpensesTypeReturn } from '../Abstract';
export interface UseGafpriExpensesTypeReturn {
    attributes: UseGafpriAttributesExpensesTypeReturn;
    pages: UseGafpriPagesExpensesTypeReturn;
    paginations: UseGafpriPaginationsExpensesTypeReturn;
    api: UseGafpriApiExpensesTypeReturn;
    data: UseGafpriDataExpensesTypeReturn;
    error: UseErrorReturn;
}
export type UseGafpriExpensesTypeProps = {
    token: string | null;
};
export declare function useGafpriExpensesType({ token, }: UseGafpriExpensesTypeProps): UseGafpriExpensesTypeReturn;
