export type BankHeaderProps = {
    error: string[] | null;
    name: string;
    bankName: string;
    account: string;
    balance: string;
};
export declare const BankHeader: ({ error, name, bankName, account, balance, }: BankHeaderProps) => JSX.Element;
