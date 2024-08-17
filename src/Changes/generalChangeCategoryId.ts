export type GeneralChangeCategoryIdProps = {
  value: number | null;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: number | null) => void;
};

export const generalChangeCategoryId = ({
  value,
  validation,
  setValue,
}: GeneralChangeCategoryIdProps): void => {
  if (value === null) {
    setValue(null);
    return;
  }

  const defaultValidation = (): boolean => {
    return true;
  };

  const newValidations = validation || defaultValidation;

  const valid = newValidations(value);
  if (valid) {
    setValue(value);
  }
};
