import { KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import { UseGafpriEntityReturn } from '../../../states';
import { UseGafpriAttributesAccountsReceivableReturn } from './useGafpriAttributesAccountsReceivable';
export type UseGafpriPagesAccountsReceivableReturn = {
    states: {
        isFetching: boolean;
        isInit: boolean;
        isInitAdd: boolean;
        isEntitySearch: boolean;
        isAddEntity: boolean;
        isForm: boolean;
        isFormUpdate: boolean;
        isLoginForm: boolean;
        isLoginUpdateForm: boolean;
        isCreditList: boolean;
        isCreditView: boolean;
        isOrderView: boolean;
        isCreditPayment: boolean;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onInitAdd: () => void;
        onEntitySearch: () => void;
        onAddEntity: () => void;
        onForm: () => void;
        onFormUpdate: () => void;
        onLoginForm: () => void;
        onLoginUpdateForm: () => void;
        onCreditList: () => void;
        onCreditView: () => void;
        onCreditPayment: () => void;
        returnInit: () => void;
        processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
        selectEntity: (id: number) => void;
        processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
        goForm: (entity: EntityAttributes) => void;
        goFormUpdate: (id: number) => void;
        onOrderView: () => void;
    };
};
export type UseGafpriPagesAccountsReceivableProps = {
    useAttributes: UseGafpriAttributesAccountsReceivableReturn;
    useEntity: UseGafpriEntityReturn;
};
export declare const useGafpriPagesAccountsReceivable: ({ useAttributes, useEntity, }: UseGafpriPagesAccountsReceivableProps) => UseGafpriPagesAccountsReceivableReturn;
