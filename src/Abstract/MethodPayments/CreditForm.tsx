import React from 'react';
import { Input } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  SiteOptions,
  UseCurrenciesReturn,
  UseErrorReturn,
  UseGafpriOrderReturn,
} from '../../states';
import { UseGafpriAttributesPaymentReturn } from '../states/payment';
import { SpanValue } from '../Span';
import { Loading } from '../../Components';

type CurrentPaymentInfo = {
  orderPostsId: number;
  difference: number;
  amount: number;
  add: () => void;
  validationButtonNext: () => boolean;
  infoReset: () => void;
  returnInit: () => void;
  buttonNextId: string;
};

export type CreditFormProps = {
  useError: UseErrorReturn;
  useOrder: UseGafpriOrderReturn;
  siteOptions: SiteOptions;
  currentPaymentInfo: CurrentPaymentInfo;
  usePayment: UseGafpriAttributesPaymentReturn;
  useCurrencies: UseCurrenciesReturn;
};

export const CreditForm = ({
  useError,
  siteOptions,
  useOrder,
  currentPaymentInfo,
  usePayment,
  useCurrencies,
}: CreditFormProps): JSX.Element => {
  const siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);
  const order = useOrder.data.actions.getById(currentPaymentInfo.orderPostsId);

  if (!order)
    return (
      <>
        <Loading />
      </>
    );

  const setChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    usePayment.useGeneralPaymentMethods.useCreditOpening.actions.setAmount(
      parseFloat(value)
    );
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
    usePayment.useGeneralPaymentMethods.useCreditOpening.actions.setAmount(
      currentPaymentInfo.difference
    );
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
              value="Cliente: "
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
              value={
                order.orderCustomer[0]?.lastName
                  ? `${order.orderCustomer[0].name} ${order.orderCustomer[0]?.lastName}`
                  : `${order.orderCustomer[0].name}`
              }
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
