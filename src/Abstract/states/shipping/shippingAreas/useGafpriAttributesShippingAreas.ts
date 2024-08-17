import { useState } from 'react';
import { SingleValue } from 'react-select';
import {
  generalValidationButtonNext,
  generalValidationName,
  generalValidationRegion,
} from '../../../../Validations';
import { generalChangeName, generalChangeRegion } from '../../../../Changes';
import { OPTIONS_REGION } from '../../../../constants';

type State = {
  name: string;
  nameValid: boolean;

  region: string[];
  regionValid: boolean;
  selectedRegionValue: string;
  regionDefault: { value: string; label: string };
  regionOptions: { value: string; label: string }[];

  currentId: number;
};

type Actions = {
  infoReset: () => void;

  validationName: (value: string) => boolean;

  validationRegion: (value: string[]) => boolean;
  setRegion: (value: string[]) => void;

  validationButtonNext: () => void;

  changeName: (value: string) => void;

  changeRegion: (value: SingleValue<{ value: string; label: string }>) => void;

  setCurrentId: (value: number) => void;

  removeRegion: (region: string) => void;
};

export type UseGafpriAttributesShippingAreasReturn = {
  states: State;
  actions: Actions;
};

export function useGafpriAttributesShippingAreas(): UseGafpriAttributesShippingAreasReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [region, setRegion] = useState<string[]>([]);
  const [regionValid, setRegionValid] = useState(false);
  const [selectedRegionValue, setSelectedRegionValue] = useState('');
  const regionDefault = {
    value: '',
    label: 'Selecciona una región',
  };
  const regionOptions = OPTIONS_REGION();

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setName('');
    setNameValid(false);
    setRegion([]);
    setRegionValid(false);
    setSelectedRegionValue('');
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

  const validationRegion = (value: string[]): boolean => {
    return generalValidationRegion({
      value,
      setValid: setRegionValid,
      currentValid: regionValid,
      required: true,
    });
  };

  const validationButtonNext = (): void => {
    generalValidationButtonNext({ validations: [nameValid, regionValid] });
  };

  // Funciones de cambios
  const changeName = (value: string): void => {
    generalChangeName({
      value,
      validation: validationName,
      setValue: setName,
    });
  };

  const changeRegion = (
    value: SingleValue<{ value: string; label: string }>
  ): void => {
    generalChangeRegion({
      options: value,
      validation: validationRegion,
      region,
      setValue: setRegion,
      setSelectedValue: setSelectedRegionValue,
    });
  };

  const removeRegion = (valueDelete: string): void => {
    setRegion((prevRegions) => prevRegions.filter((r) => r !== valueDelete));
  };

  /**
   * Export
   *
   *
   */
  const states = {
    name,
    nameValid,
    region,
    regionValid,
    selectedRegionValue,
    currentId,
    regionDefault,
    regionOptions,
  };

  const actions = {
    infoReset,
    validationName,
    validationRegion,
    setRegion,
    validationButtonNext,
    changeName,
    changeRegion,
    setCurrentId,
    removeRegion,
  };

  return {
    states,
    actions,
  };
}
