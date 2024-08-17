import type { UseErrorReturn } from '../../../../states';
import { UseGafpriPagesTaxClassesReturn } from './useGafpriPagesTaxClasses';
import { UseGafpriAttributesTaxClassesReturn } from './useGafpriAttributesTaxClasses';
type Actions = {
    add: () => void;
    update: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiTaxClassesReturn = {
    actions: Actions;
};
export type UseGafpriApiTaxClassesProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesTaxClassesReturn;
    attributes: UseGafpriAttributesTaxClassesReturn;
};
export declare function useGafpriApiTaxClasses({ token, useError, pages, attributes, }: UseGafpriApiTaxClassesProps): UseGafpriApiTaxClassesReturn;
export {};
