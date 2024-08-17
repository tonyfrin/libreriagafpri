import { changeInputNumers } from '../helpers';

export type GeneralChangeUndCbmProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeUndCbm = ({
  value,
  validation,
  setValue,
}: GeneralChangeUndCbmProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
