import { useState } from 'react';
import { SingleValue } from 'react-select';
import {
  generalValidationCashRegisterType,
  generalValidationButtonNext,
} from '../../../../Validations';
import { generalChangeCashRegisterType } from '../../../../Changes';
import {
  UseGafpriAttributesPaymentReturn,
  useGafpriAttributesPayment,
} from '../../payment';
import { SelectDefault } from '../../../../helpers';
import {
  SiteOptions,
  UseCurrenciesReturn,
  UseGafpriCashRegisterTypeReturn,
} from '../../../../states';
import { PAYMENT_TRANSFER_CASH_REGISTER_ROUTE } from '../../../../constants';

type State = {
  cashRegisterTypePostsId: string;
  cashRegisterTypePostsIdValid: boolean;
  cashRegisterTypePostsIdDefault: SelectDefault;
  cashRegisterTypePostsIdOptions: SelectDefault[];

  cashRegisterPostsId: number;
  currentCashRegisterTypePostsId: number;
  currentCashRegisterPostsId: number;
};

type Actions = {
  setCurrentCashRegisterTypePostsId: (value: number) => void;
  setCurrentCashRegisterPostsId: (value: number) => void;
  validationCashRegisterTypePostsId: (value: string) => boolean;
  validationButtonNextPaymentCr: () => void;
  validationButtonNextAdd: () => void;
  changeCashRegisterTypeId: (
    value: SingleValue<{ label: string; value: string }>
  ) => void;
  infoReset: () => void;
};

export type UseGafpriAttributesPaymentTransferCashRegisterReturn = {
  states: State;
  actions: Actions;
  usePayment: UseGafpriAttributesPaymentReturn;
};

export type UseGafpriAttributesPaymentTransferCashRegisterProps = {
  cashRegisterType: UseGafpriCashRegisterTypeReturn;
  currencies: UseCurrenciesReturn;
  siteOptions: SiteOptions;
};

export function useGafpriAttributesPaymentTransferCashRegister({
  cashRegisterType,
  currencies,
  siteOptions,
}: UseGafpriAttributesPaymentTransferCashRegisterProps): UseGafpriAttributesPaymentTransferCashRegisterReturn {
  const [cashRegisterTypePostsId, setCashRegisterTypePostsId] = useState('');
  const [cashRegisterTypePostsIdValid, setCashRegisterTypePostsIdValid] =
    useState(false);
  const [cashRegisterTypePostsIdDefault, setCashRegisterTypePostsIdDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Selecciona caja',
    });
  const cashRegisterTypePostsIdOptions: SelectDefault[] =
    cashRegisterType.data.actions.getOptionsItems(siteOptions.id);

  const [cashRegisterPostsId, setCashRegisterPostsId] = useState(0);
  const [currentCashRegisterTypePostsId, setCurrentCashRegisterTypePostsId] =
    useState(0);
  const [currentCashRegisterPostsId, setCurrentCashRegisterPostsId] =
    useState(0);
  const usePayment = useGafpriAttributesPayment({ currencies });

  const infoReset = (): void => {
    setCashRegisterTypePostsId('');
    setCashRegisterTypePostsIdValid(false);
    setCashRegisterTypePostsIdDefault({
      value: '',
      label: 'Selecciona caja',
    });
    setCashRegisterPostsId(0);
    setCurrentCashRegisterPostsId(0);
    setCurrentCashRegisterTypePostsId(0);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion

  const validationCashRegisterTypePostsId = (value: string): boolean => {
    let newValue;
    if (value) {
      newValue = value === '' || value === '0' ? '' : value;
    } else {
      newValue = '';
    }
    return generalValidationCashRegisterType({
      value: newValue,
      setValid: setCashRegisterTypePostsIdValid,
      currentValid: cashRegisterTypePostsIdValid,
    });
  };

  const validationButtonNextPaymentCr = (): void => {
    generalValidationButtonNext({
      validations: [
        cashRegisterTypePostsIdValid,
        usePayment.useGeneralPaymentMethods.states.currenciesIdValid,
        parseFloat(usePayment.states.total) > 0,
        usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change > 0,
      ],
      inputId: PAYMENT_TRANSFER_CASH_REGISTER_ROUTE,
    });
  };

  const validationButtonNextAdd = (): void => {
    generalValidationButtonNext({
      validations: [
        cashRegisterTypePostsIdValid,
        usePayment.useGeneralPaymentMethods.states.currenciesIdValid,
        parseFloat(usePayment.states.total) > 0,
        usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change > 0,
      ],
      inputId: `${PAYMENT_TRANSFER_CASH_REGISTER_ROUTE}-Add`,
    });
  };

  // Funciones de Change
  const changeCashRegisterTypeId = (
    value: SingleValue<{ label: string; value: string }>
  ): void => {
    if (value?.value && value.value !== '' && value.value !== '0') {
      const postsId =
        cashRegisterType.data.actions.getCurrentCashRegisterPostsId(
          parseInt(value.value, 10)
        );
      setCashRegisterPostsId(postsId);
    }

    generalChangeCashRegisterType({
      options: value,
      validation: validationCashRegisterTypePostsId,
      setDefault: setCashRegisterTypePostsIdDefault,
      setValue: setCashRegisterTypePostsId,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    cashRegisterTypePostsId,
    cashRegisterTypePostsIdValid,
    cashRegisterTypePostsIdDefault,
    cashRegisterTypePostsIdOptions,
    cashRegisterPostsId,
    currentCashRegisterTypePostsId,
    currentCashRegisterPostsId,
  };

  const actions = {
    infoReset,
    validationButtonNextPaymentCr,
    validationButtonNextAdd,
    changeCashRegisterTypeId,
    validationCashRegisterTypePostsId,
    setCurrentCashRegisterTypePostsId,
    setCurrentCashRegisterPostsId,
  };

  return {
    states,
    actions,
    usePayment,
  };
}
