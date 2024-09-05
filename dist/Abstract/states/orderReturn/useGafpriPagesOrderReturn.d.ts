import { UseGafpriEntityReturn, UseGafpriOrderReturn, UseErrorReturn } from '../../../states';
import { UseGafpriAttributesOrderReturnReturn } from './useGafpriAttributesOrderReturn';
import { UseGafpriAttributesOrderReturnItemsReturn } from '../productsItems';
export type UseGafpriPagesOrderReturnReturn = {
    states: {
        isFetching: boolean;
        isInit: boolean;
        isSales: boolean;
        isOrderPayment: boolean;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onSales: () => void;
        returnInit: () => void;
        goSales: () => void;
        onOrderPayment: () => void;
    };
};
export type UseGafpriPagesOrderReturnProps = {
    useAttributes: UseGafpriAttributesOrderReturnReturn;
    useOrder: UseGafpriOrderReturn;
    useEntity: UseGafpriEntityReturn;
    useError: UseErrorReturn;
    useProductItems: UseGafpriAttributesOrderReturnItemsReturn;
};
export declare const useGafpriPagesOrderReturn: ({ useAttributes, useOrder, useEntity, useError, useProductItems, }: UseGafpriPagesOrderReturnProps) => UseGafpriPagesOrderReturnReturn;
