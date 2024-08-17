import DOMPurify from 'dompurify';
import { changeInputText, toTitleCase } from '../helpers';

export type GeneralChangeBankNameProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeBankName = ({
  value,
  validation,
  setValue,
}: GeneralChangeBankNameProps): string => {
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
