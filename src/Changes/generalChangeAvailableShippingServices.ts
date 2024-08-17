import { SingleValue } from 'react-select';
import { SelectDefault, changeSelect } from '../helpers';

export type GeneralChangeAvailableShippingServicesProps = {
  newValue: SingleValue<{ value: string; label: string }>;
  validation?: (value: string) => boolean;
  setDefault: (value: SelectDefault) => void;
  setValue: (value: string) => void;
};

export const generalChangeAvailableShippingServices = ({
  newValue,
  validation,
  setDefault,
  setValue,
}: GeneralChangeAvailableShippingServicesProps): void => {
  changeSelect({
    newValue,
    validation: validation || ((): boolean => true),
    setDefault,
    setValue,
  });
};
