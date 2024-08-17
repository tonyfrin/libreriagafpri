import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangeWebSiteProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeWebSite = ({
  value,
  validation,
  setValue,
}: GeneralChangeWebSiteProps): void => {
  const valueClean = DOMPurify.sanitize(value);
  const host = valueClean.toLocaleLowerCase();

  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputText({
    value: host,
    validation: validation || defaultValidation,
    setValue,
  });
};
