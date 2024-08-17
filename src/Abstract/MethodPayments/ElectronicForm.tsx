import React from 'react';
import { SingleValue } from 'react-select';
import { Input, SelectBankType } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  UseGafpriBankTypeReturn,
  SiteOptions,
  UseCurrenciesReturn,
  UseErrorReturn,
  CurrenciesAttributes,
} from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
import { SpanValue } from '../Span';
import { BankTypeAttributes } from '../states';

type CurrentPaymentInfo = {
  paymentType: string;
  changeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeBankTypePostsId: (
    e: SingleValue<{
      value: string;
      label: string;
    }>
  ) => void;
  bankTypePostsId: number;
  changeNote: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeNameSend: (e: React.ChangeEvent<HTMLInputElement>) => void;
  add: () => void;
  infoReset: () => void;
  returnInit: () => void;
  buttonNextId: string;
};

export type ElectronicFormProps = {
  useError: UseErrorReturn;
  siteOptions: SiteOptions;
  currentPaymentInfo: CurrentPaymentInfo;
  usePayment: UseGafpriAttributesPaymentReturn;
  useBankType: UseGafpriBankTypeReturn;
  useCurrencies: UseCurrenciesReturn;
};

export const ElectronicForm = ({
  useError,
  siteOptions,
  currentPaymentInfo,
  usePayment,
  useBankType,
  useCurrencies,
}: ElectronicFormProps): JSX.Element => {
  const [InputBankType, setInputBankType] = React.useState(<></>);
  const [bankCurrency, setBankCurrency] =
    React.useState<CurrenciesAttributes | null>(null);
  const [currentBankType, setCurrentBankType] =
    React.useState<BankTypeAttributes | null>(null);
  const siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);

  const bankTypeOptions = useBankType.data.actions.getOptionsByMethods(
    siteOptions.id,
    currentPaymentInfo.paymentType
  );

  const bankTypePostsIdDefault = { label: 'Selecciona un banco', value: '' };

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!bankCurrency) return;

    if (`${siteOptions.currencyId}` === `${bankCurrency.id}`) {
      usePayment.useGeneralPaymentMethods.useBankTransactions.actions.setAmount(
        parseFloat(value)
      );
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
    }

    usePayment.useGeneralPaymentMethods.useBankTransactions.actions.setChange(
      parseFloat(value)
    );

    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
      parseFloat(value)
    );
  };

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!bankCurrency) return;

    if (`${siteOptions.currencyId}` !== `${bankCurrency.id}`) {
      usePayment.useGeneralPaymentMethods.useBankTransactions.actions.setAmount(
        parseFloat(value)
      );
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
        parseFloat(value)
      );
    }
  };

  React.useEffect(() => {
    if (currentPaymentInfo.bankTypePostsId !== 0) {
      setBankCurrency(
        useCurrencies.actions.getById(
          useBankType.data.actions.getById(currentPaymentInfo.bankTypePostsId)
            ?.currenciesId || 0
        )
      );
      setCurrentBankType(
        useBankType.data.actions.getById(currentPaymentInfo.bankTypePostsId)
      );
    }
  }, [currentPaymentInfo.bankTypePostsId]);

  React.useEffect(() => {
    setInputBankType((): JSX.Element => {
      return (
        <SelectBankType
          change={(e) => currentPaymentInfo.changeBankTypePostsId(e)}
          props={{
            options: bankTypeOptions,
            defaultValue: bankTypePostsIdDefault,
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });
  }, []);

  const title1Text = 'Modulo de pago';
  const title2Text = 'Agrega un nuevo transacción bancarias';

  const buttonTitle = 'Procesar';
  const buttonAction = currentPaymentInfo.add;
  const buttonReturn = () => {
    currentPaymentInfo.infoReset();
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
            display: 'flex',
            justifyContent: 'flex-start',
            custom: `
              margin: 20px 0px;
              padding-left: 5%;
            `,
          }}
        >
          <>
            <SpanValue
              value="Metodo de pago: "
              containerStyles={{
                margin: '0px 15px 0px 0px',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
            />
            <SpanValue
              containerStyles={{
                margin: '0',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
              value={currentPaymentInfo.paymentType}
            />
          </>
        </ContainerButton>
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
            <Input
              inputProps={{
                onChange: (e) => currentPaymentInfo.changeNumber(e),
                title: 'Numero de confirmación',
                type: 'text',
                placeholder: 'Numero de transacción',
              }}
              styles={{
                width: '100%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <Input
              inputProps={{
                onChange: (e) => currentPaymentInfo.changeNote(e),
                title: 'Nota interna',
                type: 'text',
                placeholder: 'Comentarios internos',
              }}
              styles={{
                width: '100%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            {siteCurrency && bankCurrency && (
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
              bankCurrency &&
              `${siteOptions.currencyId}` !== `${bankCurrency.id}` && (
                <Input
                  inputProps={{
                    onChange: (e) => changeAmount(e),
                    title: `Monto en ${bankCurrency.name} ${bankCurrency.symbol}`,
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
        {currentBankType &&
          useBankType.data.actions.isWalletGafpri(currentBankType.postsId) && (
            <>
              <ContainerButton
                styles={{
                  width: '100%',
                }}
              >
                <>
                  <Input
                    inputProps={{
                      onChange: (e) => currentPaymentInfo.changeNameSend(e),
                      title: 'Nombre de la persona que realizó el pago:',
                      type: 'text',
                      placeholder: 'Persona o empresa',
                    }}
                    styles={{
                      width: '100%',
                    }}
                  />
                </>
              </ContainerButton>
            </>
          )}
      </>
    </ModelForm>
  );
};
