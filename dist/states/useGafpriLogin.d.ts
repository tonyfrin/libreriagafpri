type CurrentUserAttributes = {
    id: number;
    role: string;
    name: string;
    lastName: string;
    photo: string;
};
type State = {
    isLogin: boolean;
    userName: string;
    userNameValid: boolean;
    password: string;
    passwordValid: boolean;
    token: string | null;
    currentUser: CurrentUserAttributes | null;
};
type Actions = {
    validationUserName: (value: string) => boolean;
    validationPassword: (value: string) => boolean;
    validationButtonNext: () => void;
    changeUserName: (value: string) => void;
    changePassword: (value: string) => void;
    login: () => Promise<void>;
    logout: () => void;
};
export type UseLoginReturn = {
    states: State;
    actions: Actions;
};
export type LoginAttributes = {
    onFetching: () => void;
    onInit: () => void;
    globalResetInfo: () => void;
};
export declare function useGafpriLogin({ onFetching, onInit, globalResetInfo, }: LoginAttributes): UseLoginReturn;
export {};
