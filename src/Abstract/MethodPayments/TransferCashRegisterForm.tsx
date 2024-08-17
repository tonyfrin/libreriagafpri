import React from 'react';
import { Input, SelectCashRegisterType, SelectCurrencies } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  CurrenciesAttributes,
  SiteOptions,
  UseCurrenciesReturn,
  UseErrorReturn,
} from '../../states';
import { UseGafpriAttributesPaymentTransferCashRegisterReturn } from '../states/payment';

export type CurrentPaymentInfo = {
  returnInit: () => void;
  next: () => void;
  buttonNextId: string;
  cashRegisterTypePostsId: number;
  cashRegisterPostsId: number;
};

export type TransferCashRegisterFormProps = {
  useError: UseErrorReturn;
  siteOptions: SiteOptions;
  useCurrencies: UseCurrenciesReturn;
  currentPaymentInfo: CurrentPaymentInfo;
  usePayment: UseGafpriAttributesPaymentTransferCashRegisterReturn;
};

export const TransferCashRegisterForm = ({
  useError,
  siteOptions,
  useCurrencies,
  currentPaymentInfo,
  usePayment,
}: TransferCashRegisterFormProps): JSX.Element => {
  const [InputCurrencies, setInputCurrencies] = React.useState(<></>);
  const [InputCashRegisterType, setInputCashRegisterType] = React.useState(
    <></>
  );
  const [currentCurrency, setCurrentCurrency] =
    React.useState<CurrenciesAttributes | null>(null);
  const siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);

  const add = () => {
    usePayment.usePayment.useGeneralPaymentMethods.actions.addTransferCashRegister(
      usePayment.states.currentCashRegisterPostsId,
      usePayment.states.currentCashRegisterTypePostsId,
      usePayment.states.cashRegisterPostsId,
      parseInt(usePayment.states.cashRegisterTypePostsId, 10)
    );
    currentPaymentInfo.next();
  };

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      siteOptions.currencyId ===
      usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId
    ) {
      //paymentMethods
      usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
      usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
        parseFloat(value)
      );

      //Payment
      usePayment.usePayment.actions.setTotal(value);
    } else {
      //paymentMethods
      usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
    }
  };

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      siteOptions.currencyId !==
      usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId
    ) {
      //paymentMethods
      usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
        parseFloat(value)
      );

      //Payment
      usePayment.usePayment.actions.setTotal(value);
    }
  };

  React.useEffect(() => {
    usePayment.actions.setCurrentCashRegisterPostsId(
      currentPaymentInfo.cashRegisterPostsId
    );
    usePayment.actions.setCurrentCashRegisterTypePostsId(
      currentPaymentInfo.cashRegisterTypePostsId
    );
  }, []);

  React.useEffect(() => {
    if (
      usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId !== 0
    ) {
      setCurrentCurrency(
        useCurrencies.actions.getById(
          usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId
        )
      );
    }
  }, [usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId]);

  React.useEffect(() => {
    usePayment.usePayment.useGeneralPaymentMethods.actions.validationCurrenciesId(
      `${usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId}`
    );
    usePayment.actions.validationCashRegisterTypePostsId(
      usePayment.states.cashRegisterTypePostsId
    );
  }, [
    usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId,
    usePayment.usePayment.useGeneralPaymentMethods.states.currenciesIdValid,
    usePayment.states.cashRegisterTypePostsId,
    usePayment.states.cashRegisterTypePostsIdValid,
    InputCashRegisterType,
    InputCurrencies,
  ]);

  React.useEffect(() => {
    usePayment.actions.validationButtonNextPaymentCr();
  }, [
    usePayment.usePayment.useGeneralPaymentMethods.states.currenciesIdValid,
    usePayment.usePayment.useGeneralPaymentMethods.useCashTransactions.states
      .change,
    usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.states
      .change,
    usePayment.usePayment.states.total,
    usePayment.states.cashRegisterTypePostsIdValid,
  ]);

  React.useEffect(() => {
    setInputCurrencies((): JSX.Element => {
      return (
        <SelectCurrencies
          changeCurrencies={(e) =>
            usePayment.usePayment.useGeneralPaymentMethods.actions.changeCashCurrenciesId(
              e
            )
          }
          props={{
            options:
              usePayment.usePayment.useGeneralPaymentMethods.states
                .currenciesIdOptions,
            defaultValue:
              usePayment.usePayment.useGeneralPaymentMethods.states
                .currenciesIdDefault,
            title: 'Moneda',
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });

    setInputCashRegisterType((): JSX.Element => {
      return (
        <SelectCashRegisterType
          change={(e) => usePayment.actions.changeCashRegisterTypeId(e)}
          props={{
            options: usePayment.states.cashRegisterTypePostsIdOptions,
            defaultValue: usePayment.states.cashRegisterTypePostsIdDefault,
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });
  }, []);

  const title1Text = 'Transpaso de efectivo';
  const title2Text = 'Agrega un nuevo transpaso de efectivo';

  const buttonTitle = 'Procesar';
  const buttonAction = add;
  const buttonReturn = () => {
    usePayment.actions.infoReset();
    currentPaymentInfo.returnInit();
  };

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        buttonReturn();
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
          height: 'auto',
          width: 'auto',
          padding: '20px',
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
          <>{InputCashRegisterType}</>
        </ContainerButton>
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

            {currentCurrency &&
              siteCurrency &&
              currentCurrency.id !== siteCurrency.id && (
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
              )}
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
