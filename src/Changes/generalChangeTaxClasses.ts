import { changeInputNumers } from '../helpers';

export type GeneralChangeTaxClassesProps = {
  value: string;
  validation?: (value: number) => boolean;
  setValue: (value: string) => void;
};

export const generalChangeTaxClasses = ({
  value,
  validation,
  setValue,
}: GeneralChangeTaxClassesProps): void => {
  changeInputNumers(value, validation || ((): boolean => true), setValue);
};
