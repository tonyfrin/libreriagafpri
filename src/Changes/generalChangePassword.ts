import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangePasswordProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangePassword = ({
  value,
  validation,
  setValue,
}: GeneralChangePasswordProps): void => {
  const valueClean = DOMPurify.sanitize(value);

  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputText({
    value: valueClean,
    validation: validation || defaultValidation,
    setValue,
  });
};
