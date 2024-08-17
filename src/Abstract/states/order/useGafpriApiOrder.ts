import { ORDER_ROUTE } from '../../../constants';
import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesOrderReturn } from './useGafpriPagesOrder';
import type { UseGafpriAttributesOrderReturn } from './useGafpriAttributesOrder';
import type {
  UseGafpriAttributesOrderItemsReturn,
  OrderItemsAttributes,
} from '../productsItems';

type Data = {
  customerId?: number;
  referredId?: number | null;
  note?: string;
  salesChannel?: string;
  posts?: {
    visibility?: string;
  };
  orderItems?: OrderItemsAttributes[];
};

export type UseGafpriApiOrderReturn = {
  actions: {
    newError: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    newErrorUpdate: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    add: () => void;
    update: () => void;
    erase: (id: number) => void;
  };
};

export type UseGafpriApiOrderProps = {
  usePages: UseGafpriPagesOrderReturn;
  useAttributes: UseGafpriAttributesOrderReturn;
  useProductItems: UseGafpriAttributesOrderItemsReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiOrder = ({
  usePages,
  useAttributes,
  useProductItems,
  useError,
  token,
}: UseGafpriApiOrderProps): UseGafpriApiOrderReturn => {
  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.onSales,
    });
  };

  const newErrorUpdate = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.returnInit,
    });
  };

  const newErrorDelete = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.onOrderList,
    });
  };

  const add = (): void => {
    if (
      useAttributes.states.customerIdValid &&
      useAttributes.states.referredIdValid &&
      useProductItems.actions.calculateTotal() > 0 &&
      token
    ) {
      const payload = {
        customerId: useAttributes.states.customerId,
        note: useAttributes.states.note,
        salesChannel: useAttributes.states.salesChannel,
        orderItems: useProductItems.states.shoppingCart,
        posts: {
          visibility: 'public',
        },
      };

      const updatedPayload = {
        ...payload,
        ...(useAttributes.states.referredId !== 0
          ? { referredId: useAttributes.states.referredId }
          : { referredId: null }),
      };

      gafpriFetch<Data>({
        initMethod: 'POST',
        initRoute: ORDER_ROUTE,
        initCredentials: updatedPayload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newError,
      });
    }
  };

  const update = (): void => {
    if (
      useAttributes.states.customerIdValid &&
      useAttributes.states.referredIdValid &&
      useProductItems.actions.calculateTotal() > 0 &&
      token
    ) {
      const payload = {
        customerId: useAttributes.states.customerId,
        referredId: useAttributes.states.referredId,
        note: useAttributes.states.note,
        salesChannel: useAttributes.states.salesChannel,
        orderItems: useProductItems.states.shoppingCart,
      };

      gafpriFetch<Data>({
        initMethod: 'PATCH',
        initRoute: `${ORDER_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  const erase = (id: number): void => {
    if (token) {
      gafpriFetch({
        initMethod: 'DELETE',
        initRoute: `${ORDER_ROUTE}/${id}`,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.onOrderList,
        functionError: newErrorDelete,
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    newError,
    newErrorUpdate,
    add,
    update,
    erase,
  };

  return {
    actions,
  };
};
