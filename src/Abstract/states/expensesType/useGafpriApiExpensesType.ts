import type { UseErrorReturn } from '../../../states';
import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { EXPENSES_TYPE_ROUTE } from '../../../constants';
import { UseGafpriPagesExpensesTypeReturn } from './useGafpriPagesExpensesType';
import { UseGafpriAttributesExpensesTypeReturn } from './useGafpriAttributesExpensesType';
import { UseGafpriDataExpensesTypeReturn } from './useGafpriDataExpensesType';

type Actions = {
  deleteParentId: (id: number) => void;

  add: () => void;

  erase: (id: number) => void;

  update: () => void;
};

export type UseGafpriApiExpensesTypeReturn = {
  actions: Actions;
};

export type UseGafpriApiExpensesTypeProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesExpensesTypeReturn;
  attributes: UseGafpriAttributesExpensesTypeReturn;
  data: UseGafpriDataExpensesTypeReturn;
};

export function useGafpriApiExpensesType({
  token,
  useError,
  pages,
  attributes,
  data,
}: UseGafpriApiExpensesTypeProps): UseGafpriApiExpensesTypeReturn {
  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onAdd,
    });
  };

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onInit,
    });
  };

  const add = (): void => {
    if (
      attributes.states.nameValid &&
      attributes.states.parentIdValid &&
      attributes.states.descriptionValid &&
      attributes.states.statusValid &&
      token
    ) {
      const payload = {
        name: attributes.states.name,
        parentId:
          attributes.states.parentId === ''
            ? null
            : parseInt(attributes.states.parentId, 10),
        status: attributes.states.status,
      };

      const updatedPayload = {
        ...payload,
        ...(attributes.states.description
          ? { description: attributes.states.description }
          : {}),
      };

      gafpriFetch({
        initMethod: 'POST',
        initRoute: EXPENSES_TYPE_ROUTE,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newError,
      });
    }
  };

  function deleteParentId(id: number): void {
    if (token) {
      const current = data.actions.getById(id);
      const payload = {
        ...(current?.name ? { name: current.name } : {}),
        ...(current?.status ? { status: current.status } : {}),
        ...(current?.description ? { description: current.description } : {}),
        parentId: null,
      };
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${EXPENSES_TYPE_ROUTE}/${id}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: pages.actions.onChildrenFetching,
        functionSuccess: pages.actions.outChildrenFetching,
        functionError: pages.actions.outChildrenFetching,
      });
    }
  }

  const update = (): void => {
    if (
      attributes.states.nameValid &&
      attributes.states.parentIdValid &&
      attributes.states.descriptionValid &&
      attributes.states.statusValid &&
      token
    ) {
      const payload = {
        name: attributes.states.name,
        parentId:
          attributes.states.parentId === ''
            ? null
            : parseInt(attributes.states.parentId, 10),
        status: attributes.states.status,
      };

      const updatedPayload = {
        ...payload,
        ...(attributes.states.description
          ? { description: attributes.states.description }
          : {}),
      };

      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${EXPENSES_TYPE_ROUTE}/${attributes.states.currentId}`,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newError,
      });
    }
  };

  const erase = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${EXPENSES_TYPE_ROUTE}/${id}`,
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
    deleteParentId,
    add,
    update,
    erase,
  };

  return {
    actions,
  };
}
