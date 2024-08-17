import { SingleValue } from 'react-select';
import { SelectDefault, changeSelect } from '../helpers';

export type GeneralChangeCityStateCountryProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (valueValid: string) => boolean;
  setDefault: (valueDefault: SelectDefault) => void;
  setValue: (transformedValue: string) => void;
  setIsReset: (valueReset: boolean) => void;
};

export const generalChangeCityStateCountry = ({
  options,
  validation,
  setDefault,
  setValue,
  setIsReset,
}: GeneralChangeCityStateCountryProps): void => {
  setIsReset(false);

  const defaultValidation = (): boolean => {
    return true;
  };

  changeSelect({
    newValue: options,
    validation: validation || defaultValidation,
    setDefault,
    setValue,
  });
};
