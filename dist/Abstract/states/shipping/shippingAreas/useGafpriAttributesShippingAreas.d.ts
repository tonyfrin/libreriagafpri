import { SingleValue } from 'react-select';
type State = {
    name: string;
    nameValid: boolean;
    region: string[];
    regionValid: boolean;
    selectedRegionValue: string;
    regionDefault: {
        value: string;
        label: string;
    };
    regionOptions: {
        value: string;
        label: string;
    }[];
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationName: (value: string) => boolean;
    validationRegion: (value: string[]) => boolean;
    setRegion: (value: string[]) => void;
    validationButtonNext: () => void;
    changeName: (value: string) => void;
    changeRegion: (value: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    setCurrentId: (value: number) => void;
    removeRegion: (region: string) => void;
};
export type UseGafpriAttributesShippingAreasReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesShippingAreas(): UseGafpriAttributesShippingAreasReturn;
export {};
