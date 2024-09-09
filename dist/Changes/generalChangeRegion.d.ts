import { SingleValue } from 'react-select';
export type GeneralChangeRegionProps = {
    options: SingleValue<{
        value: string;
        label: string;
    }>;
    validation?: (value: string[]) => boolean;
    region: string[];
    setValue: (value: string[]) => void;
    setSelectedValue: (value: string) => void;
};
export declare const generalChangeRegion: ({ options, validation, region, setValue, setSelectedValue, }: GeneralChangeRegionProps) => void;
