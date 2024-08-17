import { SelectDefault } from '../helpers';
import { StatesCountries, STATE_COUNTRY_DEFAULT } from '../constants';

export type GeneralChangeStateCountryOptionsProps = {
  country: string;
  setStateCountryDefault: (valueDefault: SelectDefault) => void;
  setStateCountry: (transformedValue: string) => void;
  setStateCountryOptions: (valueOptions: SelectDefault[]) => void;
  isReset: boolean;
};

export const generalChangeStateCountryOptions = ({
  country,
  setStateCountryDefault,
  setStateCountry,
  setStateCountryOptions,
  isReset,
}: GeneralChangeStateCountryOptionsProps): void => {
  const newValueState: SelectDefault[] = [];
  if (country && StatesCountries[0][country]?.length > 0) {
    StatesCountries[0][country].forEach((item) => {
      Object.keys(item).forEach((key) => {
        newValueState.push({ value: key, label: item[key] });
      });
    });
  }
  if (isReset) {
    setStateCountryDefault(STATE_COUNTRY_DEFAULT);
    setStateCountry(STATE_COUNTRY_DEFAULT.value);
  } else {
    setStateCountryDefault({ label: 'Elija el Estado', value: '' });
    setStateCountry('');
  }
  setStateCountryOptions(newValueState);
};
