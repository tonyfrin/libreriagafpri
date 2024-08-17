import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import { UseErrorReturn } from '../../../states';
import { UseGafpriPagesProjectsReturn } from './useGafpriPagesProjects';
import { UseGafpriAttributesProjectsReturn } from './useGafpriAttributesProjects';
import { PROJECTS_ROUTE } from '../../../constants';

type Actions = {
  add: () => void;

  erase: (id: number) => void;

  update: () => void;
};

export type UseGafpriApiProjectsReturn = {
  actions: Actions;
};

export type UseGafpriApiProjectsProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesProjectsReturn;
  attributes: UseGafpriAttributesProjectsReturn;
};

export function useGafpriApiProjects({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiProjectsProps): UseGafpriApiProjectsReturn {
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
      attributes.states.descriptionValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'POST',
        initRoute: PROJECTS_ROUTE,
        initCredentials: {
          name: attributes.states.name,
          description: attributes.states.description,
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
    if (
      attributes.states.nameValid &&
      attributes.states.descriptionValid &&
      token
    ) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${PROJECTS_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          name: attributes.states.name,
          description: attributes.states.description,
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
        initRoute: `${PROJECTS_ROUTE}/${id}`,
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
    add,
    update,
    erase,
  };

  return {
    actions,
  };
}
