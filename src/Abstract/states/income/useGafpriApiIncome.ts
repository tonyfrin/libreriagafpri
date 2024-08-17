import { INCOME_ROUTE } from '../../../constants';
import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesIncomeReturn } from './useGafpriPagesIncome';
import type { UseGafpriAttributesIncomeReturn } from './useGafpriAttributesIncome';

export type UseGafpriApiIncomeReturn = {
  actions: {
    newError: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    add: () => void;
  };
};

export type UseGafpriApiIncomeProps = {
  usePages: UseGafpriPagesIncomeReturn;
  useAttributes: UseGafpriAttributesIncomeReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiIncome = ({
  usePages,
  useAttributes,
  useError,
  token,
}: UseGafpriApiIncomeProps): UseGafpriApiIncomeReturn => {
  const returnErrorAdd = (): void => {
    useAttributes.usePayment.actions.infoReset();
    usePages.actions.onIncomeForm();
  };

  const newError = (
    newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
  ): void => {
    useError.actions.newError({
      newErrorValue,
      functionAction: returnErrorAdd,
    });
  };

  const add = (): void => {
    if (
      useAttributes.states.customerIdValid &&
      useAttributes.states.projectsPostsIdValid &&
      useAttributes.usePayment.useGeneralPaymentMethods.states
        .currenciesIdValid &&
      parseFloat(useAttributes.states.total) ===
        parseFloat(useAttributes.usePayment.states.total) &&
      parseFloat(useAttributes.states.total) ===
        useAttributes.usePayment.useGeneralPaymentMethods.states
          .totalPaymentMethod &&
      parseFloat(useAttributes.states.total) ===
        useAttributes.usePayment.useGeneralPaymentMethods.states.totalMethods &&
      parseFloat(useAttributes.states.total) > 0 &&
      token
    ) {
      const payload = {
        customerId: useAttributes.states.customerId,
        projectsPostsId: useAttributes.states.projectsPostsId,
        note: useAttributes.states.note,
        subTotal: parseFloat(useAttributes.states.subTotal),
        subTotalTax: parseFloat(useAttributes.states.subTotalTax) || 0,
        total: parseFloat(useAttributes.states.total),
        posts: {
          visibility: 'public',
        },
        payment: {
          total: parseFloat(useAttributes.usePayment.states.total),
          note: useAttributes.usePayment.states.note,
          posts: {
            visibility: 'public',
          },
          paymentMethods:
            useAttributes.usePayment.useGeneralPaymentMethods.states
              .arrayPaymentMethod,
        },
      };

      gafpriFetch({
        initMethod: 'POST',
        initRoute: INCOME_ROUTE,
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
