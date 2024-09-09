export type GeneralChangeCreditLimitProps = {
    value: string;
    validation?: (value: number) => boolean;
    setValue: (value: string) => void;
};
export declare const generalChangeCreditLimit: ({ value, validation, setValue, }: GeneralChangeCreditLimitProps) => void;
