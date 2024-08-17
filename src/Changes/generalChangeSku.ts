import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangeSkuProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeSku = ({
  value,
  validation,
  setValue,
}: GeneralChangeSkuProps): void => {
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
