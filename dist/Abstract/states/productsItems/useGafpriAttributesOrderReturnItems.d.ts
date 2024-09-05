import { UseErrorReturn } from '../../../states';
import { OrderItemsAttributes } from './useGafpriAttributesOrderItems';
export type OrderReturnItemsAttributes = {
    id?: number;
    orderReturnPostsId?: number;
    orderItemsId: number;
    movementStorageId?: number;
    sku: string;
    name: string;
    cost: number;
    totalCost?: number;
    qty: number;
    qtyOrderItem: number;
    price: number;
    subTotal?: number;
    subTotalTax?: number;
    total?: number;
    taxClass?: string;
};
type State = {
    subTotal: string;
    subTotalTax: string;
    total: string;
    shoppingCart: OrderReturnItemsAttributes[];
};
type Actions = {
    changeShoppingCart: (value: OrderReturnItemsAttributes) => void;
    voidShoppingCart: () => void;
    updateShoppingCartItem: (index: number, updatedItem: OrderReturnItemsAttributes) => void;
    removeShoppingCartItem: (index: number) => void;
    infoReset: () => void;
    calculateSubTotal: () => number;
    calculateSubTotalTax: () => number;
    calculateTotal: () => number;
    updateQtyItemCart: (index: number, value: string) => void;
    uploadOrderItems: (orderItems: OrderItemsAttributes[]) => void;
};
export type UseGafpriAttributesOrderReturnItemsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesOrderReturnItemsProps = {
    useError: UseErrorReturn;
};
export declare function useGafpriAttributesOrderReturnItems({ useError, }: UseGafpriAttributesOrderReturnItemsProps): UseGafpriAttributesOrderReturnItemsReturn;
export {};
