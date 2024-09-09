export type GeneralChangeRateProps = {
    value: string;
    validation?: (value: number) => boolean;
    setValue: (value: string) => void;
};
export declare const generalChangeRate: ({ value, validation, setValue, }: GeneralChangeRateProps) => void;
