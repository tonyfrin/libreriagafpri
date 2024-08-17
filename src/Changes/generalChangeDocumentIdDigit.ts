import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangeDocumentIdDigitProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeDocumentIdDigit = ({
  value,
  validation,
  setValue,
}: GeneralChangeDocumentIdDigitProps): void => {
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
