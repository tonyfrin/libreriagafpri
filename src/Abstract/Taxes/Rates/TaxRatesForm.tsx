import React from 'react';
import {
  ContainerButton,
  ContainerButtonPropsExtended,
} from '../../Containers';
import { ModelForm, ModelFormPropsExtended } from '../../Form';
import {
  SelectCountry,
  SelectCity,
  SelectStateCountry,
  InputStateCountry,
  InputZipCode,
  Input,
  InputCity as GeneralInputCity,
  InputRate,
} from '../../Input';
export { Countries, StatesCountries } from '../../../constants';
import type { UseGafpriTaxRatesReturn } from '../../../states';
import {
  TAX_RATES_ROUTE,
  Countries,
  StatesCountries,
} from '../../../constants';

export type TaxRatesFormProps = {
  use: UseGafpriTaxRatesReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
};

export type TaxRatesFormPropsExtended = {
  use?: UseGafpriTaxRatesReturn;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
};

export const TaxRatesForm = ({
  use,
  formType,
  modelFormProps,
  infoContainerProps,
}: TaxRatesFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [inputCity, setInputCity] = React.useState(<></>);
  const [inputState, setInputState] = React.useState(<></>);
  const [inputCountry, setInputCountry] = React.useState(<></>);

  const currentItem = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationTaxClassesId(
      parseInt(use.attributes.states.taxClassesId, 10)
    );
    use.attributes.actions.validationRate(
      parseFloat(use.attributes.states.rate)
    );
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.taxClassesId,
    use.attributes.states.rate,
    use.attributes.states.city,
    use.attributes.states.state,
    use.attributes.states.country,
    use.attributes.states.postCode,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.taxClassesIdValid,
    use.attributes.states.rateValid,
    use.attributes.states.cityValid,
    use.attributes.states.stateCountryValid,
    use.attributes.states.countryValid,
    use.attributes.states.postCodeValid,
  ]);

  React.useEffect(() => {
    if (isUpdateForm && currentItem) {
      use.attributes.actions.changeTaxClasses(`${currentItem.taxClassesId}`);
      use.attributes.actions.changeRate(`${currentItem.rate}`);

      use.attributes.actions.setCountry(currentItem.country);

      use.attributes.actions.setStateCountry(currentItem.state);

      use.attributes.actions.changeCity({
        label: currentItem.city,
        value: currentItem.city,
      });

      if (currentItem?.postCode)
        use.attributes.actions.changePostCode(currentItem?.postCode);
    }
  }, []);

  React.useEffect(() => {
    if (isAddForm) {
      setInputCountry((): JSX.Element => {
        return (
          <SelectCountry
            changeCountry={(event) =>
              use.attributes.actions.changeCountry(event)
            }
            props={{
              defaultValue: use.attributes.states.countryDefault,
              styles: {
                width: '90%',
              },
              options: use.attributes.states.countryOptions,
              title: 'País',
            }}
          />
        );
      });
    }
  }, []);

  React.useEffect(() => {
    if (isAddForm) {
      if (use.attributes.states.stateCountryOptions.length > 0) {
        setInputState((): JSX.Element => {
          return (
            <SelectStateCountry
              changeStateCountry={(event) =>
                use.attributes.actions.changeStateCountry(event)
              }
              props={{
                defaultValue: use.attributes.states.stateCountryDefault,
                styles: {
                  width: '90%',
                },
                options: use.attributes.states.stateCountryOptions,
                title: 'Estado',
              }}
            />
          );
        });
      } else {
        setInputState((): JSX.Element => {
          return (
            <InputStateCountry
              changeStateCountry={(event) =>
                use.attributes.actions.changeStateCountry(event)
              }
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.state,
                  title: 'Estado',
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
              }}
            />
          );
        });
      }

      if (use.attributes.states.cityOptions.length > 0) {
        setInputCity((): JSX.Element => {
          return (
            <SelectCity
              changeCity={(event) => use.attributes.actions.changeCity(event)}
              props={{
                defaultValue: use.attributes.states.cityDefault,
                styles: {
                  width: '90%',
                },
                options: use.attributes.states.cityOptions,
                title: 'Ciudad',
              }}
            />
          );
        });
      } else {
        setInputCity((): JSX.Element => {
          return (
            <GeneralInputCity
              changeCity={(event) => use.attributes.actions.changeCity(event)}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.city,
                  title: 'Ciudad',
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
              }}
            />
          );
        });
      }
    }
  }, [
    use.attributes.states.country,
    use.attributes.states.stateCountryOptions,
    use.attributes.states.cityOptions,
  ]);

  React.useEffect(() => {
    if (isAddForm) {
      use.attributes.actions.changeCityOptions();
    }
  }, [use.attributes.actions.changeCityOptions]);

  React.useEffect(() => {
    if (isAddForm) {
      use.attributes.actions.changeStateCountryOptions();
    }
  }, [use.attributes.actions.changeStateCountryOptions]);

  React.useEffect(() => {
    if (isUpdateForm && currentItem) {
      const labelCountry = Countries[0][currentItem.country];
      const labelStateCountry =
        StatesCountries[0][currentItem.country][0][currentItem.state];

      setInputCountry((): JSX.Element => {
        return (
          <Input
            inputProps={{
              title: 'Pais',
              type: 'text',
              id: 'countrySite',
              defaultValue: labelCountry,
              readOnly: true,
            }}
            styles={{
              width: '90%',
            }}
            containerStyles={{
              custom: 'display: grid;',
            }}
          />
        );
      });

      setInputState((): JSX.Element => {
        return (
          <Input
            inputProps={{
              title: 'Estado',
              type: 'text',
              id: 'stateCountrySite',
              defaultValue: labelStateCountry,
              readOnly: true,
            }}
            styles={{
              width: '90%',
            }}
          />
        );
      });

      setInputCity((): JSX.Element => {
        return (
          <Input
            inputProps={{
              title: 'Ciudad',
              type: 'text',
              id: 'citySite',
              defaultValue: use.attributes.states.city,
              readOnly: true,
            }}
            styles={{
              width: '90%',
            }}
          />
        );
      });
    }
  }, [currentItem, use.attributes.states.city]);

  const title1Text = isAddForm ? 'Nueva tasa' : 'Actualizar tasa';
  const title2Text = isAddForm
    ? 'Agrega una nueva tasa de impuestos'
    : `Actualiza la información de la tasa de impuestos #${currentItem?.id}`;

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
      boxProps={{
        styles: {
          width: '100%',
          height: '75vh',
          margin: '30px auto 0px',
        },
      }}
      mainButtonProps={{
        styles: {
          fontSize: '10px',
        },
        title: buttonTitle,
      }}
      returnButtonProps={{
        styles: {
          fontSize: '10px',
          backgroundColor: '#c12429',
        },
        title: 'volver',
        buttonProps: {
          onClick: use.pages.actions.returnInit,
        },
      }}
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
      buttonNextId={TAX_RATES_ROUTE}
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'space-between',
          }}
          {...infoContainerProps}
        >
          <>
            <InputRate
              change={use.attributes.actions.changeRate}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.rate,
                },
                styles: {
                  width: '100%',
                },
              }}
              inputId={TAX_RATES_ROUTE}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...infoContainerProps}
        >
          <>
            {inputCity}
            {inputState}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            {inputCountry}
            <InputZipCode
              changeZipCode={use.attributes.actions.changePostCode}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.postCode,
                  title: 'Código Postal',
                },
                styles: {
                  width: '90%',
                },
              }}
              inputId={TAX_RATES_ROUTE}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
