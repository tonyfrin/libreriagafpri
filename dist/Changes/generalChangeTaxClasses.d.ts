export type GeneralChangeTaxClassesProps = {
    value: string;
    validation?: (value: number) => boolean;
    setValue: (value: string) => void;
};
export declare const generalChangeTaxClasses: ({ value, validation, setValue, }: GeneralChangeTaxClassesProps) => void;
