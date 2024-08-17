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
    shippingTimeDays: string;
    shippingTimeDaysValid: boolean;
    availableShippingServices: string;
    availableShippingServicesValid: boolean;
    availableShippingServicesDefault: SelectDefault;
    availableShippingServicesOptions: SelectDefault[];
    taxStatus: string;
    taxStatusValid: boolean;
    taxStatusDefault: SelectDefault;
    taxStatusOptions: SelectDefault[];
    taxClass: string;
    taxClassValid: boolean;
    taxClassDefault: SelectDefault;
    taxClassOptions: SelectDefault[];
    status: string;
    statusValid: boolean;
    statusDefault: SelectDefault;
    statusOptions: SelectDefault[];
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationShippingAreasId: (value: number) => boolean;
    validationName: (value: string) => boolean;
    validationDescription: (value: string) => boolean;
    validationCost: (value: number) => boolean;
    validationType: (value: string) => boolean;
    validationShippingTimeDays: (value: number) => boolean;
    validationAvailableShippingServices: (value: string) => boolean;
    validationTaxStatus: (value: string) => boolean;
    validationTaxClass: (value: string) => boolean;
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
    changeShippingTimeDays: (value: string) => void;
    changeAvailableShippingServices: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeTaxStatus: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeTaxClass: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    changeStatus: (options: SingleValue<{
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
