import { SitesAttributes } from './useGafpriDataSites';
export type UseGafpriPaginationsSitesReturn = {
    states: {
        orderList: 'asc' | 'desc';
        searchTerm: string;
        currentPage: number;
        itemsPerPage: number;
    };
    actions: {
        sortByName: (items: SitesAttributes[] | null, order: 'asc' | 'desc') => SitesAttributes[] | null;
        setOrderList: (order: 'asc' | 'desc') => void;
        setSearchTerm: (value: string) => void;
        filterByName: (search: string, items: SitesAttributes[] | null) => SitesAttributes[] | null;
        setCurrentPage: (value: number) => void;
        getPaginated: (items: SitesAttributes[] | null, page: number, itemsPerPage: number) => SitesAttributes[] | null;
    };
};
export declare const useGafpriPaginationsSites: () => UseGafpriPaginationsSitesReturn;
