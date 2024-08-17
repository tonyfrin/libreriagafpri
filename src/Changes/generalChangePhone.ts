import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangePhoneProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangePhone = ({
  value,
  validation,
  setValue,
}: GeneralChangePhoneProps): void => {
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
