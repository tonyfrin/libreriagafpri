import { ErrorResponseProps, CustomErrorResponseProps } from '../helpers';
export type newErrorProps = {
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps;
    functionAction: () => void;
};
type State = {
    error: string[];
};
type Actions = {
    newError: ({ newErrorValue, functionAction }: newErrorProps) => void;
    resetError: () => void;
    changeError: (value: string[]) => void;
};
export type UseErrorReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriError(): UseErrorReturn;
export {};
