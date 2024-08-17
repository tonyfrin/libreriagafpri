import { TAGS_INPUT } from '../constants';
import { validationStringArray } from './index';

export type GeneralValidationTagsProps = {
  value: string[];
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationTags = ({
  value,
  setValid,
  currentValid,
  required = true,
  inputId = '',
}: GeneralValidationTagsProps): boolean => {
  return validationStringArray({
    value,
    inputId: `${TAGS_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
