import { PostsAttributes } from '../../../states';
import type { BudgetItemsAttributes } from '../productsItems';
import type { AddressAttributes } from '../entity';
export interface BudgetCustomerAttributes {
    budgetPostsId: number;
    customerId: number;
    email: string;
    phone: string;
    name: string;
    lastName: string;
    address: AddressAttributes[];
    documentIndex: string;
    documentDigit: string;
    documentType: string;
}
export interface BudgetAttributes {
    postsId: number;
    customerId: number;
    referredId: number;
    note: string;
    subTotal: number;
    subTotalTax: number;
    costTotal: number;
    total: number;
    refundAmount: number;
    posts: PostsAttributes;
    budgetItems: BudgetItemsAttributes[];
    budgetCustomer: BudgetCustomerAttributes[];
}
interface BudgetData {
    data: {
        items: BudgetAttributes[] | [] | null;
    };
}
export type UseGafpriDataBudgetReturn = {
    states: {
        isReady: boolean;
        items: BudgetData;
    };
    actions: {
        onIsReady: () => void;
        notReady: () => void;
        offItems: () => void;
        handleNewItem: (newItem: BudgetAttributes) => void;
        handleUpdatedItem: (itemUpdate: BudgetAttributes) => void;
        getById: (id: number) => BudgetAttributes | null;
    };
};
export type UseGafpriDataBudgetProps = {
    token: string | null;
};
export declare const useGafpriDataBudget: ({ token, }: UseGafpriDataBudgetProps) => UseGafpriDataBudgetReturn;
export {};
