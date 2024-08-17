import { changeInputNumers } from '../helpers';

export type GeneralChangeLengthProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeLength = ({
  value,
  validation,
  setValue,
}: GeneralChangeLengthProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
