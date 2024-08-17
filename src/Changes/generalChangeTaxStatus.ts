import { SingleValue } from 'react-select';
import { SelectDefault, changeSelect } from '../helpers';

export type GeneralChangeTaxStatusProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (value: string) => boolean;
  setDefault: (value: SelectDefault) => void;
  setValue: (value: string) => void;
};

export const generalChangeTaxStatus = ({
  options,
  validation,
  setDefault,
  setValue,
}: GeneralChangeTaxStatusProps): void => {
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
