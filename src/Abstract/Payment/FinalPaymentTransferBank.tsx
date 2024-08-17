import React from 'react';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type { UseGafpriPaymentTransferBankReturn } from '../../states';
import { SpanValue } from '../Span';
import { PAYMENT_TRANSFER_BANK_ROUTE } from '../../constants';

export type FinalPaymentTransferBankProps = {
  use: UseGafpriPaymentTransferBankReturn;
};

export const FinalPaymentTransferBank = ({
  use,
}: FinalPaymentTransferBankProps): JSX.Element => {
  const title1Text = 'Nuevo Traspaso';
  const title2Text = 'Agrega un nuevo traspaso entre cuentas';

  const buttonTitle = 'Procesar';
  const buttonAction = () => {
    use.api.actions.add();
  };
  const buttonReturn = () => {
    use.attributes.usePayment.actions.infoReset();
    use.pages.actions.onPaymentForm();
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

  React.useEffect(() => {
    use.attributes.actions.validationDepositBankTypePostsId(
      use.attributes.states.depositBankTypePostsId
    );
  }, [
    use.attributes.states.depositBankTypePostsId,
    use.attributes.states.depositBankTypePostsIdValid,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNextAdd();
  }, [
    use.attributes.states.depositBankTypePostsIdValid,
    use.attributes.usePayment.states.total,
  ]);

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
      error={use.error.states.error}
      buttonNextId={`${PAYMENT_TRANSFER_BANK_ROUTE}-Add`}
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
              value="Aviso: "
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
              value={'Todo listo para precesar el traspaso'}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
