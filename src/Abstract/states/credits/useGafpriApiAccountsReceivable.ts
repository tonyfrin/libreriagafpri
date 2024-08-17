import { UseErrorReturn } from '../../../states';
import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { UseGafpriPagesAccountsReceivableReturn } from './useGafpriPagesAccountsReceivable';
import { UseGafpriAttributesAccountsReceivableReturn } from './useGafpriAttributesAccountsReceivable';
import { ACCOUNTS_RECEIVABLE_ROUTE } from '../../../constants';

type Actions = {
  update: () => void;

  add: () => void;

  erase: (id: number) => void;
};

export type UseGafpriApiAccountsReceivableReturn = {
  actions: Actions;
};

export type UseGafpriApiAccountsReceivableProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesAccountsReceivableReturn;
  attributes: UseGafpriAttributesAccountsReceivableReturn;
};

export function useGafpriApiAccountsReceivable({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiAccountsReceivableProps): UseGafpriApiAccountsReceivableReturn {
  const newErrorAdd = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onForm,
    });
  };

  const add = (): void => {
    if (
      attributes.states.entityIdValid &&
      attributes.states.authorizedLoginValid &&
      attributes.states.authorizedPasswordValid &&
      attributes.states.limitValid &&
      attributes.states.timeToPayValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: ACCOUNTS_RECEIVABLE_ROUTE,
        initCredentials: {
          entityId: attributes.states.entityId,
          authorizedLogin: attributes.states.authorizedLogin,
          authorizedPassword: attributes.states.authorizedPassword,
          limit: attributes.states.limit,
          timeToPay: attributes.states.timeToPay,
          posts: {
            visibility: 'public',
          },
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
      functionAction: pages.actions.onFormUpdate,
    });
  };

  const update = (): void => {
    if (
      attributes.states.authorizedLoginValid &&
      attributes.states.authorizedPasswordValid &&
      attributes.states.limitValid &&
      attributes.states.timeToPayValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${ACCOUNTS_RECEIVABLE_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          authorizedLogin: attributes.states.authorizedLogin,
          authorizedPassword: attributes.states.authorizedPassword,
          limit: attributes.states.limit,
          timeToPay: attributes.states.timeToPay,
          posts: {
            visibility: 'public',
          },
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
        initRoute: `${ACCOUNTS_RECEIVABLE_ROUTE}/${id}`,
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
