import { SingleValue } from 'react-select';
import { SelectDefault } from '../../../../helpers';
type State = {
    shippingAreasId: string;
    shippingAreasIdValid: boolean;
    name: string;
    nameValid: boolean;
    description: string;
    descriptionValid: boolean;
    cost: string;
    costValid: boolean;
    type: string;
    typeValid: boolean;
    typeDefault: SelectDefault;
    typeOptions: SelectDefault[];
    status: string;
    statusValid: boolean;
    statusDefault: SelectDefault;
    statusOptions: SelectDefault[];
    roles: number[];
    workDaysHours: Record<number, string>;
    preparationTime: string;
    pickupTime: string;
    deliveryTime: string;
    typeStart: string;
    valueStart: string;
    conditional: boolean;
    typeConditional?: string;
    typeConditionalOptions: {
        label: string;
        value: string;
    }[];
    valueConditional?: string;
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationShippingAreasId: (value: number) => boolean;
    validationName: (value: string) => boolean;
    validationDescription: (value: string) => boolean;
    validationCost: (value: number) => boolean;
    validationType: (value: string) => boolean;
    validationStatus: (value: string) => boolean;
    validationButtonNext: () => void;
    changeShippingAreasId: (value: string) => void;
    changeName: (value: string) => void;
    changeDescription: (value: string) => void;
    changeCost: (value: string) => void;
    changeType: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeStatus: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    setRoles: (value: number[]) => void;
    setWorkDaysHours: (value: Record<number, string>) => void;
    setPreparationTime: (value: string) => void;
    setPickupTime: (value: string) => void;
    setDeliveryTime: (value: string) => void;
    setTypeStart: (value: string) => void;
    setValueStart: (value: string) => void;
    changeConditional: (value: boolean) => void;
    changeTypeConditional: (option: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeValueConditional: (option: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    setCurrentId: (value: number) => void;
};
export type UseGafpriAttributesShippingMethodsReturn = {
    states: State;
    actions: Actions;
};
export declare function useGafpriAttributesShippingMethods(): UseGafpriAttributesShippingMethodsReturn;
export {};
