import { useState } from 'react';
import { UseUserReturn } from '../../../../states';

export type CashRegisterTypeUserAttributes = {
  id?: number;
  cashRegisterTypePostsId?: number;
  userId: number;
  isAuthorized: boolean;
  isSupervisor: boolean;
};

type State = {
  authorized: CashRegisterTypeUserAttributes[];
  supervisor: CashRegisterTypeUserAttributes[];
  selectedAuthorizedValue: string;
  selectedSupervisorValue: string;
  authorizedDefault: {
    value: string;
    label: string;
  };
  authorizedOptions: {
    value: string;
    label: string;
  }[];
  supervisorDefault: {
    value: string;
    label: string;
  };
  supervisorOptions: {
    value: string;
    label: string;
  }[];
};

type Actions = {
  removeAuthorized: (index: number) => void;
  addAuthorized: (id: string) => void;
  removeSupervisor: (index: number) => void;
  addSupervisor: (id: string) => void;
  infoReset: () => void;
  setAuthorized: (value: CashRegisterTypeUserAttributes[]) => void;
  setSupervisor: (value: CashRegisterTypeUserAttributes[]) => void;
};

export type UseGafpriAttributesCashRegisterTypeUserReturn = {
  states: State;
  actions: Actions;
};

export type UseGarpriAttributesCashRegisterTypeUserProps = {
  useUser: UseUserReturn;
};

export function useGafpriAttributesCashRegisterTypeUser({
  useUser,
}: UseGarpriAttributesCashRegisterTypeUserProps): UseGafpriAttributesCashRegisterTypeUserReturn {
  const [authorized, setAuthorized] = useState<
    CashRegisterTypeUserAttributes[]
  >([]);
  const [selectedAuthorizedValue, setSelectedAuthorizedValue] = useState('');
  const authorizedDefault = {
    value: '',
    label: 'Selecciona un usuario',
  };
  const authorizedOptions = useUser.actions.getOptionsUsers();

  const [supervisor, setSupervisor] = useState<
    CashRegisterTypeUserAttributes[]
  >([]);
  const [selectedSupervisorValue, setSelectedSupervisorValue] = useState('');
  const supervisorDefault = {
    value: '',
    label: 'Selecciona un usuario',
  };
  const supervisorOptions = useUser.actions.getOptionsUsers();

  const infoReset = (): void => {
    setAuthorized([]);
    setSelectedAuthorizedValue('');
    setSupervisor([]);
    setSelectedSupervisorValue('');
  };

  // Funciones de Change

  const removeAuthorized = (index: number): void => {
    setAuthorized((prevUsers) => {
      const updatedUsers = [...prevUsers];
      if (index >= 0 && index < updatedUsers.length) {
        updatedUsers.splice(index, 1);
      }
      return updatedUsers;
    });
  };

  const addAuthorized = (id: string): void => {
    const userId = parseInt(id, 10);

    const userExists = authorized.some((user) => user.userId === userId);

    if (!userExists) {
      const user = {
        userId,
        isAuthorized: true,
        isSupervisor: false,
      };

      setAuthorized((prevUsers) => [...prevUsers, user]);
    }
  };

  const removeSupervisor = (index: number): void => {
    setSupervisor((prevUsers) => {
      const updatedUsers = [...prevUsers];
      if (index >= 0 && index < updatedUsers.length) {
        updatedUsers.splice(index, 1);
      }
      return updatedUsers;
    });
  };

  const addSupervisor = (id: string): void => {
    const userId = parseInt(id, 10);

    const userExists = supervisor.some((user) => user.userId === userId);

    if (!userExists) {
      const user = {
        userId,
        isAuthorized: false,
        isSupervisor: true,
      };

      setSupervisor((prevUsers) => [...prevUsers, user]);
    }
  };

  /**
   * Export
   *
   *
   */
  const states = {
    authorized,
    supervisor,
    selectedAuthorizedValue,
    selectedSupervisorValue,
    authorizedDefault,
    authorizedOptions,
    supervisorDefault,
    supervisorOptions,
  };

  const actions = {
    infoReset,
    removeAuthorized,
    addAuthorized,
    removeSupervisor,
    addSupervisor,
    setAuthorized,
    setSupervisor,
  };

  return {
    states,
    actions,
  };
}
