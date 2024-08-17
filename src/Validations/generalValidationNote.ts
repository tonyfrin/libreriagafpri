import { validationInputDescription } from './index';
import { NOTE_INPUT } from '../constants';

export type GeneralValidationNoteProps = {
  value: string;
  setValid: (value: boolean) => void;
  currentValid: boolean;
  required?: boolean;
  inputId?: string;
};

export const generalValidationNote = ({
  value,
  setValid,
  currentValid,
  required = false,
  inputId = '',
}: GeneralValidationNoteProps): boolean => {
  return validationInputDescription({
    value,
    inputId: `${NOTE_INPUT}${inputId}`,
    setValid,
    currentValid,
    required,
  });
};
