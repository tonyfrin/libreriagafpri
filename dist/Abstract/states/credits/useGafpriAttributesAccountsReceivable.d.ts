import { EntityAttributes } from '../entity';
type State = {
    entityId: number;
    entityIdValid: boolean;
    authorizedLogin: string;
    authorizedLoginValid: boolean;
    authorizedPassword: string;
    authorizedPasswordValid: boolean;
    limit: string;
    limitValid: boolean;
    timeToPay: string;
    timeToPayValid: boolean;
    currentId: number;
    entity: EntityAttributes | null;
};
type Actions = {
    infoReset: () => void;
    validationEntityId: (value: number) => boolean;
    validationAuthorizedLogin: (value: string) => boolean;
    validationAuthorizedPassword: (value: string) => boolean;
    validationLimit: (value: string) => boolean;
    validationTimeToPay: (value: string) => boolean;
    validationButtonNext: () => void;
    validationButtonNextLogin: () => void;
    changeEntityId: (value: number) => void;
    changeAuthorizedLogin: (value: string) => void;
    changeAuthorizedPassword: (value: string) => void;
    changeLimit: (value: string) => void;
    changeTimeToPay: (value: string) => void;
    setCurrentId: (value: number) => void;
    setEntity: (value: EntityAttributes) => void;
};
export type UseGafpriAttributesAccountsReceivableReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesAccountsReceivable(): UseGafpriAttributesAccountsReceivableReturn;
export {};
