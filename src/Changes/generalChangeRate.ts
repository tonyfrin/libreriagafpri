import { changeInputNumers } from '../helpers';

export type GeneralChangeRateProps = {
  value: string;
  validation?: (value: number) => boolean;
  setValue: (value: string) => void;
};

export const generalChangeRate = ({
  value,
  validation,
  setValue,
}: GeneralChangeRateProps): void => {
  changeInputNumers(value, validation || ((): boolean => true), setValue);
};
