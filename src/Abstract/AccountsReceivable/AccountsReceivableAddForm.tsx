import React from 'react';
import { InputCreditLimit, InputCreditTimeToPay } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  SiteOptions,
  UseGafpriAccountsReceivableReturn,
} from '../../states';
import { SpanValue } from '../Span';
import { ACCOUNTS_RECEIVABLE_ROUTE } from '../../constants';

export type AccountsReceivableAddFormProps = {
  use: UseGafpriAccountsReceivableReturn;
  siteOptions: SiteOptions;
};

export const AccountsReceivableAddForm = ({
  use,
}: AccountsReceivableAddFormProps): JSX.Element => {
  const entityName = use.attributes.states?.entity
    ? use.attributes.states.entity?.lastName
      ? `${use.attributes.states.entity?.name} ${use.attributes.states.entity?.lastName}`
      : use.attributes.states.entity?.name
    : '';

  const next = () => {
    if (
      use.attributes.states.entityIdValid &&
      use.attributes.states.limitValid &&
      use.attributes.states.timeToPayValid
    ) {
      use.pages.actions.onLoginForm();
    }
  };

  React.useEffect(() => {
    use.attributes.actions.validationEntityId(use.attributes.states.entityId);
    use.attributes.actions.validationLimit(use.attributes.states.limit);
    use.attributes.actions.validationTimeToPay(use.attributes.states.timeToPay);
  }, [
    use.attributes.states.entityId,
    use.attributes.states.limit,
    use.attributes.states.timeToPay,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.entityIdValid,
    use.attributes.states.limitValid,
    use.attributes.states.timeToPayValid,
  ]);

  const title1Text = 'Nueva cuenta de credito';
  const title2Text = 'Agrega una nueva cuenta de credito';

  const buttonTitle = 'Siguiente';
  const buttonAction = next;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
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
      error={use.error.states.error}
      boxProps={{
        styles: {
          width: 'auto',
          height: 'auto',
        },
      }}
      returnButtonConatinerStyle="padding-button: 0px;"
      buttonNextId={ACCOUNTS_RECEIVABLE_ROUTE}
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
              value={entityName}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <InputCreditLimit
              change={(e) => use.attributes.actions.changeLimit(e)}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.limit,
                },
                styles: {
                  width: '100%',
                },
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
            <InputCreditTimeToPay
              change={(e) => use.attributes.actions.changeTimeToPay(e)}
              props={{
                styles: {
                  width: '100%',
                },
                inputProps: {
                  defaultValue: use.attributes.states.timeToPay,
                },
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
