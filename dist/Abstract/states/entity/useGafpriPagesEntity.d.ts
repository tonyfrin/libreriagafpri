import { UseGafpriAttributesEntityReturn } from './useGafpriAttributesEntity';
export type UseGafpriPagesEntityReturn = {
    states: {
        isFetching: boolean;
        isInit: boolean;
        isAdd: boolean;
        isUpdate: boolean;
        isView: boolean;
        isAddAddress: boolean;
        isAddDocument: boolean;
    };
    actions: {
        onFetching: () => void;
        onInit: () => void;
        onAdd: () => void;
        onUpdate: () => void;
        goUpdate: (id: number) => void;
        goAddPersonal: () => void;
        goAddLegal: () => void;
        goView: (id: number) => void;
        returnInit: () => void;
        onAddAddress: () => void;
        onAddDocument: () => void;
    };
};
export type UseGafpriPagesEntityProps = {
    useAttributes: UseGafpriAttributesEntityReturn;
};
export declare const useGafpriPagesEntity: ({ useAttributes, }: UseGafpriPagesEntityProps) => UseGafpriPagesEntityReturn;
