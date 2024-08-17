import { UseErrorReturn } from '../../../states';
import { UseGafpriPagesBankTypeReturn } from './useGafpriPagesBankType';
import { UseGafpriAttributesBankTypeReturn } from './useGafpriAttributesBankType';
type Actions = {
    update: () => void;
    add: () => void;
    erase: (id: number) => void;
};
export type UseGafpriApiBankTypeReturn = {
    actions: Actions;
};
export type UseGafpriApiBankTypeProps = {
    token: string | null;
    useError: UseErrorReturn;
    pages: UseGafpriPagesBankTypeReturn;
    attributes: UseGafpriAttributesBankTypeReturn;
};
export declare function useGafpriApiBankType({ token, useError, pages, attributes, }: UseGafpriApiBankTypeProps): UseGafpriApiBankTypeReturn;
export {};
