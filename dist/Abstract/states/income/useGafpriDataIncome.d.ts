import { PostsAttributes } from '../../../states';
import type { AddressAttributes } from '../entity';
export type IncomeCustomerAttributes = {
    incomePostsId: number;
    customerId: number;
    email: string;
    phone: string;
    name: string;
    lastName?: string;
    address: AddressAttributes[];
    documentIndex?: string;
    documentDigit: string;
    documentType: string;
};
interface CashTransactionsAttributes {
    id: number;
    cashRegisterTypePostsId: number;
    cashRegisterPostsId: number;
    type: string;
    amount: number;
    change: number;
    balance: number;
    balanceChange: number;
    currenciesId: number;
    paymentMethodsPostsId: number;
    note: string;
    createdAt: Date;
}
interface PaymentMethodsAttributes {
    postsId: number;
    paymentPostsId: number;
    type: string;
    methodType: string;
    paymentType: string;
    currenciesId: number;
    bank: string;
    number: string;
    amount: number;
    change: number;
    note: string;
    posts: PostsAttributes;
    cashTransactions: CashTransactionsAttributes[];
}
interface PaymentAttributes {
    postsId: number;
    total: number;
    note: string;
    type: string;
    posts: PostsAttributes;
    paymentMethods: PaymentMethodsAttributes[];
}
export interface IncomeAttributes {
    postsId: number;
    customerId: number;
    paymentPostsId: number;
    projectsPostsId: number;
    note: string;
    subTotal: number;
    subTotalTax: number;
    total: number;
    refundAmount: number;
    posts: PostsAttributes;
    payment: PaymentAttributes[];
    incomeCustomer: IncomeCustomerAttributes[];
}
interface IncomeData {
    data: {
        items: IncomeAttributes[] | [] | null;
    };
}
export type UseGafpriDataIncomeReturn = {
    states: {
        isReady: boolean;
        items: IncomeData;
    };
    actions: {
        onIsReady: () => void;
        notReady: () => void;
        offItems: () => void;
        handleNewItem: (newItem: IncomeAttributes) => void;
        handleUpdatedItem: (itemUpdate: IncomeAttributes) => void;
        getById: (id: number) => IncomeAttributes | null;
    };
};
export type UseGafpriDataIncomeProps = {
    token: string | null;
};
export declare const useGafpriDataIncome: ({ token, }: UseGafpriDataIncomeProps) => UseGafpriDataIncomeReturn;
export {};
