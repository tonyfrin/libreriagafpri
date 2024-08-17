import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangePostCodeProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangePostCode = ({
  value,
  validation,
  setValue,
}: GeneralChangePostCodeProps): void => {
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
