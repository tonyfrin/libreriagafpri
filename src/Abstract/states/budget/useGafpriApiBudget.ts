import { BUDGET_ROUTE } from '../../../constants';
import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesBudgetReturn } from './useGafpriPagesBudget';
import type { UseGafpriAttributesBudgetReturn } from './useGafpriAttributesBudget';
import type {
  UseGafpriAttributesBudgetItemsReturn,
  BudgetItemsAttributes,
} from '../productsItems';

type Data = {
  customerId?: number;
  referredId?: number | null;
  note?: string;
  salesChannel?: string;
  posts?: {
    visibility?: string;
  };
  budgetItems?: BudgetItemsAttributes[];
};

export type UseGafpriApiBudgetReturn = {
  actions: {
    newError: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    newErrorUpdate: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    add: () => void;
    update: () => void;
  };
};

export type UseGafpriApiBudgetProps = {
  usePages: UseGafpriPagesBudgetReturn;
  useAttributes: UseGafpriAttributesBudgetReturn;
  useProductItems: UseGafpriAttributesBudgetItemsReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiBudget = ({
  usePages,
  useAttributes,
  useProductItems,
  useError,
  token,
}: UseGafpriApiBudgetProps): UseGafpriApiBudgetReturn => {
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
        budgetItems: useProductItems.states.shoppingCart,
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
        initRoute: BUDGET_ROUTE,
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
        budgetItems: useProductItems.states.shoppingCart,
      };

      gafpriFetch<Data>({
        initMethod: 'PATCH',
        initRoute: `${BUDGET_ROUTE}/${useAttributes.states.currentId}`,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newErrorUpdate,
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    newError,
    newErrorUpdate,
    add,
    update,
  };

  return {
    actions,
  };
};
