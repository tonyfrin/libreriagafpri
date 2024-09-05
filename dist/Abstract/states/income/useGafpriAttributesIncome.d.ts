import { SingleValue } from 'react-select';
import { EntityAttributes } from '../entity';
import { UseGafpriAttributesPaymentReturn } from '../payment';
import { SelectDefault } from '../../../helpers';
import { UseGafpriProjectsReturn, UseCurrenciesReturn } from '../../../states';
type State = {
    customerId: number;
    customerIdValid: boolean;
    projectsPostsId: string;
    projectsPostsIdValid: boolean;
    projectsPostsIdDefault: SelectDefault;
    projectsPostsIdOptions: SelectDefault[];
    note: string;
    subTotal: string;
    subTotalTax: string;
    total: string;
    entity: EntityAttributes | null;
    cashRegisterTypePostsId: number;
    cashRegisterPostsId: number;
};
type Actions = {
    infoReset: () => void;
    validationCustomerId: (value: number) => boolean;
    validationProjectsPostsId: (value: string) => boolean;
    changeCustomerId: (value: number) => void;
    changeProjectsPostsId: (value: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeNote: (value: string) => void;
    changeSubTotal: (value: string) => void;
    changeSubTotalTax: (value: string) => void;
    changeTotal: () => void;
    setEntity: (value: EntityAttributes | null) => void;
    validationButtonNext: () => void;
    setCashRegisterTypePostsId: (value: number) => void;
    setCashRegisterPostsId: (value: number) => void;
    validationButtonNextPaymentCr: () => boolean;
    validationButtonNextAdd: () => void;
};
export type UseGafpriAttributesIncomeReturn = {
    states: State;
    actions: Actions;
    usePayment: UseGafpriAttributesPaymentReturn;
};
export type UseGafpriAttributesIncomeProps = {
    projects: UseGafpriProjectsReturn;
    currencies: UseCurrenciesReturn;
};
export declare function useGafpriAttributesIncome({ projects, currencies, }: UseGafpriAttributesIncomeProps): UseGafpriAttributesIncomeReturn;
export {};
