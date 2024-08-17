import { changeInputNumers } from '../helpers';

export type GeneralChangeCostProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeCost = ({
  value,
  validation,
  setValue,
}: GeneralChangeCostProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
