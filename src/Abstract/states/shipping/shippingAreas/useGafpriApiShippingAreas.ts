import type { UseErrorReturn } from '../../../../states';
import {
  gafpriFetch,
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../../helpers';
import { UseGafpriPagesShippingAreasReturn } from './useGafpriPagesShippingAreas';
import { UseGafpriAttributesShippingAreasReturn } from './useGafpriAttributesShippingAreas';
import { SHIPPING_AREAS_ROUTE } from '../../../../constants';
import { ShippingAreasAttributes } from './useGafpriDataShippingAreas';

type Items = {
  items?: ShippingAreasAttributes;
};

type Data = {
  data?: Items;
  success?: boolean;
  name: string;
};

type Actions = {
  add: () => void;
  update: () => void;
  erase: (id: number) => void;
};

export type UseGafpriApiShippingAreasReturn = {
  actions: Actions;
};

export type UseGafpriApiShippingAreasProps = {
  token: string | null;
  useError: UseErrorReturn;
  pages: UseGafpriPagesShippingAreasReturn;
  attributes: UseGafpriAttributesShippingAreasReturn;
};

export function useGafpriApiShippingAreas({
  token,
  useError,
  pages,
  attributes,
}: UseGafpriApiShippingAreasProps): UseGafpriApiShippingAreasReturn {
  const newErrorAdd = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: pages.actions.onAdd,
    });
  };

  const add = (): void => {
    if (attributes.states.nameValid && token) {
      gafpriFetch<Data>({
        initMethod: 'POST',
        initRoute: SHIPPING_AREAS_ROUTE,
        initCredentials: {
          name: attributes.states.name,
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
    if (attributes.states.nameValid && token) {
      gafpriFetch({
        initMethod: 'PATCH',
        initRoute: `${SHIPPING_AREAS_ROUTE}/${attributes.states.currentId}`,
        initCredentials: {
          name: attributes.states.name,
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
        initRoute: `${SHIPPING_AREAS_ROUTE}/${id}`,
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
