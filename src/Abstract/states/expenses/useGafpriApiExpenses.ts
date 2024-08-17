import { EXPENSES_ROUTE } from '../../../constants';
import { gafpriFetch } from '../../../helpers';
import type {
  ErrorResponseProps,
  CustomErrorResponseProps,
} from '../../../helpers';
import type { UseErrorReturn } from '../../../states';
import type { UseGafpriPagesExpensesReturn } from './useGafpriPagesExpenses';
import type { UseGafpriAttributesExpensesReturn } from './useGafpriAttributesExpenses';

export type UseGafpriApiExpensesReturn = {
  actions: {
    newError: (
      newErrorValue: unknown | ErrorResponseProps | CustomErrorResponseProps
    ) => void;

    add: () => void;
  };
};

export type UseGafpriApiExpensesProps = {
  usePages: UseGafpriPagesExpensesReturn;
  useAttributes: UseGafpriAttributesExpensesReturn;
  useError: UseErrorReturn;
  token: string | null;
};

export const useGafpriApiExpenses = ({
  usePages,
  useAttributes,
  useError,
  token,
}: UseGafpriApiExpensesProps): UseGafpriApiExpensesReturn => {
  const returnErrorAdd = (): void => {
    useAttributes.usePayment.actions.infoReset();
    usePages.actions.onExpensesForm();
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
      useAttributes.states.supplierIdValid &&
      useAttributes.states.expensesTypeIdValid &&
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
        supplierId: useAttributes.states.supplierId,
        expensesTypeId: useAttributes.states.expensesTypeId,
        invoice: useAttributes.states.invoice,
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
        initRoute: EXPENSES_ROUTE,
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
