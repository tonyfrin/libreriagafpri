import { useState } from 'react';
import { SingleValue } from 'react-select';
import {
  generalValidationBankType,
  generalValidationButtonNext,
} from '../../../../Validations';
import { generalChangeBankType } from '../../../../Changes';
import {
  UseGafpriAttributesPaymentReturn,
  useGafpriAttributesPayment,
} from '..';
import { SelectDefault } from '../../../../helpers';
import { SiteOptions, UseGafpriBankTypeReturn } from '../../../../states';
import { PAYMENT_TRANSFER_BANK_ROUTE } from '../../../../constants';

type State = {
  depositBankTypePostsId: string;
  depositBankTypePostsIdValid: boolean;
  depositBankTypePostsIdDefault: SelectDefault;
  depositBankTypePostsIdOptions: SelectDefault[];
  debitBankTypePostsId: number;
};

type Actions = {
  infoReset: () => void;
  validationDepositBankTypePostsId: (value: string) => boolean;
  changeDepositBankTypeId: (
    value: SingleValue<{ label: string; value: string }>
  ) => void;
  validationButtonNextPayment: () => void;
  validationButtonNextAdd: () => void;
  setDebitBankTypePostsId: (value: number) => void;
};

export type UseGafpriAttributesPaymentTransferBankReturn = {
  states: State;
  actions: Actions;
  usePayment: UseGafpriAttributesPaymentReturn;
};

export type UseGafpriAttributesPaymentTransferBankProps = {
  bankType: UseGafpriBankTypeReturn;
  siteOptions: SiteOptions;
};

export function useGafpriAttributesPaymentTransferBank({
  bankType,
  siteOptions,
}: UseGafpriAttributesPaymentTransferBankProps): UseGafpriAttributesPaymentTransferBankReturn {
  const [depositBankTypePostsId, setDepositBankTypePostsId] = useState('');
  const [depositBankTypePostsIdValid, setDepositBankTypePostsIdValid] =
    useState(false);
  const [depositBankTypePostsIdDefault, setDepositBankTypePostsIdDefault] =
    useState<SelectDefault>({
      value: '',
      label: 'Seleccionar banco',
    });
  const depositBankTypePostsIdOptions: SelectDefault[] =
    bankType.data.actions.getOptionsItems(siteOptions.id);

  const [debitBankTypePostsId, setDebitBankTypePostsId] = useState(0);
  const usePayment = useGafpriAttributesPayment({ useBankType: bankType });

  const infoReset = (): void => {
    setDepositBankTypePostsId('');
    setDepositBankTypePostsIdValid(false);
    setDepositBankTypePostsIdDefault({
      value: '',
      label: 'Seleccionar banco',
    });
    setDebitBankTypePostsId(0);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion

  const validationDepositBankTypePostsId = (value: string): boolean => {
    return generalValidationBankType({
      value,
      setValid: setDepositBankTypePostsIdValid,
      currentValid: depositBankTypePostsIdValid,
    });
  };

  const validationButtonNextPayment = (): void => {
    generalValidationButtonNext({
      validations: [
        depositBankTypePostsIdValid,
        parseFloat(usePayment.states.total) > 0,
      ],
      inputId: PAYMENT_TRANSFER_BANK_ROUTE,
    });
  };

  const validationButtonNextAdd = (): void => {
    generalValidationButtonNext({
      validations: [
        depositBankTypePostsIdValid,
        parseFloat(usePayment.states.total) > 0,
      ],
      inputId: `${PAYMENT_TRANSFER_BANK_ROUTE}-Add`,
    });
  };

  // Funciones de Change
  const changeDepositBankTypeId = (
    value: SingleValue<{ label: string; value: string }>
  ): void => {
    generalChangeBankType({
      options: value,
      validation: validationDepositBankTypePostsId,
      setDefault: setDepositBankTypePostsIdDefault,
      setValue: setDepositBankTypePostsId,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    depositBankTypePostsId,
    depositBankTypePostsIdValid,
    depositBankTypePostsIdDefault,
    depositBankTypePostsIdOptions,
    debitBankTypePostsId,
  };

  const actions = {
    infoReset,
    validationDepositBankTypePostsId,
    changeDepositBankTypeId,
    validationButtonNextPayment,
    validationButtonNextAdd,
    setDebitBankTypePostsId,
  };

  return {
    states,
    actions,
    usePayment,
  };
}
