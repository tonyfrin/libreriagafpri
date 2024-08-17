import DOMPurify from 'dompurify';
import { changeInputText, toTitleCase } from '../helpers';

export type GeneralChangeLastNameProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeLastName = ({
  value,
  validation,
  setValue,
}: GeneralChangeLastNameProps): void => {
  const valueClean = DOMPurify.sanitize(value);
  const lastName = toTitleCase(valueClean);

  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputText({
    value: lastName,
    validation: validation || defaultValidation,
    setValue,
  });
};
