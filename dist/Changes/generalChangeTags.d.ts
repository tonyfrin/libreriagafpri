export type GeneralChangeTagsProps = {
    value: string;
    validation?: (valueValid: string[]) => boolean;
    tags: string[];
    setValue: (transformedValue: string[]) => void;
    setSelectedValue: (value: string) => void;
};
export declare const generalChangeTags: ({ value, validation, tags, setValue, setSelectedValue, }: GeneralChangeTagsProps) => void;
