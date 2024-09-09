export type GeneralChangeShippingTimeDaysProps = {
    value: string;
    validation?: (value: number) => boolean;
    setValue: (value: string) => void;
};
export declare const generalChangeShippingTimeDays: ({ value, validation, setValue, }: GeneralChangeShippingTimeDaysProps) => void;
