import { PaymentMethodsAttributes } from '../../paymentMethods';
import { PostsAttributes } from '../../../../states';
export type CreditOpeningAttributes = {
    postsId?: number;
    accountsReceivablePostsId?: number;
    paymentMethodsPostsId?: number;
    entityId?: number;
    authorizedLogin?: string;
    authorizedPassword?: string;
    description?: string;
    amount: number;
    balance?: number;
    payDayLimit?: string;
    defaulted?: boolean;
    paymentMethods?: PaymentMethodsAttributes;
    posts?: PostsAttributes;
};
type State = {
    entityId: number;
    authorizedLogin: string;
    authorizedLoginValid: boolean;
    authorizedPassword: string;
    authorizedPasswordValid: boolean;
    amount: number;
};
type Actions = {
    infoReset: () => void;
    setEntityId: (value: number) => void;
    setAuthorizedLogin: (value: string) => void;
    setAuthorizedPassword: (value: string) => void;
    setAmount: (value: number) => void;
    validationAuthorizedLogin: (value: string) => boolean;
    validationAuthorizedPassword: (value: string) => boolean;
};
export type UseGafpriAttributesCreditOpeningReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesCreditOpening(): UseGafpriAttributesCreditOpeningReturn;
export {};
