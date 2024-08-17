import DOMPurify from 'dompurify';
import { changeInputText, toTitleCase } from '../helpers';

export type GeneralChangeNameProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeName = ({
  value,
  validation,
  setValue,
}: GeneralChangeNameProps): string => {
  const valueClean = DOMPurify.sanitize(value);
  const name = toTitleCase(valueClean);

  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputText({
    value: name,
    validation: validation || defaultValidation,
    setValue,
  });

  return name;
};
