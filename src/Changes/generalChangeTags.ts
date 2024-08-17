import { changeMultipleArrayStringInput } from '../helpers';

export type GeneralChangeTagsProps = {
  value: string;
  validation?: (valueValid: string[]) => boolean;
  tags: string[];
  setValue: (transformedValue: string[]) => void;
  setSelectedValue: (value: string) => void;
};

export const generalChangeTags = ({
  value,
  validation,
  tags,
  setValue,
  setSelectedValue,
}: GeneralChangeTagsProps): void => {
  const defaultValidation = (): boolean => {
    return true;
  };

  changeMultipleArrayStringInput({
    newValue: value,
    selectedOptions: tags,
    validation: validation || defaultValidation,
    setValue,
    setSelectedValue,
  });
};
