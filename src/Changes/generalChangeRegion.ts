import { SingleValue } from 'react-select';
import { changeMultipleArrayStringSelect } from '../helpers';

export type GeneralChangeRegionProps = {
  options: SingleValue<{ value: string; label: string }>;
  validation?: (value: string[]) => boolean;
  region: string[];
  setValue: (value: string[]) => void;
  setSelectedValue: (value: string) => void;
};

export const generalChangeRegion = ({
  options,
  validation,
  region,
  setValue,
  setSelectedValue,
}: GeneralChangeRegionProps): void => {
  changeMultipleArrayStringSelect({
    newValue: options,
    selectedOptions: region,
    validation: validation || ((): boolean => true),
    setValue,
    setSelectedValue,
  });
};
