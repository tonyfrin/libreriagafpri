import { SingleValue } from 'react-select';
import type { UseErrorReturn } from '../../../states';
import type { SelectDefault } from '../../../helpers';
type State = {
    name: string;
    nameValid: boolean;
    parentId: string;
    parentIdValid: boolean;
    parentIdDefault: SelectDefault;
    parentIdOptions: SelectDefault[];
    description: string;
    descriptionValid: boolean;
    status: string;
    statusValid: boolean;
    statusDefault: SelectDefault;
    statusOptions: SelectDefault[];
    currentId: number;
};
type Actions = {
    changeName: (value: string) => void;
    validationName: (value: string) => void;
    changeDescription: (value: string) => void;
    validationDescription: (value: string) => void;
    changeParentId: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationParentId: (value: string) => void;
    changeStatus: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationStatus: (value: string) => void;
    validationButtonNext: () => void;
    infoReset: () => void;
    setCurrentId: (id: number) => void;
    setParentIdOptions: (value: SelectDefault[]) => void;
};
export type UseGafpriAttributesExpensesTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesExpensesTypeProps = {
    useError: UseErrorReturn;
};
export declare function useGafpriAttributesExpensesType({ useError, }: UseGafpriAttributesExpensesTypeProps): UseGafpriAttributesExpensesTypeReturn;
export {};
