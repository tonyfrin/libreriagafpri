import React from 'react';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import { UseGafpriWalletAccountReturn, UserAttributes } from '../../states';
import { InputName, SelectCurrencies, SelectStatus } from '../Input';
import { SpanValue } from '../Span';

export type WalletAccountFormProps = {
  use: UseGafpriWalletAccountReturn;
  formType: 'add' | 'update';
};

export const WalletAccountForm = ({
  use,
  formType,
}: WalletAccountFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputStatus, setInputStatus] = React.useState(<></>);
  const [InputCurrency, setInputCurrency] = React.useState(<></>);

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationUserId(use.attributes.states.userId);
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationCurrency(use.attributes.states.currency);
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.name,
    use.attributes.states.userId,
    use.attributes.states.currency,
    use.attributes.states.status,
    InputStatus,
    InputCurrency,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.nameValid,
    use.attributes.states.userIdValid,
    use.attributes.states.statusValid,
    use.attributes.states.currencyValid,
  ]);

  React.useEffect(() => {
    if (current) {
      if (current.name) use.attributes.actions.changeName(current.name);

      if (current.status) {
        const statusLabel =
          use.attributes.states.statusOptions?.find(
            (option) => option?.value === `${current.status}`
          )?.label || '';
        use.attributes.actions.changeStatus({
          label: statusLabel,
          value: current.status,
        });
      }
    }

    if (isAddForm) {
      setInputStatus((): JSX.Element => {
        return (
          <SelectStatus
            changeStatus={(event) => use.attributes.actions.changeStatus(event)}
            props={{
              defaultValue: use.attributes.states.statusDefault,
              title: 'Estado',
              styles: {
                width: '96.5%',
              },
              options: use.attributes.states.statusOptions,
              containerStyles: {
                custom: `
                  display: block;
                `,
              },
            }}
          />
        );
      });

      setInputCurrency(() => {
        return (
          <SelectCurrencies
            changeCurrencies={(event) =>
              use.attributes.actions.changeCurrency(event)
            }
            props={{
              defaultValue: use.attributes.states.currencyDefault,
              title: 'Moneda',
              styles: {
                width: '96.5%',
              },
              options: use.attributes.states.currencyOptions,
              containerStyles: {
                custom: `
                  display: block;
                `,
              },
            }}
          />
        );
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (isUpdateForm && current) {
      if (use.attributes.states.statusDefault.value !== '') {
        setInputStatus(() => {
          return (
            <SelectStatus
              changeStatus={(event) =>
                use.attributes.actions.changeStatus(event)
              }
              props={{
                defaultValue: use.attributes.states.statusDefault,
                title: 'Estado',
                styles: {
                  width: '96.5%',
                },
                options: use.attributes.states.statusOptions,
                containerStyles: {
                  custom: `
                        display: block;
                      `,
                },
              }}
            />
          );
        });
      }
    }
  }, [use.attributes.states.statusDefault.value, isUpdateForm, current]);

  const title1Text = isAddForm ? 'Nueva Cuenta' : 'Actualizar Cuenta';
  const title2Text = isAddForm
    ? 'Agrega una nueva Cuenta de Billetera'
    : `Actualiza la información de la cuenta #${current?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;

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
    >
      <>
        <ContainerButton
          styles={{
            width: '96.5%',
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
              value="Usuario: "
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
              value={use.attributes.states.user?.name || ''}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            {isAddForm && (
              <>
                <ContainerButton
                  styles={{
                    width: '50%',
                    display: 'block',
                  }}
                >
                  <InputName
                    changeName={use.attributes.actions.changeName}
                    props={{
                      inputProps: {
                        defaultValue: use.attributes.states.name,
                        title: 'Nombre',
                      },
                      styles: {
                        width: '96.5%',
                        padding: '10px 19px',
                      },
                      containerStyles: {
                        custom: `
                        display: block;
                      `,
                      },
                    }}
                  />
                </ContainerButton>
                <ContainerButton
                  styles={{
                    width: '50%',
                    display: 'block',
                  }}
                >
                  {InputCurrency}
                </ContainerButton>
              </>
            )}

            {isUpdateForm && (
              <>
                <ContainerButton
                  styles={{
                    width: '100%',
                    display: 'block',
                  }}
                >
                  <InputName
                    changeName={use.attributes.actions.changeName}
                    props={{
                      inputProps: {
                        defaultValue: use.attributes.states.name,
                        title: 'Nombre',
                      },
                      styles: {
                        width: '100%',
                        padding: '10px 19px',
                      },
                      containerStyles: {
                        custom: `
                        display: block;
                      `,
                      },
                    }}
                  />
                </ContainerButton>
              </>
            )}
            <ContainerButton
              styles={{
                width: '100%',
                display: 'block',
              }}
            >
              {InputStatus}
            </ContainerButton>
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
