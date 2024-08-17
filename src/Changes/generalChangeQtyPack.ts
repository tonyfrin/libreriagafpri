import { changeInputNumers } from '../helpers';

export type GeneralChangeQtyPackProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeQtyPack = ({
  value,
  validation,
  setValue,
}: GeneralChangeQtyPackProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeInputNumers(value, validation || defaultValidation, setValue);
};
