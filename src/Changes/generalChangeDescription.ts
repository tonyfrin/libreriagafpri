import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangeDescriptionProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeDescription = ({
  value,
  validation,
  setValue,
}: GeneralChangeDescriptionProps): void => {
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
