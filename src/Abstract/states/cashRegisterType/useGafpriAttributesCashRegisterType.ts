import { useState } from 'react';
import { SingleValue } from 'react-select';
import { UseSitesReturn } from '../../../states';
import { SelectDefault } from '../../../helpers';
import {
  generalValidationName,
  generalValidationButtonNext,
  generalValidationSelectSite,
} from '../../../Validations';
import { generalChangeName, generalChangeSite } from '../../../Changes';
import { UseGafpriAttributesCashRegisterTypeUserReturn } from './cashRegisterTypeUser';

type State = {
  name: string;
  nameValid: boolean;
  site: string;
  siteValid: boolean;
  siteDefault: SelectDefault;
  siteOptions: SelectDefault[];
  currentId: number;
};

type Actions = {
  infoReset: () => void;
  validationName: (value: string) => boolean;
  validationSite: (value: string) => boolean;
  validationButtonNext: () => void;
  changeName: (value: string) => void;
  changeSite: (options: SingleValue<{ value: string; label: string }>) => void;
  setCurrentId: (id: number) => void;
};

export type UseGafpriAttributesCashRegisterTypeReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesCashRegisterTypeProps = {
  useCrtu: UseGafpriAttributesCashRegisterTypeUserReturn;
  useSites: UseSitesReturn;
};

export function useGafpriAttributesCashRegisterType({
  useCrtu,
  useSites,
}: UseGafpriAttributesCashRegisterTypeProps): UseGafpriAttributesCashRegisterTypeReturn {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [site, setSite] = useState('');
  const [siteValid, setSiteValid] = useState(false);
  const [siteDefault, setSiteDefault] = useState<SelectDefault>({
    value: '',
    label: 'Elija sucursal',
  });
  const siteOptions =
    useSites.states.sites.data?.items?.map((item) => {
      return { value: `${item.id}`, label: item.name };
    }) || [];

  const [currentId, setCurrentId] = useState(0);

  const infoReset = (): void => {
    setName('');
    setSite('');
    setSiteDefault({ value: '', label: 'Elija sucursal' });
    setNameValid(false);
    setSiteValid(false);
    setCurrentId(0);
    useCrtu.actions.infoReset();
  };

  // Funciones de Validacion
  const validationName = (value: string): boolean => {
    return generalValidationName({
      value,
      setValid: setNameValid,
      currentValid: nameValid,
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
      validations: [nameValid, siteValid],
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

    site,
    siteValid,
    siteDefault,
    siteOptions,

    currentId,
  };

  const actions = {
    validationName,
    validationSite,
    validationButtonNext,

    changeName,
    changeSite,

    infoReset,
    setCurrentId,
  };

  return {
    states,
    actions,
  };
}
