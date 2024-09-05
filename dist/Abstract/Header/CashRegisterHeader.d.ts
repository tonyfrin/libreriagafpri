export type CashRegisterHeaderProps = {
    error: string[] | null;
    crName: string;
    cashRegisterPostId: number;
    dateOpen: string;
    author: string;
};
export declare const CashRegisterHeader: ({ error, crName, cashRegisterPostId, dateOpen, author, }: CashRegisterHeaderProps) => JSX.Element;
