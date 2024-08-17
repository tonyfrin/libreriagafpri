export type PaymentLoginFormProps = {
    validationButtonNext: () => boolean;
    validationAuthorizedLogin: (authorizedLogin: string) => boolean;
    validationAuthorizedPassword: (authorizedPassword: string) => boolean;
    authorizedLogin: string;
    authorizedPassword: string;
    changeAuthorizedLogin: (authorizedLogin: string) => void;
    changeAuthorizedPassword: (authorizedPassword: string) => void;
    inputId: string;
    add: () => void;
};
export declare const PaymentLoginForm: ({ validationButtonNext, validationAuthorizedLogin, validationAuthorizedPassword, authorizedLogin, authorizedPassword, changeAuthorizedLogin, changeAuthorizedPassword, inputId, add, }: PaymentLoginFormProps) => JSX.Element;
