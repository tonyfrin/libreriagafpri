export type GeneralChangeCreditTimeToPayProps = {
    value: string;
    validation?: (value: number) => boolean;
    setValue: (value: string) => void;
};
export declare const generalChangeCreditTimeToPay: ({ value, validation, setValue, }: GeneralChangeCreditTimeToPayProps) => void;
