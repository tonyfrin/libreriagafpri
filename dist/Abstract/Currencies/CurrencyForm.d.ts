import type { InputProps } from '../Input';
import type { ContainerButtonPropsExtended } from '../Containers';
import type { ModelFormPropsExtended } from '../Form';
import type { UseCurrenciesReturn } from '../../states';
export type CurrencyFormProps = {
    use: UseCurrenciesReturn;
    formType: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    symbolInputProps?: InputProps;
};
export type CurrencyFormPropsExtended = {
    use?: UseCurrenciesReturn;
    formType?: 'add' | 'update';
    modelFormProps?: ModelFormPropsExtended;
    infoContainerProps?: ContainerButtonPropsExtended;
    nameInputProps?: InputProps;
    symbolInputProps?: InputProps;
};
export declare const CurrencyForm: ({ use, formType, modelFormProps, infoContainerProps, nameInputProps, symbolInputProps, }: CurrencyFormProps) => JSX.Element;
