import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangeUserNameProps = {
  value: string;
  validation?: (valueValid: string) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeUserName = ({
  value,
  validation,
  setValue,
}: GeneralChangeUserNameProps): void => {
  const valueClean = DOMPurify.sanitize(value);
  const userName = valueClean.toLowerCase();

  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputText({
    value: userName,
    validation: validation || defaultValidation,
    setValue,
  });
};
