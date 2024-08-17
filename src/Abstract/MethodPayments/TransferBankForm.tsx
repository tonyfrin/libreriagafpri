import React from 'react';
import { Input, SelectBankType, SelectCurrencies } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  UseGafpriBankTypeReturn,
  SiteOptions,
  UseCurrenciesReturn,
  UseErrorReturn,
  CurrenciesAttributes,
} from '../../states';
import { UseGafpriAttributesPaymentTransferBankReturn } from '../states/payment';

export type CurrentPaymentInfo = {
  returnInit: () => void;
  next: () => void;
  buttonNextId: string;
  debitBankTypePostsId: number;
};

export type TransferBankFormProps = {
  useError: UseErrorReturn;
  siteOptions: SiteOptions;
  currentPaymentInfo: CurrentPaymentInfo;
  usePayment: UseGafpriAttributesPaymentTransferBankReturn;
  useBankType: UseGafpriBankTypeReturn;
  useCurrencies: UseCurrenciesReturn;
};

export const TransferBankForm = ({
  useError,
  siteOptions,
  currentPaymentInfo,
  usePayment,
  useBankType,
  useCurrencies,
}: TransferBankFormProps): JSX.Element => {
  const [InputBankType, setInputBankType] = React.useState(<></>);
  const [depositCurrency, setDepositCurrency] =
    React.useState<CurrenciesAttributes | null>(null);
  const debitCurrency = useCurrencies.actions.getById(
    useBankType.data.actions.getById(usePayment.states.debitBankTypePostsId)
      ?.currenciesId || 0
  );
  const siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);

  const add = () => {
    if (
      parseFloat(usePayment.usePayment.states.total) > 0 &&
      usePayment.states.depositBankTypePostsIdValid
    ) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.addTransferBankRegister(
        usePayment.states.debitBankTypePostsId,
        parseInt(usePayment.states.depositBankTypePostsId, 10)
      );
      currentPaymentInfo.next();
    }
  };

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!debitCurrency || !depositCurrency) return;
    console.log('debitCurrency', debitCurrency);
    console.log('depositCurrency', depositCurrency);
    console.log('siteOptions', siteOptions);
    if (
      `${siteOptions.currencyId}` === `${debitCurrency.id}` &&
      `${siteOptions.currencyId}` === `${depositCurrency.id}`
    ) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDebitAmount(
        parseFloat(value)
      );
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDepositAmount(
        parseFloat(value)
      );
    } else if (
      `${siteOptions.currencyId}` !== `${debitCurrency.id}` &&
      `${siteOptions.currencyId}` === `${depositCurrency.id}`
    ) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDepositAmount(
        parseFloat(value)
      );
    } else if (
      `${siteOptions.currencyId}` === `${debitCurrency.id}` &&
      `${siteOptions.currencyId}` !== `${depositCurrency.id}`
    ) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDebitAmount(
        parseFloat(value)
      );
    }

    usePayment.usePayment.useGeneralPaymentMethods.actions.setChange(
      parseFloat(value)
    );

    usePayment.usePayment.actions.setTotal(value);
  };

  const changeDebitAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!debitCurrency || !depositCurrency) return;

    if (
      `${siteOptions.currencyId}` !== `${debitCurrency.id}` &&
      `${debitCurrency.id}` !== `${depositCurrency.id}`
    ) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDebitAmount(
        parseFloat(value)
      );
    } else if (
      `${siteOptions.currencyId}` !== `${debitCurrency.id}` &&
      `${debitCurrency.id}` === `${depositCurrency.id}`
    ) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDebitAmount(
        parseFloat(value)
      );

      usePayment.usePayment.useGeneralPaymentMethods.actions.setDepositAmount(
        parseFloat(value)
      );
    }
  };

  const changeDepositAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!debitCurrency || !depositCurrency) return;

    if (
      `${siteOptions.currencyId}` !== `${depositCurrency.id}` &&
      `${debitCurrency.id}` !== `${depositCurrency.id}`
    ) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDepositAmount(
        parseFloat(value)
      );
    }
  };

  React.useEffect(() => {
    if (usePayment.states.depositBankTypePostsId !== '') {
      setDepositCurrency(
        useCurrencies.actions.getById(
          useBankType.data.actions.getById(
            parseInt(usePayment.states.depositBankTypePostsId, 10)
          )?.currenciesId || 0
        )
      );
    }
  }, [usePayment.states.depositBankTypePostsId]);

  React.useEffect(() => {
    usePayment.actions.setDebitBankTypePostsId(
      currentPaymentInfo.debitBankTypePostsId
    );
  }, []);

  React.useEffect(() => {
    usePayment.actions.validationDepositBankTypePostsId(
      usePayment.states.depositBankTypePostsId
    );
  }, [
    usePayment.states.depositBankTypePostsId,
    usePayment.states.depositBankTypePostsIdValid,
    InputBankType,
  ]);

  React.useEffect(() => {
    usePayment.actions.validationButtonNextPayment();
  }, [
    usePayment.usePayment.states.total,
    usePayment.states.depositBankTypePostsIdValid,
  ]);

  React.useEffect(() => {
    setInputBankType((): JSX.Element => {
      return (
        <SelectBankType
          change={(e) => usePayment.actions.changeDepositBankTypeId(e)}
          props={{
            options: usePayment.states.depositBankTypePostsIdOptions,
            defaultValue: usePayment.states.depositBankTypePostsIdDefault,
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });
  }, []);

  const title1Text = 'Transpaso entre bancos';
  const title2Text = 'Agrega un nuevo transpaso entre cuentas bancarias';

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
          <>{InputBankType}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            {siteCurrency && debitCurrency && depositCurrency && (
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
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            {siteCurrency &&
              debitCurrency &&
              depositCurrency &&
              `${siteOptions.currencyId}` !== `${debitCurrency.id}` && (
                <Input
                  inputProps={{
                    onChange: (e) => changeDebitAmount(e),
                    title: `Monto en ${debitCurrency.name} ${debitCurrency.symbol}`,
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
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            {siteCurrency &&
              debitCurrency &&
              depositCurrency &&
              `${siteOptions.currencyId}` !== `${depositCurrency.id}` &&
              `${debitCurrency.id}` !== `${depositCurrency.id}` && (
                <Input
                  inputProps={{
                    onChange: (e) => changeDepositAmount(e),
                    title: `Monto en ${depositCurrency.name} ${depositCurrency.symbol}`,
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
