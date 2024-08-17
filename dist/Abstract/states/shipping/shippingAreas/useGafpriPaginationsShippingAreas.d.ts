import { UseGafpriDataShippingAreasReturn } from './useGafpriDataShippingAreas';
import type { ShippingAreasAttributes } from './useGafpriDataShippingAreas';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    setCurrentPage: (page: number) => void;
    setItemsPerPage: (itemPerPage: number) => void;
    sortByName: (items: ShippingAreasAttributes[] | null, order: 'asc' | 'desc') => ShippingAreasAttributes[] | null;
    filterByName: (search: string) => ShippingAreasAttributes[] | null;
    getPaginated: (items: ShippingAreasAttributes[] | null, page: number, itemPerPage: number) => ShippingAreasAttributes[] | null;
};
export type UseGafpriPaginationsShippingAreasReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsShippingAreasProps = {
    data: UseGafpriDataShippingAreasReturn;
};
export declare function useGafpriPaginationsShippingAreas({ data, }: UseGafpriPaginationsShippingAreasProps): UseGafpriPaginationsShippingAreasReturn;
export {};
