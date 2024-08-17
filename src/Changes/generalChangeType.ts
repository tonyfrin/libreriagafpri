import { SingleValue } from 'react-select';
import { changeSelect, SelectDefault } from '../helpers';

export type GeneralChangeTypeProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (valueValid: string) => boolean;
  setDefault: (valueDefault: SelectDefault) => void;
  setValue: (transformedValue: string) => void;
};

export const generalChangeType = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChangeTypeProps): void => {
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
