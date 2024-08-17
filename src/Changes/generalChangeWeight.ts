import { changeInputNumers } from '../helpers';

export type GeneralChangeWeightProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeWeight = ({
  value,
  validation,
  setValue,
}: GeneralChangeWeightProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
