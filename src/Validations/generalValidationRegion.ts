import { validationStringArray } from './index';
import { REGION_INPUT } from '../constants';

export type GeneralValidationRegionProps = {
  value: string[];
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationRegion = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationRegionProps): boolean => {
  return validationStringArray({
    value,
    inputId: `${REGION_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
