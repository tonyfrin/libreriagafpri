type State = {
    name: string;
    nameValid: boolean;
    description: string;
    descriptionValid: boolean;
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationName: (value: string) => boolean;
    validationDescription: (value: string) => boolean;
    validationButtonNext: () => void;
    changeName: (value: string) => void;
    changeDescription: (value: string) => void;
    setCurrentId: (value: number) => void;
};
export type UseGafpriAttributesTaxClassesReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesTaxClasses(): UseGafpriAttributesTaxClassesReturn;
export {};
