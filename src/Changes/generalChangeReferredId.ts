export type GeneralChangeReferredIdProps = {
  value: number;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: number) => void;
};

export const generalChangeReferredId = ({
  value,
  validation,
  setValue,
}: GeneralChangeReferredIdProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  const newValidations = validation || defaultValidation;

  const valid = newValidations(value);
  if (valid) {
    setValue(value);
  }
};
