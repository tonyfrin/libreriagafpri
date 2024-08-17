import type { UseGafpriAttributesProjectsReturn } from './useGafpriAttributesProjects';
type State = {
    isFetching: boolean;
    isInit: boolean;
    isAdd: boolean;
    isUpdate: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    returnInit: () => void;
    onAdd: () => void;
    goAdd: () => void;
    onUpdate: () => void;
    goUpdate: (id: number) => void;
};
export type UseGafpriPagesProjectsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriPagesProjectsProps = {
    attributes: UseGafpriAttributesProjectsReturn;
};
export declare function useGafpriPagesProjects({ attributes, }: UseGafpriPagesProjectsProps): UseGafpriPagesProjectsReturn;
export {};
