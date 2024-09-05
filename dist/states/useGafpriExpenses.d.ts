import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import { UseGafpriAttributesExpensesReturn, UseGafpriPagesExpensesReturn, UseGafpriPaginationsExpensesReturn, UseGafpriApiExpensesReturn, UseGafpriDataExpensesReturn } from '../Abstract';
import { UseGafpriProjectsReturn } from './useGafpriProjects';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
import { UseGafpriExpensesTypeReturn } from './useGafpriExpensesType';
export interface UseGafpriExpensesReturn {
    attributes: UseGafpriAttributesExpensesReturn;
    pages: UseGafpriPagesExpensesReturn;
    paginations: UseGafpriPaginationsExpensesReturn;
    api: UseGafpriApiExpensesReturn;
    data: UseGafpriDataExpensesReturn;
    error: UseErrorReturn;
}
export type UseGafpriExpensesProps = {
    token: string | null;
    useEntity: UseGafpriEntityReturn;
    useProject: UseGafpriProjectsReturn;
    useCurrencies: UseCurrenciesReturn;
    useExpensesType: UseGafpriExpensesTypeReturn;
};
export declare function useGafpriExpenses({ token, useEntity, useProject, useCurrencies, useExpensesType, }: UseGafpriExpensesProps): UseGafpriExpensesReturn;
