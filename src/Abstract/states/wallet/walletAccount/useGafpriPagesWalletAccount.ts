import { useState, KeyboardEvent } from 'react';
import { UseGafpriAttributesWalletAccountReturn } from './useGafpriAttributesWalletAccount';
import {
  UseErrorReturn,
  UseUserReturn,
  UserAttributes,
} from '../../../../states';

type State = {
  isFetching: boolean;
  isInit: boolean;
  isAdd: boolean;
  isUpdate: boolean;
  isInitUser: boolean;
};

type Actions = {
  onFetching: () => void;

  onInit: () => void;

  returnInit: () => void;

  onAdd: () => void;

  goAdd: (user: UserAttributes) => void;

  goUpdate: (id: number) => void;

  onUpdate: () => void;

  onInitUser: () => void;

  processUserByUserName: (event: KeyboardEvent<HTMLInputElement>) => void;

  processUserByPhone: (event: KeyboardEvent<HTMLInputElement>) => void;

  processUserByEmail: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export type UseGafpriPagesWalletAccountReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriPagesWalletAccountProps = {
  attributes: UseGafpriAttributesWalletAccountReturn;
  useUser: UseUserReturn;
  useError: UseErrorReturn;
};

export function useGafpriPagesWalletAccount({
  attributes,
  useUser,
  useError,
}: UseGafpriPagesWalletAccountProps): UseGafpriPagesWalletAccountReturn {
  const [isFetching, setIsFetching] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [isInitUser, setIsInitUser] = useState(true);

  const onFetching = (): void => {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsInitUser(false);
  };

  const onInit = (): void => {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    setIsInitUser(false);
  };

  const onAdd = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    setIsInitUser(false);
  };

  const onUpdate = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    setIsInitUser(false);
  };

  const onInitUser = (): void => {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    setIsInitUser(true);
  };

  const goUpdate = (id: number): void => {
    attributes.actions.infoReset();
    attributes.actions.setCurrentId(id);
    onUpdate();
  };

  const returnInit = (): void => {
    attributes.actions.infoReset();
    onInit();
  };

  const goAdd = (user: UserAttributes): void => {
    attributes.actions.infoReset();
    attributes.actions.setUser(user);
    attributes.actions.changeUserId(user.id);
    onAdd();
  };

  const processUserByUserName = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      const currentUser = useUser.actions.findByUserName(useUser.states.name);
      if (currentUser) {
        goAdd(currentUser);
      } else {
        useError.actions.changeError([
          'No se encontró un usuario con el nombre ingresado.',
        ]);
      }
    }
  };

  const processUserByPhone = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const currentUser = useUser.actions.findByPhone(
        useUser.states.phoneNumber
      );
      if (currentUser) {
        goAdd(currentUser);
      } else {
        useError.actions.changeError([
          'No se encontró un usuario con el nombre ingresado.',
        ]);
      }
    }
  };

  const processUserByEmail = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const currentUser = useUser.actions.findByEmail(useUser.states.email);
      if (currentUser) {
        goAdd(currentUser);
      } else {
        useError.actions.changeError([
          'No se encontró un usuario con el nombre ingresado.',
        ]);
      }
    }
  };

  /**
   * Export
   *
   *
   */
  const states = {
    isFetching,
    isInit,
    isAdd,
    isUpdate,
    isInitUser,
  };

  const actions = {
    onFetching,

    onInit,

    onAdd,

    goAdd,

    onUpdate,

    goUpdate,

    returnInit,

    onInitUser,

    processUserByUserName,

    processUserByPhone,

    processUserByEmail,
  };

  return {
    states,
    actions,
  };
}
