import React from 'react';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type { UseGafpriIncomeReturn } from '../../states';
import { SpanValue } from '../Span';
import { INCOME_ROUTE } from '../../constants';

export type CashIncomePaymentFormProps = {
  use: UseGafpriIncomeReturn;
};

export const CashIncomePaymentForm = ({
  use,
}: CashIncomePaymentFormProps): JSX.Element => {
  const title1Text = 'Nuevo Ingreso';
  const title2Text = 'Agrega un nuevo ingreso';

  const buttonTitle = 'Procesar';
  const buttonAction = use.api.actions.add;
  const buttonReturn = () => {
    use.attributes.usePayment.actions.infoReset();
    use.pages.actions.onPaymentCrForm();
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
    use.attributes.actions.validationCustomerId(
      use.attributes.states.customerId
    );
    use.attributes.actions.validationProjectsPostsId(
      use.attributes.states.projectsPostsId
    );
  }, [
    use.attributes.states.customerId,
    use.attributes.states.projectsPostsId,
    use.attributes.states.customerIdValid,
    use.attributes.states.projectsPostsIdValid,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNextAdd();
  }, [
    use.attributes.states.customerIdValid,
    use.attributes.states.projectsPostsIdValid,
    use.attributes.states.total,
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
      buttonNextId={`${INCOME_ROUTE}-Add`}
      returnButtonConatinerStyle="padding-button: 0px;"
      boxProps={{
        styles: {
          width: 'auto',
          height: 'auto',
        },
      }}
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
              value={
                use.attributes.states.total ===
                use.attributes.usePayment.states.total
                  ? 'Todo listo para precesar el ingreso'
                  : 'El monto ingresado no coincide con el monto total'
              }
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
