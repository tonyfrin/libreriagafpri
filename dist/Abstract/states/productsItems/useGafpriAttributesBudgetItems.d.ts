import { UseErrorReturn } from '../../../states';
import { ProductsAttributes } from '../products/useGafpriDataProducts';
import { OrderItemsAttributes } from './useGafpriAttributesOrderItems';
export type BudgetItemsAttributes = {
    id?: number;
    budgetPostsId?: number;
    productsPostsId: number;
    sku: string;
    name: string;
    cost: number;
    totalCost?: number;
    qty: number;
    price: number;
    subTotal?: number;
    subTotalTax?: number;
    total?: number;
    type: string;
    taxClass?: string;
};
type State = {
    subTotal: string;
    subTotalTax: string;
    total: string;
    shoppingCart: BudgetItemsAttributes[];
};
type Actions = {
    changeShoppingCart: (value: BudgetItemsAttributes) => void;
    voidShoppingCart: () => void;
    updateShoppingCartItem: (index: number, updatedItem: BudgetItemsAttributes) => void;
    removeShoppingCartItem: (index: number) => void;
    infoReset: () => void;
    calculateSubTotal: () => number;
    calculateSubTotalTax: () => number;
    calculateTotal: () => number;
    addItemToCart: (product: ProductsAttributes) => void;
    updateQtyItemCart: (index: number, value: string) => void;
    updatePriceItemCart: (index: number, value: string) => void;
    uploadBudgetItems: (orderItems: BudgetItemsAttributes[]) => void;
    uploadOrderItems: (orderItems: OrderItemsAttributes[]) => void;
};
export type UseGafpriAttributesBudgetItemsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesBudgetItemsProps = {
    useError: UseErrorReturn;
};
export declare function useGafpriAttributesBudgetItems({ useError, }: UseGafpriAttributesBudgetItemsProps): UseGafpriAttributesBudgetItemsReturn;
export {};
