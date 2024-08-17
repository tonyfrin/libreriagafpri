import { SingleValue } from 'react-select';
import { changeSelect, SelectDefault } from '../helpers';

export type GeneralChangeCurrenciesIdProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (valueValid: string) => boolean;
  setDefault: (valueDefault: SelectDefault) => void;
  setValue: (transformedValue: number) => void;
};

export const generalChangeCurrenciesId = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChangeCurrenciesIdProps): void => {
  const value = options ? parseInt(options.value, 10) : 0;
  const label = options?.label || '';
  const newOptions = { value, label };

  const defaultValidation = (): boolean => {
    return true;
  };

  changeSelect({
    newValue: newOptions,
    validation: validation || defaultValidation,
    setDefault,
    setValue,
  });
};
