import { changeInputNumers } from '../helpers';

export type GeneralChangeShippingAreasProps = {
  value: string;
  validation?: (value: number) => boolean;
  setValue: (value: string) => void;
};

export const generalChangeShippingAreas = ({
  value,
  validation,
  setValue,
}: GeneralChangeShippingAreasProps): void => {
  changeInputNumers(value, validation || ((): boolean => true), setValue);
};
