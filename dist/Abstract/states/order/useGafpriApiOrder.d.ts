import type { ErrorResponseProps, CustomErrorResponseProps } from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesOrderReturn } from './useGafpriPagesOrder';
import type { UseGafpriAttributesOrderReturn } from './useGafpriAttributesOrder';
import type { UseGafpriAttributesOrderItemsReturn } from '../productsItems';
export type UseGafpriApiOrderReturn = {
    actions: {
        newError: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        newErrorUpdate: (newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps) => void;
        add: () => void;
        update: () => void;
        erase: (id: number) => void;
    };
};
export type UseGafpriApiOrderProps = {
    usePages: UseGafpriPagesOrderReturn;
    useAttributes: UseGafpriAttributesOrderReturn;
    useProductItems: UseGafpriAttributesOrderItemsReturn;
    useError: UseErrorReturn;
    token: string | null;
};
export declare const useGafpriApiOrder: ({ usePages, useAttributes, useProductItems, useError, token, }: UseGafpriApiOrderProps) => UseGafpriApiOrderReturn;
