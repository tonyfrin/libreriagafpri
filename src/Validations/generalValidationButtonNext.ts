import { addClass, removeClass } from '../helpers';
import { DISABLED, BUTTON_NEXT_INPUT } from '../constants';

export type GeneralValidationButtonNextProps = {
  validations: boolean[];
  inputId?: string;
};

export const generalValidationButtonNext = ({
  validations,
  inputId,
}: GeneralValidationButtonNextProps): boolean => {
  const isAllValid = validations.every((validation) => validation);

  if (isAllValid) {
    removeClass(`${BUTTON_NEXT_INPUT}${inputId}`, DISABLED);
  } else {
    addClass(`${BUTTON_NEXT_INPUT}${inputId}`, DISABLED);
  }

  return isAllValid;
};
