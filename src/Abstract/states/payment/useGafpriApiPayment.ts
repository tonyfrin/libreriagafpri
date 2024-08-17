import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import type {
  UseErrorReturn,
  UseGafpriAccountsReceivableReturn,
  UseGafpriOrderReturn,
  UseGafpriOrderReturnReturn,
} from '../../../states';
import type { UseGafpriPagesPaymentReturn } from './useGafpriPagesPayment';
import type { UseGafpriAttributesPaymentReturn } from './useGafpriAttributesPayment';
import {
  PAYMENT_ORDER_ROUTE,
  PAYMENT_CREDIT_ROUTE,
  PAYMENT_ORDER_RETURN_ROUTE,
} from '../../../constants';

export type UseGafpriApiPaymentReturn = {
  actions: {
    addOrderPayment: () => void;
    addCreditPayment: () => void;
    addOrderReturnPayment: () => void;
  };
};

export type UseGafpriApiPaymentProps = {
  useOrder: UseGafpriOrderReturn;
  usePages: UseGafpriPagesPaymentReturn;
  useCredit: UseGafpriAccountsReceivableReturn;
  useOrderReturn: UseGafpriOrderReturnReturn;
  useAttributes: UseGafpriAttributesPaymentReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiPayment = ({
  usePages,
  useOrder,
  useCredit,
  useAttributes,
  useOrderReturn,
  useError,
  token,
}: UseGafpriApiPaymentProps): UseGafpriApiPaymentReturn => {
  const returnOrderPayment = (): void => {
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderPayment();
  };

  const returnCreditPayment = (): void => {
    usePages.actions.onDeposit();
    useCredit.pages.actions.onCreditPayment();
  };

  const returnOrderReturnPayment = (): void => {
    usePages.actions.onOrderReturn();
    useOrderReturn.pages.actions.onOrderPayment();
  };

  const fetchingOrderPayment = (): void => {
    usePages.actions.onFetching();
    useOrder.pages.actions.onFetching();
  };

  const fetchingOrderReturnPayment = (): void => {
    usePages.actions.onFetching();
    useOrderReturn.pages.actions.onFetching();
  };

  const fetchingCreditPayment = (): void => {
    usePages.actions.onFetching();
    useCredit.pages.actions.onFetching();
  };

  const successOrderPayment = (): void => {
    useAttributes.actions.infoReset();
    useOrder.attributes.actions.infoReset();
    usePages.actions.onDeposit();
    useOrder.pages.actions.onOrderList();
  };

  const successOrderReturnPayment = (): void => {
    useAttributes.actions.infoReset();
    useOrderReturn.pages.actions.returnInit();
    usePages.actions.onOrderReturn();
  };

  const successCreditPayment = (): void => {
    useAttributes.actions.infoReset();
    useCredit.attributes.actions.infoReset();
    usePages.actions.onDeposit();
    useCredit.pages.actions.onCreditList();
  };

  const newErrorOrderPayment = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: returnOrderPayment,
    });
  };

  const newErrorOrderReturnPayment = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: returnOrderReturnPayment,
    });
  };

  const newErrorCreditPayment = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: returnCreditPayment,
    });
  };

  const addOrderPayment = (): void => {
    if (useOrder.attributes.states.currentId > 0 && token) {
      const payload = {
        orderPostsId: useOrder.attributes.states.currentId,
        total: useAttributes.states.total,
        note: useAttributes.states.note,
        paymentMethods:
          useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
        posts: {
          visibility: 'public',
        },
      };
      gafpriFetch({
        initMethod: 'POST',
        initRoute: PAYMENT_ORDER_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: fetchingOrderPayment,
        functionSuccess: successOrderPayment,
        functionError: newErrorOrderPayment,
      });
    }
  };

  const addOrderReturnPayment = (): void => {
    if (useOrderReturn.attributes.states.orderPostsId > 0 && token) {
      const payload = {
        total: useAttributes.states.total,
        note: useAttributes.states.note,
        paymentMethods:
          useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
        posts: {
          visibility: 'public',
        },
        orderReturn: {
          orderPostsId: useOrderReturn.attributes.states.orderPostsId,
          note: useOrderReturn.attributes.states.note,
          orderReturnItems: useOrderReturn.useProductItems.states.shoppingCart,
        },
      };
      gafpriFetch({
        initMethod: 'POST',
        initRoute: PAYMENT_ORDER_RETURN_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: fetchingOrderReturnPayment,
        functionSuccess: successOrderReturnPayment,
        functionError: newErrorOrderReturnPayment,
      });
    }
  };

  const addCreditPayment = (): void => {
    if (parseFloat(useAttributes.states.total) > 0 && token) {
      const payload = {
        total: useAttributes.states.total,
        note: useAttributes.states.note,
        paymentMethods:
          useAttributes.useGeneralPaymentMethods.states.arrayPaymentMethod,
        posts: {
          visibility: 'public',
        },
      };
      gafpriFetch({
        initMethod: 'POST',
        initRoute: PAYMENT_CREDIT_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: fetchingCreditPayment,
        functionSuccess: successCreditPayment,
        functionError: newErrorCreditPayment,
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    addOrderPayment,
    addCreditPayment,
    addOrderReturnPayment,
  };

  return {
    actions,
  };
};
