import { gafpriFetch } from '../../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../../helpers';
import type { UseErrorReturn } from '../../../../states';
import { UseGafpriPagesTaxClassesReturn } from './useGafpriPagesTaxClasses';
import { UseGafpriAttributesTaxClassesReturn } from './useGafpriAttributesTaxClasses';
import { TAX_CLASSES_ROUTE } from '../../../../constants';
import { TaxClassesAttributes } from './useGafpriDataTaxClasses';

type Items = {
  items?: TaxClassesAttributes;
};

type Data = {
  data?: Items;
  success?: boolean;
  name: string;
  description: string;
};

type Actions = {
  add: () => void;
  update: () => void;
  erase: (id: number) => void;
};

export type UseGafpriApiTaxClassesReturn = {
  actions: Actions;
};

export type UseGafpriApiTaxClassesProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesTaxClassesReturn;
  attributes: UseGafpriAttributesTaxClassesReturn;
};

export function useGafpriApiTaxClasses({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiTaxClassesProps): UseGafpriApiTaxClassesReturn {
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
      gafpriFetch<Data>({
        initMethod: 'POST',
        initRoute: TAX_CLASSES_ROUTE,
        initCredentials: {
          name: attributes.states.name,
          description: attributes.states.description,
        },
        initToken: { token },
        functionFetching: pages.actions.onFetching,
        functionSuccess: (data: Data) => pages.actions.goUpdateFromAdd(data),
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
        initRoute: `${TAX_CLASSES_ROUTE}/${attributes.states.currentId}`,
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
        initRoute: `${TAX_CLASSES_ROUTE}/${id}`,
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
