import { UseErrorReturn } from '../../../../states';
import { UseGafpriPagesTaxRatesReturn } from './useGafpriPagesTaxRates';
import { UseGafpriAttributesTaxRatesReturn } from './useGafpriAttributesTaxRates';
type Actions = {
    add: () => void;
    update: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiTaxRatesReturn = {
    actions: Actions;
};
export type UseGafpriApiTaxRatesProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesTaxRatesReturn;
    attributes: UseGafpriAttributesTaxRatesReturn;
};
export declare function useGafpriApiTaxRates({ token, useError, pages, attributes, }: UseGafpriApiTaxRatesProps): UseGafpriApiTaxRatesReturn;
export {};
