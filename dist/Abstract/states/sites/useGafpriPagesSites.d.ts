import { UseGafpriAttributesSitesReturn } from './useGafpriAttributesSites';
export type UseGafpriPagesSitesReturn = {
    states: {
        isFetching: boolean;
        isInit: boolean;
        isAdd: boolean;
        isUpdate: boolean;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        returnInit: () => void;
        onAdd: () => void;
        goAdd: () => void;
        onUpdate: () => void;
        goUpdate: (id: number) => void;
    };
};
export type UseGafpriPagesSitesProps = {
    attributes: UseGafpriAttributesSitesReturn;
};
export declare const useGafpriPagesSites: ({ attributes, }: UseGafpriPagesSitesProps) => UseGafpriPagesSitesReturn;
