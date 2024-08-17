import React from 'react';
import { InputCreditLimit, InputCreditTimeToPay } from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type {
  SiteOptions,
  UseGafpriAccountsReceivableReturn,
} from '../../states';
import { SpanValue } from '../Span';
import { Loading } from '../../Components';

export type AccountsReceivableUpdateFormProps = {
  use: UseGafpriAccountsReceivableReturn;
  siteOptions: SiteOptions;
};

export const AccountsReceivableUpdateForm = ({
  use,
}: AccountsReceivableUpdateFormProps): JSX.Element => {
  const current = use.data.actions.getById(use.attributes.states.currentId);

  if (!current) {
    return <Loading />;
  }

  const entityName = current?.entity
    ? current.entity?.lastName
      ? `${current.entity?.name} ${current.entity?.lastName}`
      : current.entity?.name
    : '';

  const next = () => {
    if (
      use.attributes.states.limitValid &&
      use.attributes.states.timeToPayValid
    ) {
      use.pages.actions.onLoginUpdateForm();
    }
  };

  React.useEffect(() => {
    use.attributes.actions.changeEntityId(current.entityId);
    use.attributes.actions.changeLimit(`${current.limit}`);
    use.attributes.actions.changeTimeToPay(`${current.timeToPay}`);
  }, []);

  React.useEffect(() => {
    use.attributes.actions.validationEntityId(use.attributes.states.entityId);
    use.attributes.actions.validationLimit(use.attributes.states.limit);
    use.attributes.actions.validationTimeToPay(use.attributes.states.timeToPay);
  }, [
    use.attributes.states.limit,
    use.attributes.states.timeToPay,
    use.attributes.states.entityId,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.entityIdValid,
    use.attributes.states.limitValid,
    use.attributes.states.timeToPayValid,
  ]);

  const title1Text = 'Actualiza cuenta de credito';
  const title2Text = `Actualiza la cuenta de credito # ${current.postsId}`;

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
