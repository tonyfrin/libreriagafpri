import type { UseErrorReturn } from './useGafpriError';
import type { UseGafpriEntityReturn } from './useGafpriEntity';
import { UseGafpriAttributesIncomeReturn, UseGafpriPagesIncomeReturn, UseGafpriPaginationsIncomeReturn, UseGafpriApiIncomeReturn, UseGafpriDataIncomeReturn } from '../Abstract';
import { UseGafpriProjectsReturn } from './useGafpriProjects';
import { UseCurrenciesReturn } from './useGafpriCurrencies';
export interface UseGafpriIncomeReturn {
    attributes: UseGafpriAttributesIncomeReturn;
    pages: UseGafpriPagesIncomeReturn;
    paginations: UseGafpriPaginationsIncomeReturn;
    api: UseGafpriApiIncomeReturn;
    data: UseGafpriDataIncomeReturn;
    error: UseErrorReturn;
}
export type UseGafpriIncomeProps = {
    token: string | null;
    useEntity: UseGafpriEntityReturn;
    useProject: UseGafpriProjectsReturn;
    useCurrencies: UseCurrenciesReturn;
};
export declare function useGafpriIncome({ token, useEntity, useProject, useCurrencies, }: UseGafpriIncomeProps): UseGafpriIncomeReturn;
