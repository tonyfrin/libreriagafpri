import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../helpers';
import { UseGafpriDataEntityReturn } from './useGafpriDataEntity';
import { EntityAttributes, AddressAttributes, DocumentIdAttributes } from './useGafpriAttributesEntity';
export type UseGafpriPaginationsEntityReturn = {
    states: {
        orderList: 'asc' | 'desc';
        searchTerm: string;
        currentPage: number;
        documentCurrentPage: number;
        searchBy: 'name' | 'lastName' | 'email' | 'phone' | 'digit';
        searchByDefault: SelectDefault;
        searchByOptions: {
            value: string;
            label: string;
        }[];
        itemsPerPage: number;
    };
    actions: {
        sortByName: (items: EntityAttributes[] | null, order: 'asc' | 'desc') => EntityAttributes[] | null;
        filterByName: (search: string) => EntityAttributes[] | null;
        getPaginated: (items: EntityAttributes[] | AddressAttributes[] | DocumentIdAttributes[] | null, page: number, itemPerPage: number) => EntityAttributes[] | AddressAttributes[] | DocumentIdAttributes[] | null;
        sortByProperty: (items: EntityAttributes[] | null, search: 'name' | 'lastName' | 'email' | 'phone' | 'digit', order: 'asc' | 'desc') => EntityAttributes[] | null;
        filterBySearch: (search: string, searchType: 'name' | 'lastName' | 'email' | 'phone' | 'digit') => EntityAttributes[] | null;
        changeSearchBy: (options: SingleValue<{
            value: string;
            label: string;
        }>) => void;
        setOrderList: (order: 'asc' | 'desc') => void;
        setSearchTerm: (search: string) => void;
        setCurrentPage: (page: number) => void;
        setDocumentCurrentPage: (page: number) => void;
    };
};
export type UseGafpriPaginationsEntityProps = {
    useData: UseGafpriDataEntityReturn;
};
export declare const useGafpriPaginationsEntity: ({ useData, }: UseGafpriPaginationsEntityProps) => UseGafpriPaginationsEntityReturn;
