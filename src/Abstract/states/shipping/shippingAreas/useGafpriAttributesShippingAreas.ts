import { useState } from 'react';
import {
  generalValidationButtonNext,
  generalValidationName,
} from '../../../../Validations';
import { generalChangeName } from '../../../../Changes';

type State = {
  name: string;
  nameValid: boolean;

  postalCodes: string[];
  cities: string[];
  statesCountries: string[];
  countries: string[];

  currentId: number;
};

type Actions = {
  infoReset: () => void;

  validationName: (value: string) => boolean;

  changeName: (value: string) => void;

  setPostalCodes: (value: string[]) => void;
  pushPostalCodes: (value: string) => void;
  removePostalCode: (value: string) => void;
  changePostalCode: (
    postalCode: string,
    city: string,
    stateCountry: string,
    country: string
  ) => void;

  setCities: (value: string[]) => void;
  pushCities: (value: string) => void;
  removeCities: (value: string) => void;
  changeCities: (city: string, stateCountry: string, country: string) => void;

  setStatesCountries: (value: string[]) => void;
  pushStatesCountries: (value: string) => void;
  removeStatesCountries: (value: string) => void;
  changeStateCountry: (stateCountry: string, country: string) => void;

  setCountries: (value: string[]) => void;
  pushCountries: (value: string) => void;
  removeCountries: (value: string) => void;
  changeCountry: (country: string) => void;

  validationButtonNext: () => boolean;

  setCurrentId: (value: number) => void;
};

export type UseGafpriAttributesShippingAreasReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesShippingAreas(): UseGafpriAttributesShippingAreasReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [postalCodes, setPostalCodes] = useState<string[]>([]);
  const pushPostalCodes = (value: string): void => {
    setPostalCodes((prevValue) => {
      if (!prevValue.includes(value)) {
        return [...prevValue, value];
      }
      return prevValue;
    });
  };

  const removePostalCode = (value: string): void => {
    setPostalCodes(postalCodes.filter((item) => item !== value));
  };

  const [cities, setCities] = useState<string[]>([]);
  const pushCities = (value: string): void => {
    setCities((prevValue) => {
      if (!prevValue.includes(value)) {
        return [...prevValue, value];
      }
      return prevValue;
    });
  };

  const removeCities = (value: string): void => {
    setCities(cities.filter((item) => item !== value));
  };

  const [statesCountries, setStatesCountries] = useState<string[]>([]);
  const pushStatesCountries = (value: string): void => {
    setStatesCountries((prevValue) => {
      if (!prevValue.includes(value)) {
        return [...prevValue, value];
      }
      return prevValue;
    });
  };

  const removeStatesCountries = (value: string): void => {
    setStatesCountries(statesCountries.filter((item) => item !== value));
  };

  const [countries, setCountries] = useState<string[]>([]);
  const pushCountries = (value: string): void => {
    setCountries((prevValue) => {
      if (!prevValue.includes(value)) {
        return [...prevValue, value];
      }
      return prevValue;
    });
  };

  const removeCountries = (value: string): void => {
    setCountries(countries.filter((item) => item !== value));
  };

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setName('');
    setNameValid(false);
    setPostalCodes([]);
    setCities([]);
    setStatesCountries([]);
    setCountries([]);
    setCurrentId(0);
  };

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationButtonNext = (): boolean => {
    const valid = generalValidationButtonNext({
      validations: [
        nameValid &&
          postalCodes.length > 0 &&
          cities.length > 0 &&
          statesCountries.length > 0 &&
          countries.length > 0,
      ],
      inputId: 'shipping-form',
    });
    return valid;
  };

  // Funciones de cambios
  const changeName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
  };

  const changePostalCode = (
    postalCode: string,
    city: string,
    stateCountry: string,
    country: string
  ): void => {
    pushPostalCodes(postalCode);
    pushCities(city);
    pushStatesCountries(stateCountry);
    pushCountries(country);
  };

  const changeCities = (
    city: string,
    stateCountry: string,
    country: string
  ): void => {
    pushPostalCodes('*');
    pushCities(city);
    pushStatesCountries(stateCountry);
    pushCountries(country);
  };

  const changeStateCountry = (stateCountry: string, country: string): void => {
    pushPostalCodes('*');
    pushCities('*');
    pushStatesCountries(stateCountry);
    pushCountries(country);
  };

  const changeCountry = (country: string): void => {
    pushPostalCodes('*');
    pushCities('*');
    pushStatesCountries('*');
    pushCountries(country);
  };

  /**
   * Export
   *
   *
   */
  const states = {
    name,
    nameValid,

    postalCodes,
    cities,
    statesCountries,
    countries,

    currentId,
  };

  const actions = {
    infoReset,
    validationName,
    validationButtonNext,
    changeName,

    setPostalCodes,
    pushPostalCodes,
    removePostalCode,
    changePostalCode,

    setCities,
    pushCities,
    removeCities,
    changeCities,

    setStatesCountries,
    pushStatesCountries,
    removeStatesCountries,
    changeStateCountry,

    setCountries,
    pushCountries,
    removeCountries,
    changeCountry,

    setCurrentId,
  };

  return {
    states,
    actions,
  };
}
