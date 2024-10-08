import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import { UseGafpriSitesReturn, UseErrorReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
import {
  generalValidationName,
  generalValidationAddress1,
  generalValidationAddress2,
  generalValidationSelectCity,
  generalValidationSelectStateCountry,
  generalValidationSelectCountry,
  generalValidationPostCode,
  generalValidationButtonNext,
  generalValidationSelectSite,
} from '../../../Validations';
import {
  generalChangeName,
  generalChangeSite,
  generalChangeAddress,
  generalChangeCityStateCountry,
  generalChangeCityOptions,
  generalChangeStateCountryOptions,
  generalChangePostCode,
} from '../../../Changes';
import {
  COUNTRY_DEFAULT,
  STATE_COUNTRY_DEFAULT,
  CITY_DEFAULT,
  Countries,
} from '../../../constants';

type State = {
  name: string;
  nameValid: boolean;

  address1: string;
  address1Valid: boolean;

  address2: string;
  address2Valid: boolean;

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

  site: string;
  siteValid: boolean;
  siteDefault: SelectDefault;
  siteOptions: SelectDefault[];

  currentId: number;
};

type Actions = {
  setStateCountry: (value: string) => void;
  setCountry: (value: string) => void;

  validationName: (value: string) => boolean;
  validationAddress1: (value: string) => boolean;
  validationAddress2: (value: string) => boolean;
  validationCity: (value: string) => boolean;
  validationStateCountry: (value: string) => boolean;
  validationCountry: (value: string) => boolean;
  validationPostCode: (value: string) => boolean;
  validationSite: (value: string) => boolean;
  validationButtonNext: () => void;

  changeName: (value: string) => void;
  changeAddress1: (value: string) => void;
  changeAddress2: (value: string) => void;
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

  changeSite: (options: SingleValue<{ value: string; label: string }>) => void;

  infoReset: () => void;

  setCurrentId: (id: number) => void;
};

export type UseGafpriAttributesStorageReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesStorageProps = {
  useError: UseErrorReturn;
  useSites: UseGafpriSitesReturn;
};

export function useGafpriAttributesStorage({
  useError,
  useSites,
}: UseGafpriAttributesStorageProps): UseGafpriAttributesStorageReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [address1, setAddress1] = useState('');
  const [address1Valid, setAddress1Valid] = useState(false);

  const [address2, setAddress2] = useState('');
  const [address2Valid, setAddress2Valid] = useState(true);

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

  const [site, setSite] = useState('');
  const [siteValid, setSiteValid] = useState(false);
  const [siteDefault, setSiteDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija sucursal',
  });
  const siteOptions =
    useSites.data.states.sites?.map((item) => {
      return { value: `${item.id}`, label: item.name };
    }) || [];
  const [isReset, setIsReset] = useState(true);
  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setIsReset(true);
    setName('');
    setAddress1('');
    setAddress2('');
    setCity(CITY_DEFAULT.value);
    setCityDefault(CITY_DEFAULT);
    setStateCountry(STATE_COUNTRY_DEFAULT.value);
    setCountryDefault(STATE_COUNTRY_DEFAULT);
    setCountry(COUNTRY_DEFAULT.value);
    setCountryDefault(COUNTRY_DEFAULT);
    setPostCode('');
    setSite('');
    setSiteDefault({ value: '', label: 'Elija sucursal' });
    setNameValid(false);
    setAddress1Valid(false);
    setAddress2Valid(true);
    setCityValid(true);
    setStateCountryValid(true);
    setCountryValid(true);
    setPostCodeValid(true);
    setSiteValid(false);
    setCurrentId(0);
    useError.actions.resetError();
  };

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
    });
  };

  const validationAddress1 = (value: string): boolean => {
    return generalValidationAddress1({
      value,
      setValid: setAddress1Valid,
      currentValid: address1Valid,
    });
  };

  const validationAddress2 = (value: string): boolean => {
    return generalValidationAddress2({
      value,
      setValid: setAddress2Valid,
      currentValid: address2Valid,
    });
  };

  const validationCity = (value: string): boolean => {
    return generalValidationSelectCity({
      value,
      setValid: setCityValid,
      currentValid: cityValid,
    });
  };

  const validationStateCountry = (value: string): boolean => {
    return generalValidationSelectStateCountry({
      value,
      setValid: setStateCountryValid,
      currentValid: stateCountryValid,
    });
  };

  const validationCountry = (value: string): boolean => {
    return generalValidationSelectCountry({
      value,
      setValid: setCountryValid,
      currentValid: countryValid,
    });
  };

  const validationPostCode = (value: string): boolean => {
    return generalValidationPostCode({
      value,
      setValid: setPostCodeValid,
      currentValid: postCodeValid,
    });
  };

  const validationSite = (value: string): boolean => {
    return generalValidationSelectSite({
      value,
      setValid: setSiteValid,
      currentValid: siteValid,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({
      validations: [
        nameValid,
        address1Valid,
        address2Valid,
        cityValid,
        stateCountryValid,
        countryValid,
        postCodeValid,
        siteValid,
      ],
    });
  };

  // Funciones de cambios
  const changeName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
  };

  const changeAddress1 = (value: string): void => {
    generalChangeAddress({
      value,
      validation: validationAddress1,
      setValue: setAddress1,
    });
  };

  const changeAddress2 = (value: string): void => {
    generalChangeAddress({
      value,
      validation: validationAddress2,
      setValue: setAddress2,
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
  }, [country, state]); // eslint-disable-line

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
  }, [country]); // eslint-disable-line

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

  const changeSite = (
    options: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeSite({
      options,
      validation: validationSite,
      setDefault: setSiteDefault,
      setValue: setSite,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    name,
    nameValid,

    address1,
    address1Valid,

    address2,
    address2Valid,

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

    site,
    siteValid,
    siteDefault,
    siteOptions,

    currentId,
  };

  const actions = {
    setStateCountry,
    setCountry,

    validationName,
    validationAddress1,
    validationAddress2,
    validationCity,
    validationStateCountry,
    validationCountry,
    validationPostCode,
    validationSite,
    validationButtonNext,

    changeName,
    changeAddress1,
    changeAddress2,
    changeCity,
    changeCityOptions,
    changeStateCountry,
    changeStateCountryOptions,
    changeCountry,
    changePostCode,
    changeSite,

    infoReset,
    setCurrentId,
  };

  return {
    states,
    actions,
  };
}
