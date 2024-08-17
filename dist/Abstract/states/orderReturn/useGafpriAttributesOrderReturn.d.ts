import { EntityAttributes } from '../entity';
import { UseGafpriAttributesOrderReturnItemsReturn } from '../productsItems';
type State = {
    orderPostsId: number;
    note: string;
    entity: EntityAttributes | null;
};
type Actions = {
    infoReset: () => void;
    setOrderPostsId: (value: number) => void;
    changeNote: (value: string) => void;
    setEntity: (value: EntityAttributes | null) => void;
};
export type UseGafpriAttributesOrderReturnReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesOrderReturnProps = {
    useProductItems: UseGafpriAttributesOrderReturnItemsReturn;
};
export declare function useGafpriAttributesOrderReturn({ useProductItems, }: UseGafpriAttributesOrderReturnProps): UseGafpriAttributesOrderReturnReturn;
export {};
