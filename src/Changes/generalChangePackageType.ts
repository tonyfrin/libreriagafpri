import { SingleValue } from 'react-select';
import { changeSelect, SelectDefault } from '../helpers';

export type GeneralChangePackageTypeProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (value: string) => boolean;
  setDefault: (value: SelectDefault) => void;
  setValue: (value: string) => void;
};

export const generalChangePackageType = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChangePackageTypeProps): void => {
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
