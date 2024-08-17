import React from 'react';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import { UseGafpriCashRegisterTypeReturn } from '../../states';
import { GsSelect, InputName, SelectSite } from '../Input';
import { UseUserReturn } from '../../states';
import { BoxCashRegisterTypeUser } from '../Box/BoxCashRegisterTypeUser';

export type CashRegisterTypeFormProps = {
  use: UseGafpriCashRegisterTypeReturn;
  formType: 'add' | 'update';
  useUser: UseUserReturn;
};

export const CashRegisterTypeForm = ({
  use,
  formType,
  useUser,
}: CashRegisterTypeFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputSite, setInputSite] = React.useState(<></>);

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationSite(use.attributes.states.site);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.site, InputSite]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.siteValid]);

  React.useEffect(() => {
    if (current) {
      if (current.name) use.attributes.actions.changeName(current.name);

      if (current.sitesId) {
        use.attributes.actions.changeSite({
          label: `${current.sitesId}`,
          value: `${current.sitesId}`,
        });
      }

      if (current.cashRegisterTypeUser) {
        const authorized = current.cashRegisterTypeUser.filter(
          (item) => item.isAuthorized
        );
        const supervisor = current.cashRegisterTypeUser.filter(
          (item) => item.isSupervisor
        );
        if (supervisor.length > 0) {
          use.crtu.actions.setSupervisor(supervisor);
        }
        if (authorized.length > 0) {
          use.crtu.actions.setAuthorized(authorized);
        }
      }
    }

    if (isAddForm) {
      setInputSite((): JSX.Element => {
        return (
          <SelectSite
            changeSite={(event) => use.attributes.actions.changeSite(event)}
            props={{
              defaultValue: use.attributes.states.siteDefault,
              title: 'Sucursal',
              styles: {
                width: '96.5%',
              },
              options: use.attributes.states.siteOptions,
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

  const title1Text = isAddForm ? 'Nueva Caja' : 'Actualizar Caja';
  const title2Text = isAddForm
    ? 'Agrega una nueva Caja'
    : `Actualiza la información de la caja #${current?.postsId}`;

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
                  {InputSite}
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
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            <ContainerButton
              styles={{
                width: '50%',
                display: 'block',
              }}
            >
              <>
                <ContainerButton
                  styles={{
                    width: '96.5%',
                    justifyContent: 'flex-start',
                  }}
                >
                  <GsSelect
                    styles={{
                      width: '100%',
                    }}
                    containerStyles={{
                      custom: `
                        display: block;
                      `,
                    }}
                    options={use.crtu.states.authorizedOptions}
                    onChange={(event) => {
                      if (event) {
                        use.crtu.actions.addAuthorized(event.value);
                      }
                    }}
                    defaultValue={use.crtu.states.authorizedDefault}
                    title={'Autorizados'}
                  />
                </ContainerButton>
                <ContainerButton
                  styles={{
                    width: '96.5%',
                    justifyContent: 'flex-start',
                  }}
                >
                  <BoxCashRegisterTypeUser
                    items={use.crtu.states.authorized}
                    useUser={useUser}
                    removeItem={use.crtu.actions.removeAuthorized}
                    containerStyles={{
                      width: '90%',
                      margin: '20px 0px',
                    }}
                  />
                </ContainerButton>
              </>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '50%',
                display: 'block',
              }}
            >
              <>
                <ContainerButton
                  styles={{
                    width: '96.5%',
                    justifyContent: 'flex-start',
                  }}
                >
                  <GsSelect
                    styles={{
                      width: '100%',
                    }}
                    containerStyles={{
                      custom: `
                        display: block;
                      `,
                    }}
                    options={use.crtu.states.supervisorOptions}
                    onChange={(event) => {
                      if (event) {
                        use.crtu.actions.addSupervisor(event.value);
                      }
                    }}
                    defaultValue={use.crtu.states.supervisorDefault}
                    title={'Supervisores'}
                  />
                </ContainerButton>
                <ContainerButton
                  styles={{
                    width: '96.5%',
                    justifyContent: 'flex-start',
                  }}
                >
                  <BoxCashRegisterTypeUser
                    items={use.crtu.states.supervisor}
                    useUser={useUser}
                    removeItem={use.crtu.actions.removeSupervisor}
                    containerStyles={{
                      width: '90%',
                      margin: '20px 0px',
                    }}
                  />
                </ContainerButton>
              </>
            </ContainerButton>
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
