import { validationInputNumbers } from './index';
import { CATALOG_ORDER_INPUT } from '../constants';

export type GeneralValidationCatalogOrderProps = {
  value: string | number;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  input?: string;
};

export const generalValidationCatalogOrder = ({
  value,
  setValid,
  currentValid,
  required = true,
  input = '',
}: GeneralValidationCatalogOrderProps): boolean => {
  return validationInputNumbers({
    value,
    inputId: `${CATALOG_ORDER_INPUT}${input}`,
    setValid,
    currentValid,
    required,
  });
};
