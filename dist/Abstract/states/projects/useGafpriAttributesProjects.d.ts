type State = {
    name: string;
    nameValid: boolean;
    description: string;
    descriptionValid: boolean;
    currentId: number;
};
type Actions = {
    changeName: (value: string) => void;
    validationName: (value: string) => void;
    changeDescription: (value: string) => void;
    validationDescription: (value: string) => void;
    validationButtonNext: () => void;
    infoReset: () => void;
    setCurrentId: (value: number) => void;
};
export type UseGafpriAttributesProjectsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesProjects(): UseGafpriAttributesProjectsReturn;
export {};
