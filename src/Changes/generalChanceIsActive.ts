import { SingleValue } from 'react-select';
import { changeSelect, SelectDefault } from '../helpers';

export type GeneralChanceIsActiveProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (valueValid: string) => boolean;
  setDefault: (valueDefault: SelectDefault) => void;
  setValue: (transformedValue: boolean) => void;
};

export const generalChanceIsActive = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChanceIsActiveProps): void => {
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
