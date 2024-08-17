import React from 'react';
import { Input, SelectCurrencies } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  CurrenciesAttributes,
  SiteOptions,
  UseCurrenciesReturn,
  UseErrorReturn,
} from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';

export type CurrentPaymentInfo = {
  validationButtonNext: () => boolean;
  returnInit: () => void;
  next: () => void;
  buttonNextId: string;
  cashRegisterTypePostsId: number;
  cashRegisterPostsId: number;
  type: 'deposit' | 'debit';
  paymentType?: string;
};

export type CashFormProps = {
  useError: UseErrorReturn;
  siteOptions: SiteOptions;
  useCurrencies: UseCurrenciesReturn;
  currentPaymentInfo: CurrentPaymentInfo;
  usePayment: UseGafpriAttributesPaymentReturn;
};

export const CashForm = ({
  useError,
  siteOptions,
  useCurrencies,
  currentPaymentInfo,
  usePayment,
}: CashFormProps): JSX.Element => {
  const [InputCurrencies, setInputCurrencies] = React.useState(<></>);
  const [currentCurrency, setCurrentCurrency] =
    React.useState<CurrenciesAttributes | null>(null);
  const siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);

  const add = () => {
    if (currentPaymentInfo.validationButtonNext()) {
      usePayment.useGeneralPaymentMethods.actions.addCashTransaction();
      currentPaymentInfo.next();
    }
  };

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      siteOptions.currencyId ===
      usePayment.useGeneralPaymentMethods.states.currenciesId
    ) {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(
        parseFloat(value)
      );
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(
        parseFloat(value)
      );

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
        parseFloat(value)
      );

      //Payment
      if (currentPaymentInfo.paymentType) {
        usePayment.actions.setTotal(value);
      }
    } else {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(
        parseFloat(value)
      );

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
    }
  };

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      siteOptions.currencyId !==
      usePayment.useGeneralPaymentMethods.states.currenciesId
    ) {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(
        parseFloat(value)
      );

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
        parseFloat(value)
      );

      //Payment
      if (currentPaymentInfo.paymentType) {
        usePayment.actions.setTotal(value);
      }
    }
  };

  React.useEffect(() => {
    usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setCashRegisterPostsId(
      currentPaymentInfo.cashRegisterPostsId
    );
    usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setCashRegisterTypePostsId(
      currentPaymentInfo.cashRegisterTypePostsId
    );

    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setType(
      currentPaymentInfo.type
    );
    usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setType(
      currentPaymentInfo.type
    );

    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setMethodType(
      'cash'
    );

    if (currentPaymentInfo.paymentType) {
      usePayment.actions.setType(currentPaymentInfo.paymentType);
    }
  }, []);

  React.useEffect(() => {
    if (usePayment.useGeneralPaymentMethods.states.currenciesId !== 0) {
      setCurrentCurrency(
        useCurrencies.actions.getById(
          usePayment.useGeneralPaymentMethods.states.currenciesId
        )
      );
    }
  }, [usePayment.useGeneralPaymentMethods.states.currenciesId]);

  React.useEffect(() => {
    usePayment.useGeneralPaymentMethods.actions.validationCurrenciesId(
      `${usePayment.useGeneralPaymentMethods.states.currenciesId}`
    );
  }, [
    usePayment.useGeneralPaymentMethods.states.currenciesId,
    usePayment.useGeneralPaymentMethods.states.currenciesIdValid,
    InputCurrencies,
  ]);

  React.useEffect(() => {
    currentPaymentInfo.validationButtonNext();
  }, [
    usePayment.useGeneralPaymentMethods.states.currenciesIdValid,
    usePayment.useGeneralPaymentMethods.useCashTransactions.states.change,
    usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change,
    usePayment.states.total,
  ]);

  React.useEffect(() => {
    setInputCurrencies((): JSX.Element => {
      return (
        <SelectCurrencies
          changeCurrencies={(e) =>
            usePayment.useGeneralPaymentMethods.actions.changeCashCurrenciesId(
              e
            )
          }
          props={{
            options:
              usePayment.useGeneralPaymentMethods.states.currenciesIdOptions,
            defaultValue:
              usePayment.useGeneralPaymentMethods.states.currenciesIdDefault,
            title: 'Moneda',
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });
  }, []);

  const title1Text = 'Pago en efectivo';
  const title2Text = 'Agrega un nuevo pago en efectivo';

  const buttonTitle = 'Procesar';
  const buttonAction = add;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        currentPaymentInfo.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <ModelForm
      titles={{
        title1: title1Text,
        title2: title2Text,
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={useError.states.error}
      buttonNextId={currentPaymentInfo.buttonNextId}
      boxProps={{
        styles: {
          width: 'auto',
          height: 'auto',
        },
      }}
      returnButtonConatinerStyle="padding-button: 0px;"
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>{InputCurrencies}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            {currentCurrency && (
              <Input
                inputProps={{
                  onChange: (e) => changeAmount(e),
                  title: `Monto en ${currentCurrency.name} ${currentCurrency.symbol}`,
                  type: 'number',
                  step: '0.01',
                }}
                styles={{
                  width: '100%',
                }}
              />
            )}
          </>
        </ContainerButton>
        {currentCurrency &&
          siteCurrency &&
          currentCurrency.id !== siteCurrency.id && (
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <>
                <Input
                  inputProps={{
                    onChange: (e) => setChange(e),
                    title: `Monto en ${siteCurrency.name} ${siteCurrency.symbol}`,
                    type: 'number',
                    step: '0.01',
                  }}
                  styles={{
                    width: '100%',
                  }}
                />
              </>
            </ContainerButton>
          )}
      </>
    </ModelForm>
  );
};
