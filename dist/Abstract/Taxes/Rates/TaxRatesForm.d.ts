import { ContainerButtonPropsExtended } from '../../Containers';
import { ModelFormPropsExtended } from '../../Form';
export { Countries, StatesCountries } from '../../../constants';
import type { UseGafpriTaxRatesReturn } from '../../../states';
export type TaxRatesFormProps = {
    use: UseGafpriTaxRatesReturn;
    formType: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
};
export type TaxRatesFormPropsExtended = {
    use?: UseGafpriTaxRatesReturn;
    formType?: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
};
export declare const TaxRatesForm: ({ use, formType, modelFormProps, infoContainerProps, }: TaxRatesFormProps) => JSX.Element;
