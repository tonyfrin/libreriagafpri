import React from 'react';
import { Input } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  SiteOptions,
  UseCurrenciesReturn,
  UseErrorReturn,
} from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
import { SpanValue } from '../Span';

type CurrentPaymentInfo = {
  difference: number;
  amount: number;
  add: () => void;
  validationButtonNext: () => boolean;
  infoReset: () => void;
  returnInit: () => void;
  buttonNextId: string;
  paymentType: string;
};

export type SingleFormProps = {
  useError: UseErrorReturn;
  siteOptions: SiteOptions;
  currentPaymentInfo: CurrentPaymentInfo;
  usePayment: UseGafpriAttributesPaymentReturn;
  useCurrencies: UseCurrenciesReturn;
};

export const SingleForm = ({
  useError,
  siteOptions,
  currentPaymentInfo,
  usePayment,
  useCurrencies,
}: SingleFormProps): JSX.Element => {
  const siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
      parseFloat(value)
    );

    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
      parseFloat(value)
    );
  };

  const next = () => {
    if (currentPaymentInfo.validationButtonNext()) {
      currentPaymentInfo.add();
    }
  };

  React.useEffect(() => {
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(
      currentPaymentInfo.difference
    );
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(
      currentPaymentInfo.difference
    );
  }, []);

  React.useEffect(() => {
    currentPaymentInfo.validationButtonNext();
  }, [currentPaymentInfo.amount]);

  const title1Text = 'Modulo de pago';
  const title2Text = 'Agrega un nuevo credito';

  const buttonTitle = 'Procesar';
  const buttonAction = next;
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
              value="Metodo de Pago: "
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
          <>
            {siteCurrency && (
              <Input
                inputProps={{
                  onChange: (e) => setChange(e),
                  title: `Monto en ${siteCurrency.name} ${siteCurrency.symbol}`,
                  type: 'number',
                  step: '0.01',
                  value: `${currentPaymentInfo.amount}`,
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
