import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangeEmailProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeEmail = ({
  value,
  validation,
  setValue,
}: GeneralChangeEmailProps): void => {
  const valueClean = DOMPurify.sanitize(value);
  const email = valueClean.toLowerCase();

  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputText({
    value: email,
    validation: validation || defaultValidation,
    setValue,
  });
};
