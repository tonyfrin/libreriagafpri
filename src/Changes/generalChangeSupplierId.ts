export type GeneralChangeSupplierIdProps = {
  value: number;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: number) => void;
};

export const generalChangeSupplierId = ({
  value,
  validation,
  setValue,
}: GeneralChangeSupplierIdProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  const newValidations = validation || defaultValidation;

  const valid = newValidations(value);
  if (valid) {
    setValue(value);
  }
};
