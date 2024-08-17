import { PAYMENT_TRANSFER_BANK_ROUTE } from '../../../../constants';
import { gafpriFetch } from '../../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../../helpers';
import type { UseErrorReturn } from '../../../../states';
import type { UseGafpriPagesPaymentTransferBankReturn } from './useGafpriPagesPaymentTransferBank';
import type { UseGafpriAttributesPaymentTransferBankReturn } from './useGafpriAttributesPaymentTransferBank';

export type UseGafpriApiPaymentTransferBankReturn = {
  actions: {
    newError: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    add: () => void;
  };
};

export type UseGafpriApiPaymentTransferBankProps = {
  usePages: UseGafpriPagesPaymentTransferBankReturn;
  useAttributes: UseGafpriAttributesPaymentTransferBankReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiPaymentTransferBank = ({
  usePages,
  useAttributes,
  useError,
  token,
}: UseGafpriApiPaymentTransferBankProps): UseGafpriApiPaymentTransferBankReturn => {
  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: usePages.actions.returnInit,
    });
  };

  const add = (): void => {
    if (parseFloat(useAttributes.usePayment.states.total) > 0 && token) {
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
        initRoute: PAYMENT_TRANSFER_BANK_ROUTE,
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
