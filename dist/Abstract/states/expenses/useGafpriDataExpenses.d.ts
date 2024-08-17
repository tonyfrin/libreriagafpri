import { PostsAttributes } from '../../../states';
import type { AddressAttributes } from '../entity';
export type ExpensesSupplierAttributes = {
    expensesPostsId: number;
    supplierId: number;
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
export interface ExpensesAttributes {
    postsId: number;
    supplierId: number;
    expensesTypeId: number;
    paymentPostsId: number;
    invoice: string;
    projectsPostsId: number;
    note: string;
    subTotal: number;
    subTotalTax: number;
    total: number;
    refundAmount: number;
    posts: PostsAttributes;
    payment: PaymentAttributes[];
    expensesSupplier: ExpensesSupplierAttributes[];
}
interface ExpensesData {
    data: {
        items: ExpensesAttributes[] | [] | null;
    };
}
export type UseGafpriDataExpensesReturn = {
    states: {
        isReady: boolean;
        items: ExpensesData;
    };
    actions: {
        onIsReady: () => void;
        notReady: () => void;
        offItems: () => void;
        handleNewItem: (newItem: ExpensesAttributes) => void;
        handleUpdatedItem: (itemUpdate: ExpensesAttributes) => void;
        getById: (id: number) => ExpensesAttributes | null;
    };
};
export type UseGafpriDataExpensesProps = {
    token: string | null;
};
export declare const useGafpriDataExpenses: ({ token, }: UseGafpriDataExpensesProps) => UseGafpriDataExpensesReturn;
export {};
