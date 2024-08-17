import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangeCurrenciesSymbolProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeCurrenciesSymbol = ({
  value,
  validation,
  setValue,
}: GeneralChangeCurrenciesSymbolProps): void => {
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
