import { changeInputNumers } from '../helpers';

export type GeneralChangeShippingTimeDaysProps = {
  value: string;
  validation?: (value: number) => boolean;
  setValue: (value: string) => void;
};

export const generalChangeShippingTimeDays = ({
  value,
  validation,
  setValue,
}: GeneralChangeShippingTimeDaysProps): void => {
  changeInputNumers(value, validation || ((): boolean => true), setValue);
};
