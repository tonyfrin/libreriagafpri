import { changeInputNumers } from '../helpers';

export type GeneralChangeCreditLimitProps = {
  value: string;
  validation?: (value: number) => boolean;
  setValue: (value: string) => void;
};

export const generalChangeCreditLimit = ({
  value,
  validation,
  setValue,
}: GeneralChangeCreditLimitProps): void => {
  changeInputNumers(value, validation || ((): boolean => true), setValue);
};
