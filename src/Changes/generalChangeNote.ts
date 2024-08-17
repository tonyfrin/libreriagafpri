import DOMPurify from 'dompurify';
import { changeInputText } from '../helpers';

export type GeneralChangeNoteProps = {
  value: string;
  setValue: (transformedValue: string) => void;
  validation?: (valueValid: string) => boolean;
};

export const generalChangeNote = ({
  value,
  setValue,
  validation,
}: GeneralChangeNoteProps): void => {
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
