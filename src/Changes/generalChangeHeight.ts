import { changeInputNumers } from '../helpers';

export type GeneralChangeHeightProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeHeight = ({
  value,
  validation,
  setValue,
}: GeneralChangeHeightProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
