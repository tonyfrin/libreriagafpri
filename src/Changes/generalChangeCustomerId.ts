export type GeneralChangeCustomerIdProps = {
  value: number;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: number) => void;
};

export const generalChangeCustomerId = ({
  value,
  validation,
  setValue,
}: GeneralChangeCustomerIdProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  const newValidations = validation || defaultValidation;

  const valid = newValidations(value);
  if (valid) {
    setValue(value);
  }
};
