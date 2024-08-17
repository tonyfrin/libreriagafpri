import { changeInputNumers } from '../helpers';

export type GeneralChangeSalesPriceProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeSalesPrice = ({
  value,
  validation,
  setValue,
}: GeneralChangeSalesPriceProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
