type State = {
    isFetching: boolean;
    isInit: boolean;
    isSales: boolean;
    isDispatch: boolean;
    isBudget: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    onSales: () => void;
    onDispatch: () => void;
    onBudget: () => void;
};
export type UseGafpriPagesSalesModuleReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriPagesSalesModule(): UseGafpriPagesSalesModuleReturn;
export {};
