import { validationInputNumbers } from './index';
import { SALES_PRICE_INPUT } from '../constants';

export type GeneralValidationSalesPriceProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationSalesPrice = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationSalesPriceProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${SALES_PRICE_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
