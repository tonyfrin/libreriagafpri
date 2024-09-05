import { PostsAttributes } from '../../../states';
import type { OrderReturnItemsAttributes } from '../productsItems';
import { PaymentAttributesReturn } from '../payment';
import { OrderAttributes } from '../order/useGafpriDataOrder';
export interface OrderReturnAttributes {
    postsId: number;
    orderPostsId: number;
    paymentPostsId: number;
    note: string;
    subTotal: number;
    subTotalTax: number;
    costTotal: number;
    total: number;
    posts: PostsAttributes;
    orderItems: OrderReturnItemsAttributes[];
    payment: PaymentAttributesReturn | null;
    order: OrderAttributes;
}
interface OrderReturnData {
    data: {
        items: OrderReturnAttributes[] | [] | null;
    };
}
export type UseGafpriDataOrderReturnReturn = {
    states: {
        isReady: boolean;
        items: OrderReturnData;
    };
    actions: {
        onIsReady: () => void;
        notReady: () => void;
        offItems: () => void;
        handleNewItem: (newItem: OrderReturnAttributes) => void;
        handleUpdatedItem: (itemUpdate: OrderReturnAttributes) => void;
        getById: (id: number) => OrderReturnAttributes | null;
    };
};
export type UseGafpriDataOrderReturnProps = {
    token: string | null;
};
export declare const useGafpriDataOrderReturn: ({ token, }: UseGafpriDataOrderReturnProps) => UseGafpriDataOrderReturnReturn;
export {};
