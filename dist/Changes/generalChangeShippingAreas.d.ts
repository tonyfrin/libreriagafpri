export type GeneralChangeShippingAreasProps = {
    value: string;
    validation?: (value: number) => boolean;
    setValue: (value: string) => void;
};
export declare const generalChangeShippingAreas: ({ value, validation, setValue, }: GeneralChangeShippingAreasProps) => void;
