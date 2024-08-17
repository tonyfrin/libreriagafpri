import React from 'react';
import { css } from '@emotion/css';
import { ContainerButton } from '../Containers';
import { Button } from '../Button';
import { ModelForm } from '../Form';
import { UseCurrenciesReturn, UseGafpriBankTypeReturn } from '../../states';
import {
  Paragraph,
  Input,
  InputAccountNumber,
  InputBankName,
  InputName,
  SelectSite,
  SelectAccountType,
  SelectCurrencies,
} from '../Input';
import { AttributeTable } from '../Table';

export type BankTypeFormProps = {
  use: UseGafpriBankTypeReturn;
  formType: 'add' | 'update';
  useCurrencies: UseCurrenciesReturn;
};

const defaultFormContainerStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 24px;
`;

const defaultImageContainerStyle = css`
  width: 50%;
`;

const defaultTitleContainerStyle = css`
  width: 50%;
`;

export const BankTypeForm = ({
  use,
  formType,
  useCurrencies,
}: BankTypeFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputSite, setInputSite] = React.useState(<></>);
  const [InputAccountType, setInputAccountType] = React.useState(<></>);
  const [InputCurrency, setInputCurrency] = React.useState(<></>);

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationSite(use.attributes.states.sitesId);
    use.attributes.actions.validationBankName(use.attributes.states.bankName);
    use.attributes.actions.validationAccount(use.attributes.states.account);
    use.attributes.actions.validationAccountType(
      use.attributes.states.accountType
    );
    use.attributes.actions.validationCurrency(use.attributes.states.currency);
    use.attributes.actions.validationSettings(use.attributes.states.settings);
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.name,
    use.attributes.states.sitesId,
    use.attributes.states.bankName,
    use.attributes.states.account,
    use.attributes.states.accountType,
    use.attributes.states.currency,
    use.attributes.states.settings,
    InputSite,
    InputAccountType,
    InputCurrency,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.nameValid,
    use.attributes.states.sitesIdValid,
    use.attributes.states.bankNameValid,
    use.attributes.states.accountValid,
    use.attributes.states.accountTypeValid,
    use.attributes.states.currencyValid,
    use.attributes.states.settingsValid,
  ]);

  React.useEffect(() => {
    if (current) {
      if (current.name) use.attributes.actions.changeName(current.name);

      if (current.sitesId) {
        use.attributes.actions.changeSitesId({
          label: `${current.sitesId}`,
          value: `${current.sitesId}`,
        });
      }

      if (current.bankName)
        use.attributes.actions.changeBankName(current.bankName);
      if (current.account)
        use.attributes.actions.changeAccount(current.account);
      if (current.accountType) {
        const accountTypeName =
          use.attributes.states.accountTypeOptions.find(
            (option) => option?.value === `${current.accountType}`
          )?.label || '';
        use.attributes.actions.changeAccountType({
          label: accountTypeName,
          value: current.accountType,
        });
      }
      if (current.currenciesId) {
        const currencyName =
          useCurrencies.actions.getById(current.currenciesId)?.name || '';
        use.attributes.actions.changeCurrency({
          label: currencyName,
          value: `${current.currenciesId}`,
        });
      }
      if (current.settings)
        use.attributes.actions.setSettings(current.settings);
    }

    if (isAddForm) {
      setInputSite((): JSX.Element => {
        return (
          <SelectSite
            changeSite={(event) => use.attributes.actions.changeSitesId(event)}
            props={{
              defaultValue: use.attributes.states.sitesIdDefault,
              title: 'Sucursal',
              styles: {
                width: '96.5%',
              },
              options: use.attributes.states.sitesIdOptions,
              containerStyles: {
                custom: `
                  display: block;
                `,
              },
            }}
          />
        );
      });

      setInputAccountType(() => {
        return (
          <SelectAccountType
            change={(event) => use.attributes.actions.changeAccountType(event)}
            props={{
              defaultValue: use.attributes.states.accountTypeDefault,
              styles: {
                width: '96.5%',
              },
              options: use.attributes.states.accountTypeOptions,
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
      if (use.attributes.states.accountTypeDefault.value !== '') {
        setInputAccountType(() => {
          return (
            <SelectAccountType
              change={(event) =>
                use.attributes.actions.changeAccountType(event)
              }
              props={{
                defaultValue: use.attributes.states.accountTypeDefault,
                styles: {
                  width: '96.5%',
                },
                options: use.attributes.states.accountTypeOptions,
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

      if (use.attributes.states.currencyDefault.value !== '') {
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
    }
  }, [
    use.attributes.states.currencyDefault,
    use.attributes.states.accountTypeDefault.value,
    isUpdateForm,
    current,
  ]);

  const title1Text = isAddForm ? 'Nuevo Banco' : 'Actualizar Banco';
  const title2Text = isAddForm
    ? 'Agrega un nuevo Banco'
    : `Actualiza la información del banco #${current?.postsId}`;

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
                  <InputBankName
                    change={(name) =>
                      use.attributes.actions.changeBankName(name)
                    }
                    props={{
                      inputProps: {
                        defaultValue: use.attributes.states.bankName,
                      },
                      styles: {
                        width: '100%',
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
                    width: '96.5%',
                    justifyContent: 'flex-start',
                  }}
                >
                  {InputCurrency}
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
                  <InputAccountNumber
                    change={(value) =>
                      use.attributes.actions.changeAccount(value)
                    }
                    props={{
                      inputProps: {
                        defaultValue: use.attributes.states.account,
                      },
                      styles: {
                        width: '100%',
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
                    width: '96.5%',
                    justifyContent: 'flex-start',
                  }}
                >
                  {InputAccountType}
                </ContainerButton>
              </>
            </ContainerButton>
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <>
            <div className={css(defaultFormContainerStyle)}>
              <div className={css(defaultImageContainerStyle)}>
                <ContainerButton
                  styles={{
                    width: '100%',
                  }}
                >
                  <Input
                    styles={{
                      width: '90%',
                    }}
                    inputProps={{
                      placeholder: 'Opción',
                      title: 'Opción',
                      type: 'text',
                      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                        use.attributes.actions.setValueSettings(
                          event.currentTarget.value
                        ),
                      value: use.attributes.states.valueSettings,
                    }}
                  />
                </ContainerButton>
                <ContainerButton
                  styles={{
                    width: '100%',
                  }}
                >
                  <Button
                    title="Agregar Opción"
                    buttonProps={{
                      onClick: () => use.attributes.actions.addSettings(),
                    }}
                  />
                </ContainerButton>
              </div>
              <div className={css(defaultTitleContainerStyle)}>
                <Paragraph
                  onChange={(e) =>
                    use.attributes.actions.setDescriptionSettings(e)
                  }
                  inputProps={{
                    value: use.attributes.states.descriptionSettings,
                    title: 'Valor',
                    placeholder: 'Valor',
                  }}
                />
              </div>
            </div>
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
        >
          <AttributeTable
            data={use.attributes.states.settings}
            onRemove={use.attributes.actions.onRemoveSettings}
          />
        </ContainerButton>
      </>
    </ModelForm>
  );
};
