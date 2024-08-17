import { KeyboardEvent } from 'react';
import { UseGafpriAttributesWalletAccountReturn } from './useGafpriAttributesWalletAccount';
import { UseErrorReturn, UseUserReturn, UserAttributes } from '../../../../states';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    isInitUser: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: (user: UserAttributes) => void;
    goUpdate: (id: number) => void;
    onUpdate: () => void;
    onInitUser: () => void;
    processUserByUserName: (event: KeyboardEvent<HTMLInputElement>) => void;
    processUserByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
    processUserByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export type UseGafpriPagesWalletAccountReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPagesWalletAccountProps = {
    attributes: UseGafpriAttributesWalletAccountReturn;
    useUser: UseUserReturn;
    useError: UseErrorReturn;
};
export declare function useGafpriPagesWalletAccount({ attributes, useUser, useError, }: UseGafpriPagesWalletAccountProps): UseGafpriPagesWalletAccountReturn;
export {};
