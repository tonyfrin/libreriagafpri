import { SingleValue } from 'react-select';
import { changeSelect, SelectDefault } from '../helpers';

export type GeneralChangeTaxesProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (valueValid: string) => boolean;
  setDefault: (valueDefault: SelectDefault) => void;
  setValue: (transformedValue: boolean) => void;
};

export const generalChangeTaxes = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChangeTaxesProps): void => {
  const value = options && options.value === 'true';
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
