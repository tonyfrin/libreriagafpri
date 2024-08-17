import { changeInputNumers } from '../helpers';

export type GeneralChangeOfferPriceProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeOfferPrice = ({
  value,
  validation,
  setValue,
}: GeneralChangeOfferPriceProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
