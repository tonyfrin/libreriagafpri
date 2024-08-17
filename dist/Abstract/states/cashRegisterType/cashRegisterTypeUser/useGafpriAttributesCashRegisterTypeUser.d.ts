import { UseUserReturn } from '../../../../states';
export type CashRegisterTypeUserAttributes = {
    id?: number;
    cashRegisterTypePostsId?: number;
    userId: number;
    isAuthorized: boolean;
    isSupervisor: boolean;
};
type State = {
    authorized: CashRegisterTypeUserAttributes[];
    supervisor: CashRegisterTypeUserAttributes[];
    selectedAuthorizedValue: string;
    selectedSupervisorValue: string;
    authorizedDefault: {
        value: string;
        label: string;
    };
    authorizedOptions: {
        value: string;
        label: string;
    }[];
    supervisorDefault: {
        value: string;
        label: string;
    };
    supervisorOptions: {
        value: string;
        label: string;
    }[];
};
type Actions = {
    removeAuthorized: (index: number) => void;
    addAuthorized: (id: string) => void;
    removeSupervisor: (index: number) => void;
    addSupervisor: (id: string) => void;
    infoReset: () => void;
    setAuthorized: (value: CashRegisterTypeUserAttributes[]) => void;
    setSupervisor: (value: CashRegisterTypeUserAttributes[]) => void;
};
export type UseGafpriAttributesCashRegisterTypeUserReturn = {
    states: State;
    actions: Actions;
};
export type UseGarpriAttributesCashRegisterTypeUserProps = {
    useUser: UseUserReturn;
};
export declare function useGafpriAttributesCashRegisterTypeUser({ useUser, }: UseGarpriAttributesCashRegisterTypeUserProps): UseGafpriAttributesCashRegisterTypeUserReturn;
export {};
