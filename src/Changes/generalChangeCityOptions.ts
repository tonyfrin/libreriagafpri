import { SelectDefault } from '../helpers';
import { Cities, CITY_DEFAULT } from '../constants';

export type GeneralChangeCityOptionsProps = {
  country: string;
  state: string;
  setCityDefault: (valueDefault: SelectDefault) => void;
  setCity: (transformedValue: string) => void;
  setCityOptions: (valueOptions: SelectDefault[]) => void;
  isReset: boolean;
};

export const generalChangeCityOptions = ({
  country,
  state,
  setCityDefault,
  setCity,
  setCityOptions,
  isReset,
}: GeneralChangeCityOptionsProps): void => {
  const newValueCity: SelectDefault[] = [];
  if (Cities[0][country]) {
    if (Array.isArray(Cities[0][country][0][state])) {
      Cities[0][country][0][state].forEach((item) => {
        Object.keys(item).forEach((key) => {
          newValueCity.push({ value: item[key], label: item[key] });
        });
      });
    }
  }
  if (isReset) {
    setCityDefault(CITY_DEFAULT);
    setCity(CITY_DEFAULT.value);
  } else {
    setCityDefault({ label: 'Elija la ciudad', value: '' });
    setCity('');
  }
  setCityOptions(newValueCity);
};
