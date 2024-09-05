import { KeyboardEvent } from 'react';
import { EntityAttributes } from '../entity';
import { UseGafpriEntityReturn, UseGafpriProductsReturn } from '../../../states';
import { UseGafpriAttributesOrderReturn } from './useGafpriAttributesOrder';
import { UseGafpriAttributesOrderItemsReturn } from '../productsItems';
export type UseGafpriPagesOrderReturn = {
    states: {
        isFetching: boolean;
        isInit: boolean;
        isEntitySearch: boolean;
        isAddEntity: boolean;
        isSales: boolean;
        isProductSearch: boolean;
        isOrderList: boolean;
        isOrderView: boolean;
        isOrderPayment: boolean;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onEntitySearch: () => void;
        onAddEntity: () => void;
        onSales: () => void;
        onProductSearch: () => void;
        returnInit: () => void;
        processEntityBydocumentId: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByName: (event: KeyboardEvent<HTMLInputElement>) => void;
        selectEntity: (id: number) => void;
        processEntityByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;
        processEntityByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
        processProductBySku: (event: KeyboardEvent<HTMLInputElement>) => void;
        selectproduct: (id: number) => void;
        processProductByName: (event: KeyboardEvent<HTMLInputElement>) => void;
        goSalesEntity: (entity: EntityAttributes) => void;
        onOrderList: () => void;
        onOrderView: () => void;
        goOrderView: (id: number) => void;
        onOrderPayment: () => void;
    };
};
export type UseGafpriPagesOrderProps = {
    useAttributes: UseGafpriAttributesOrderReturn;
    useEntity: UseGafpriEntityReturn;
    useProducts: UseGafpriProductsReturn;
    useProductItems: UseGafpriAttributesOrderItemsReturn;
};
export declare const useGafpriPagesOrder: ({ useAttributes, useEntity, useProducts, useProductItems, }: UseGafpriPagesOrderProps) => UseGafpriPagesOrderReturn;
