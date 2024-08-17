import React from 'react';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type { UseGafpriExpensesReturn } from '../../states';
import { SpanValue } from '../Span';
import { EXPENSES_ROUTE } from '../../constants';

export type CashExpensesPaymentFormProps = {
  use: UseGafpriExpensesReturn;
};

export const CashExpensesPaymentForm = ({
  use,
}: CashExpensesPaymentFormProps): JSX.Element => {
  const title1Text = 'Nuevo Egreso';
  const title2Text = 'Agrega un nuevo engreso';

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
    use.attributes.actions.validationSupplierId(
      use.attributes.states.supplierId
    );
    use.attributes.actions.validationExpensesTypeId(
      use.attributes.states.expensesTypeId
    );
    use.attributes.actions.validationProjectsPostsId(
      use.attributes.states.projectsPostsId
    );
  }, [
    use.attributes.states.supplierId,
    use.attributes.states.expensesTypeId,
    use.attributes.states.projectsPostsId,
    use.attributes.states.supplierIdValid,
    use.attributes.states.expensesTypeIdValid,
    use.attributes.states.projectsPostsIdValid,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNextAdd();
  }, [
    use.attributes.states.supplierIdValid,
    use.attributes.states.expensesTypeIdValid,
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
      buttonNextId={`${EXPENSES_ROUTE}-Add`}
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
                  ? 'Todo listo para precesar el egreso'
                  : 'El monto ingresado no coincide con el monto total'
              }
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
