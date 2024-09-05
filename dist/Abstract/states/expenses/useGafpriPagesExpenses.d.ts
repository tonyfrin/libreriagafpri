import { KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import { UseGafpriEntityReturn } from '../../../states';
import { UseGafpriAttributesExpensesReturn } from './useGafpriAttributesExpenses';
export type UseGafpriPagesExpensesReturn = {
    states: {
        isFetching: boolean;
        isInit: boolean;
        isEntitySearch: boolean;
        isAddEntity: boolean;
        isExpensesForm: boolean;
        isPaymentCrForm: boolean;
        isFinalPaymentCrForm: boolean;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onEntitySearch: () => void;
        onAddEntity: () => void;
        onExpensesForm: () => void;
        onPaymentCrForm: () => void;
        onFinalPaymentCrForm: () => void;
        returnInit: () => void;
        processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
        selectEntity: (id: number) => void;
        processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
        goExpensesEntity: (entity: EntityAttributes) => void;
    };
};
export type UseGafpriPagesExpensesProps = {
    useAttributes: UseGafpriAttributesExpensesReturn;
    useEntity: UseGafpriEntityReturn;
};
export declare const useGafpriPagesExpenses: ({ useAttributes, useEntity, }: UseGafpriPagesExpensesProps) => UseGafpriPagesExpensesReturn;
