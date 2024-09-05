import { SingleValue } from 'react-select';
import { UseSitesReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
import { UseGafpriAttributesCashRegisterTypeUserReturn } from './cashRegisterTypeUser';
type State = {
    name: string;
    nameValid: boolean;
    site: string;
    siteValid: boolean;
    siteDefault: SelectDefault;
    siteOptions: SelectDefault[];
    currentId: number;
};
type Actions = {
    infoReset: () => void;
    validationName: (value: string) => boolean;
    validationSite: (value: string) => boolean;
    validationButtonNext: () => void;
    changeName: (value: string) => void;
    changeSite: (options: SingleValue<{
        value: string;
        label: string;
    }>) => void;
    setCurrentId: (id: number) => void;
};
export type UseGafpriAttributesCashRegisterTypeReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriAttributesCashRegisterTypeProps = {
    useCrtu: UseGafpriAttributesCashRegisterTypeUserReturn;
    useSites: UseSitesReturn;
};
export declare function useGafpriAttributesCashRegisterType({ useCrtu, useSites, }: UseGafpriAttributesCashRegisterTypeProps): UseGafpriAttributesCashRegisterTypeReturn;
export {};
