import { KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import { UseGafpriEntityReturn } from '../../../states';
import { UseGafpriAttributesIncomeReturn } from './useGafpriAttributesIncome';
export type UseGafpriPagesIncomeReturn = {
    states: {
        isFetching: boolean;
        isInit: boolean;
        isEntitySearch: boolean;
        isAddEntity: boolean;
        isIncomeForm: boolean;
        isPaymentCrForm: boolean;
        isFinalPaymentCrForm: boolean;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onEntitySearch: () => void;
        onAddEntity: () => void;
        onIncomeForm: () => void;
        onPaymentCrForm: () => void;
        onFinalPaymentCrForm: () => void;
        returnInit: () => void;
        processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
        selectEntity: (id: number) => void;
        processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
        goIncomeEntity: (entity: EntityAttributes) => void;
    };
};
export type UseGafpriPagesIncomeProps = {
    useAttributes: UseGafpriAttributesIncomeReturn;
    useEntity: UseGafpriEntityReturn;
};
export declare const useGafpriPagesIncome: ({ useAttributes, useEntity, }: UseGafpriPagesIncomeProps) => UseGafpriPagesIncomeReturn;
