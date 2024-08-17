import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import type { SelectDefault } from '../../../../helpers';
import {
  generalChangeCityStateCountry,
  generalChangeCityOptions,
  generalChangeStateCountryOptions,
  generalChangePostCode,
  generalChangeTaxClasses,
  generalChangeRate,
} from '../../../../Changes';
import {
  generalValidationSelectCity,
  generalValidationSelectStateCountry,
  generalValidationSelectCountry,
  generalValidationPostCode,
  generalValidationButtonNext,
  generalValidationTaxClassesId,
  generalValidationRate,
} from '../../../../Validations';
import {
  CITY_DEFAULT,
  STATE_COUNTRY_DEFAULT,
  COUNTRY_DEFAULT,
  Countries,
  TAX_RATES_ROUTE,
} from '../../../../constants';

type State = {
  taxClassesId: string;
  taxClassesIdValid: boolean;

  rate: string;
  rateValid: boolean;

  city: string;
  cityValid: boolean;
  cityDefault: SelectDefault;
  cityOptions: SelectDefault[];

  state: string;
  stateCountryValid: boolean;
  stateCountryDefault: SelectDefault;
  stateCountryOptions: SelectDefault[];

  country: string;
  countryValid: boolean;
  countryDefault: SelectDefault;
  countryOptions: SelectDefault[];

  postCode: string;
  postCodeValid: boolean;

  currentId: number;
};

type Actions = {
  infoReset: () => void;

  validationTaxClassesId: (value: number) => boolean;
  validationRate: (value: number) => boolean;
  validationCity: (value: string) => boolean;
  validationStateCountry: (value: string) => boolean;
  validationCountry: (value: string) => boolean;
  validationPostCode: (value: string) => boolean;
  validationButtonNext: () => void;

  changeTaxClasses: (value: string) => void;
  changeRate: (value: string) => void;
  changeCity: (options: SingleValue<{ value: string; label: string }>) => void;
  changeCityOptions: () => void;
  changeStateCountry: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changeStateCountryOptions: () => void;
  changeCountry: (
    options: SingleValue<{ value: string; label: string }>
  ) => void;
  changePostCode: (newPostCode: string) => void;

  setStateCountry: (value: string) => void;
  setCountry: (value: string) => void;
  setCurrentId: (value: number) => void;
};

export type UseGafpriAttributesTaxRatesReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesTaxRates(): UseGafpriAttributesTaxRatesReturn {
  const [isReset, setIsReset] = useState(true);

  const [taxClassesId, setTaxClassId] = useState('');
  const [taxClassesIdValid, setTaxClassIdValid] = useState(false);

  const [rate, setRate] = useState('');
  const [rateValid, setRateValid] = useState(false);

  const [city, setCity] = useState(CITY_DEFAULT.value);
  const [cityValid, setCityValid] = useState(true);
  const [cityDefault, setCityDefault] = useState<SelectDefault>(CITY_DEFAULT);
  const [cityOptions, setCityOptions] = useState<SelectDefault[]>([]);

  const [state, setStateCountry] = useState(STATE_COUNTRY_DEFAULT.value);
  const [stateCountryValid, setStateCountryValid] = useState(true);
  const [stateCountryDefault, setStateCountryDefault] = useState<SelectDefault>(
    STATE_COUNTRY_DEFAULT
  );
  const [stateCountryOptions, setStateCountryOptions] = useState<
    SelectDefault[]
  >([]);

  const [country, setCountry] = useState(COUNTRY_DEFAULT.value);
  const [countryValid, setCountryValid] = useState(true);
  const [countryDefault, setCountryDefault] =
    useState<SelectDefault>(COUNTRY_DEFAULT);
  const countryOptions: SelectDefault[] = [];

  Countries.forEach((item) => {
    Object.keys(item).forEach((key) => {
      countryOptions.push({ value: key, label: item[key] });
    });
  });

  const [postCode, setPostCode] = useState('');
  const [postCodeValid, setPostCodeValid] = useState(true);

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setIsReset(true);
    setTaxClassId('');
    setTaxClassIdValid(false);
    setRate('');
    setRateValid(false);
    setCity(CITY_DEFAULT.value);
    setCityValid(true);
    setCityDefault(CITY_DEFAULT);
    setStateCountry(STATE_COUNTRY_DEFAULT.value);
    setStateCountryValid(true);
    setStateCountryDefault(STATE_COUNTRY_DEFAULT);
    setCountry(COUNTRY_DEFAULT.value);
    setCountryValid(true);
    setCountryDefault(COUNTRY_DEFAULT);
    setPostCode('');
    setPostCodeValid(false);
  };

  // Funciones de Validacion
  const validationTaxClassesId = (value: number): boolean => {
    return generalValidationTaxClassesId({
      value,
      setValid: setTaxClassIdValid,
      currentValid: taxClassesIdValid,
      required: true,
      inputId: TAX_RATES_ROUTE,
    });
  };

  const validationRate = (value: number): boolean => {
    return generalValidationRate({
      value,
      setValid: setRateValid,
      currentValid: rateValid,
      required: true,
      inputId: TAX_RATES_ROUTE,
    });
  };

  const validationCity = (value: string): boolean => {
    return generalValidationSelectCity({
      value,
      setValid: setCityValid,
      currentValid: cityValid,
      inputId: TAX_RATES_ROUTE,
    });
  };

  const validationStateCountry = (value: string): boolean => {
    return generalValidationSelectStateCountry({
      value,
      setValid: setStateCountryValid,
      currentValid: stateCountryValid,
      inputId: TAX_RATES_ROUTE,
    });
  };

  const validationCountry = (value: string): boolean => {
    return generalValidationSelectCountry({
      value,
      setValid: setCountryValid,
      currentValid: countryValid,
      inputId: TAX_RATES_ROUTE,
    });
  };

  const validationPostCode = (value: string): boolean => {
    return generalValidationPostCode({
      value,
      setValid: setPostCodeValid,
      currentValid: postCodeValid,
      required: false,
      inputId: TAX_RATES_ROUTE,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        taxClassesIdValid,
        rateValid,
        cityValid,
        stateCountryValid,
        countryValid,
        postCodeValid,
      ],
      inputId: TAX_RATES_ROUTE,
    });
  };

  // Funciones de cambios

  const changeTaxClasses = (value: string): void => {
    generalChangeTaxClasses({
      value,
      validation: validationTaxClassesId,
      setValue: setTaxClassId,
    });
  };

  const changeRate = (value: string): void => {
    generalChangeRate({
      value,
      validation: validationRate,
      setValue: setRate,
    });
  };

  const changeCity = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCityStateCountry({
      options,
      validation: validationCity,
      setDefault: setCityDefault,
      setValue: setCity,
      setIsReset,
    });
  };

  const changeCityOptions = React.useCallback((): void => {
    generalChangeCityOptions({
      country,
      state,
      setCityDefault,
      setCity,
      setCityOptions,
      isReset,
    });
  }, [country, state]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeStateCountry = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCityStateCountry({
      options,
      validation: validationStateCountry,
      setDefault: setStateCountryDefault,
      setValue: setStateCountry,
      setIsReset,
    });
  };

  const changeStateCountryOptions = React.useCallback((): void => {
    generalChangeStateCountryOptions({
      country,
      setStateCountryDefault,
      setStateCountry,
      setStateCountryOptions,
      isReset,
    });
  }, [country]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeCountry = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeCityStateCountry({
      options,
      validation: validationCountry,
      setDefault: setCountryDefault,
      setValue: setCountry,
      setIsReset,
    });
  };

  const changePostCode = (newPostCode: string): void => {
    generalChangePostCode({
      value: newPostCode,
      validation: validationPostCode,
      setValue: setPostCode,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    taxClassesId,
    taxClassesIdValid,

    rate,
    rateValid,

    city,
    cityValid,
    cityDefault,
    cityOptions,

    state,
    stateCountryValid,
    stateCountryDefault,
    stateCountryOptions,

    country,
    countryValid,
    countryDefault,
    countryOptions,

    postCode,
    postCodeValid,

    currentId,
  };

  const actions = {
    infoReset,

    validationTaxClassesId,
    validationRate,
    validationCity,
    validationStateCountry,
    validationCountry,
    validationPostCode,
    validationButtonNext,

    changeTaxClasses,
    changeRate,
    changeCity,
    changeCityOptions,
    changeStateCountry,
    changeStateCountryOptions,
    changeCountry,
    changePostCode,

    setStateCountry,
    setCountry,
    setCurrentId,
  };

  return {
    states,
    actions,
  };
}
