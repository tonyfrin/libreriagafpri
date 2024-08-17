import DOMPurify from 'dompurify';
import { changeInputText, toTitleCase } from '../helpers';

export type GeneralChangeAddressProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeAddress = ({
  value,
  validation,
  setValue,
}: GeneralChangeAddressProps): void => {
  const valueClean = DOMPurify.sanitize(value);
  const newAddress = toTitleCase(valueClean);

  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputText({
    value: newAddress,
    validation: validation || defaultValidation,
    setValue,
  });
};
