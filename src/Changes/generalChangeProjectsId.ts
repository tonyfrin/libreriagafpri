import { SingleValue } from 'react-select';
import { changeSelect, SelectDefault } from '../helpers';

export type GeneralChangeProjectsIdProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (valueValid: string) => boolean;
  setDefault: (valueDefault: SelectDefault) => void;
  setValue: (transformedValue: string) => void;
};

export const generalChangeProjectsId = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChangeProjectsIdProps): void => {
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
