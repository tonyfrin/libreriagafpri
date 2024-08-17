import { changeInputNumers } from '../helpers';

export type GeneralChangeCatalogOrderProps = {
  value: string;
  validation?: (valueValid: number) => boolean;
  setValue: (transformedValue: string) => void;
};

export const generalChangeCatalogOrder = ({
  value,
  validation,
  setValue,
}: GeneralChangeCatalogOrderProps): void => {
  changeInputNumers(value, validation || ((): boolean => true), setValue);
};
