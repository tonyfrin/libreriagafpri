import { changeInputNumers } from '../helpers';

export type GeneralChangeCreditTimeToPayProps = {
  value: string;
  validation?: (value: number) => boolean;
  setValue: (value: string) => void;
};

export const generalChangeCreditTimeToPay = ({
  value,
  validation,
  setValue,
}: GeneralChangeCreditTimeToPayProps): void => {
  changeInputNumers(value, validation || ((): boolean => true), setValue);
};
