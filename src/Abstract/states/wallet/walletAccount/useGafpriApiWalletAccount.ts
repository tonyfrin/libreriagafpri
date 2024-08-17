import { UseErrorReturn } from '../../../../states';
import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../../helpers';
import { UseGafpriPagesWalletAccountReturn } from './useGafpriPagesWalletAccount';
import { UseGafpriAttributesWalletAccountReturn } from './useGafpriAttributesWalletAccount';
import { WALLET_ACCOUNT_ROUTE } from '../../../../constants';

type Actions = {
  update: () => void;

  add: () => void;

  erase: (id: number) => void;
};

export type UseGafpriApiWalletAccountReturn = {
  actions: Actions;
};

export type UseGafpriApiWalletAccountProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesWalletAccountReturn;
  attributes: UseGafpriAttributesWalletAccountReturn;
};

export function useGafpriApiWalletAccount({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiWalletAccountProps): UseGafpriApiWalletAccountReturn {
  const newErrorAdd = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onAdd,
    });
  };

  const add = (): void => {
    if (
      attributes.states.nameValid &&
      attributes.states.userIdValid &&
      attributes.states.statusValid &&
      attributes.states.currencyValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: WALLET_ACCOUNT_ROUTE,
        initCredentials: {
          userId: attributes.states.userId,
          name: attributes.states.name,
          currenciesId: attributes.states.currency,
          status: attributes.states.status,
        },
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorAdd,
      });
    }
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onUpdate,
    });
  };

  const update = (): void => {
    if (attributes.states.nameValid && attributes.states.statusValid && token) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${WALLET_ACCOUNT_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          name: attributes.states.name,
          status: attributes.states.status,
        },
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.returnInit,
    });
  };

  const erase = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${WALLET_ACCOUNT_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorDelete,
      });
    }
  };

  /**
   * Export
   *
   *
   */

  const actions = {
    update,
    add,
    erase,
  };

  return {
    actions,
  };
}
