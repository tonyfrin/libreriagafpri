import { PAYMENT_TRANSFER_CASH_REGISTER_ROUTE } from '../../../../constants';
import { gafpriFetch } from '../../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../../helpers';
import type { UseErrorReturn } from '../../../../states';
import type { UseGafpriPagesPaymentTransferCashRegisterReturn } from './useGafpriPagesPaymentTransferCashRegister';
import type { UseGafpriAttributesPaymentTransferCashRegisterReturn } from './useGafpriAttributesPaymentTransferCashRegister';

export type UseGafpriApiPaymentTransferCashRegisterReturn = {
  actions: {
    newError: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    add: () => void;
  };
};

export type UseGafpriApiPaymentTransferCashRegisterProps = {
  usePages: UseGafpriPagesPaymentTransferCashRegisterReturn;
  useAttributes: UseGafpriAttributesPaymentTransferCashRegisterReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiPaymentTransferCashRegister = ({
  usePages,
  useAttributes,
  useError,
  token,
}: UseGafpriApiPaymentTransferCashRegisterProps): UseGafpriApiPaymentTransferCashRegisterReturn => {
  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.returnInit,
    });
  };

  const add = (): void => {
    if (
      useAttributes.usePayment.useGeneralPaymentMethods.states
        .currenciesIdValid &&
      parseFloat(useAttributes.usePayment.states.total) > 0 &&
      token
    ) {
      const payload = {
        total: parseFloat(useAttributes.usePayment.states.total),
        note: useAttributes.usePayment.states.note,
        posts: {
          visibility: 'public',
        },
        paymentMethods:
          useAttributes.usePayment.useGeneralPaymentMethods.states
            .arrayPaymentMethod,
      };

      gafpriFetch({
        initMethod: 'POST',
        initRoute: PAYMENT_TRANSFER_CASH_REGISTER_ROUTE,
        initCredentials: payload,
        initToken: { token },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newError,
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  const actions = {
    newError,
    add,
  };

  return {
    actions,
  };
};
