import { changeInputNumers } from '../helpers';

export type GeneralChangeWidthProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeWidth = ({
  value,
  validation,
  setValue,
}: GeneralChangeWidthProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
