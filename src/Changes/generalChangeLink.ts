import DOMPurify from 'dompurify';
import { changeInputText, generatePermanentLink } from '../helpers';

export type GeneralChangeLinkProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeLink = ({
  value,
  validation,
  setValue,
}: GeneralChangeLinkProps): void => {
  const valueClean = DOMPurify.sanitize(value);
  const link = generatePermanentLink(valueClean);

  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputText({
    value: link,
    validation: validation || defaultValidation,
    setValue,
  });
};
