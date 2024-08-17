import { UseGafpriDataProjectsReturn, ProjectsAttributes } from './useGafpriDataProjects';
type State = {
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    sortByName: (items: ProjectsAttributes[] | null, order: 'asc' | 'desc') => ProjectsAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (search: string) => ProjectsAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (items: ProjectsAttributes[] | null, page: number, itemsPerPage: number) => ProjectsAttributes[] | null;
};
export type UseGafpriPaginationsProjectsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPaginationsProjectsProps = {
    data: UseGafpriDataProjectsReturn;
};
export declare function useGafpriPaginationsProjects({ data, }: UseGafpriPaginationsProjectsProps): UseGafpriPaginationsProjectsReturn;
export {};
