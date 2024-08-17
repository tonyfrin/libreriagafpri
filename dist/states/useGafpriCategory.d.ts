import { ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import type { UseErrorReturn } from './useGafpriError';
import type { SelectDefault } from '../helpers';
export interface CategoryAttributes {
    id: number;
    slug: string;
    parentId: number | null;
    name: string;
    description: string | null;
    photo: string | null;
    status: string;
    createdAt: Date;
    modifiedAt: Date;
}
type DeletedCategory = {
    itemId: number;
};
interface CategoryData {
    data: {
        items: CategoryAttributes[] | [] | null;
    };
}
export interface Category {
    id: number;
    name: string;
    children?: Category[];
}
type State = {
    isReady: boolean;
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
    name: string;
    nameValid: boolean;
    parentId: string;
    parentIdValid: boolean;
    parentIdDefault: SelectDefault;
    parentIdOptions: SelectDefault[];
    childrenFetching: boolean;
    description: string;
    descriptionValid: boolean;
    photo: string;
    photoValid: boolean;
    submitting: boolean;
    status: string;
    statusValid: boolean;
    statusDefault: SelectDefault;
    statusOptions: SelectDefault[];
    category: CategoryData;
    currentId: number;
    error: string[];
    orderList: 'asc' | 'desc';
    searchTerm: string;
    currentPage: number;
    itemsPerPage: number;
};
type Actions = {
    changeName: (value: string) => void;
    validationName: (value: string) => void;
    changeDescription: (value: string) => void;
    validationDescription: (value: string) => void;
    changeParentId: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    validationParentId: (value: string) => void;
    deleteParentId: (id: number) => void;
    changePhoto: (e: ChangeEvent<HTMLInputElement>) => void;
    validationPhoto: (value: string) => void;
    setPhoto: (value: string) => void;
    setSubmitting: (value: boolean) => void;
    changeStatus: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeError: (value: string[]) => void;
    validationStatus: (value: string) => void;
    validationButtonNext: () => void;
    setIsReady: (value: boolean) => void;
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    update: () => void;
    onUpdate: () => void;
    offCategory: () => void;
    add: () => void;
    getById: (id: number) => CategoryAttributes | null;
    getChildren: (id: number) => CategoryAttributes[];
    goUpdate: (id: number) => void;
    sortByName: (items: CategoryAttributes[] | null, order: 'asc' | 'desc') => CategoryAttributes[] | null;
    setOrderList: (order: 'asc' | 'desc') => void;
    setSearchTerm: (value: string) => void;
    filterByName: (items: CategoryAttributes[] | null, search: string) => CategoryAttributes[] | null;
    setCurrentPage: (value: number) => void;
    getPaginated: (items: CategoryAttributes[] | null, page: number, itemsPerPage: number) => CategoryAttributes[] | null;
    deleteCategory: (id: number) => void;
    handleNewCategory: (newCurrency: CategoryAttributes) => void;
    handleUpdatedCategory: (updatedCurrency: CategoryAttributes) => void;
    handleDeletedCategory: ({ itemId }: DeletedCategory) => void;
    convertResponseToCategories: () => Category[];
};
export type UseCategoryReturn = {
    states: State;
    actions: Actions;
};
export type UseCategoryProps = {
    token: string | null;
    useError: UseErrorReturn;
};
export declare function useGafpriCategory({ token, useError, }: UseCategoryProps): UseCategoryReturn;
export {};
