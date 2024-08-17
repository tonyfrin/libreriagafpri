type State = {
    isFetching: boolean;
    isInit: boolean;
    isTransfer: boolean;
};
type Actions = {
    onFetching: () => void;
    onInit: () => void;
    onTransfer: () => void;
};
export type UseGafpriSubPagesBankTypeReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriSubPagesBankType(): UseGafpriSubPagesBankTypeReturn;
export {};
