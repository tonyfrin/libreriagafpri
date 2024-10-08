import React from 'react';
import { ContainerButton, ContainerButtonPropsExtended } from '../Containers';
import { ModelForm, ModelFormPropsExtended } from '../Form';
import { StatesCountries, Countries } from '../../constants';
import { UseGafpriStorageReturn, UseGafpriSitesReturn } from '../../states';
import {
  Input,
  InputProps,
  GsSelectPropsExtended,
  SelectCountry,
  SelectStateCountry,
  InputStateCountry,
  SelectCity,
  InputCity as GeneralInputCity,
  InputName,
  InputAddress1,
  InputAddress2,
  InputZipCode,
  SelectSite,
} from '../Input';

export type StorageFormProps = {
  use: UseGafpriStorageReturn;
  useSites: UseGafpriSitesReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;

  nameContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;

  addressContainerProps?: ContainerButtonPropsExtended;
  address1InputProps?: InputProps;
  address2InputProps?: InputProps;
  cityStateContainerProps?: ContainerButtonPropsExtended;
  cityInputProps?: InputProps;
  stateInputProps?: InputProps;
  citySelectProps?: GsSelectPropsExtended;
  stateSelectProps?: GsSelectPropsExtended;
  countryContainerProps?: ContainerButtonPropsExtended;
  countryInputProps?: InputProps;
  countrySelectProps?: GsSelectPropsExtended;
  postCodeInputProps?: InputProps;
  siteSelectProps?: GsSelectPropsExtended;
};

export type StorageFormPropsExtended = {
  use?: UseGafpriStorageReturn;
  formType?: 'add' | 'update';
  useSites?: UseGafpriSitesReturn;
  modelFormProps?: ModelFormPropsExtended;
  nameContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  addressContainerProps?: ContainerButtonPropsExtended;
  address1InputProps?: InputProps;
  address2InputProps?: InputProps;
  cityStateContainerProps?: ContainerButtonPropsExtended;
  cityInputProps?: InputProps;
  stateInputProps?: InputProps;
  citySelectProps?: GsSelectPropsExtended;
  stateSelectProps?: GsSelectPropsExtended;
  countryContainerProps?: ContainerButtonPropsExtended;
  countryInputProps?: InputProps;
  countrySelectProps?: GsSelectPropsExtended;
  postCodeInputProps?: InputProps;
  siteSelectProps?: GsSelectPropsExtended;
};

export const StorageForm = ({
  use,
  useSites,
  formType,
  modelFormProps,
  nameContainerProps,
  nameInputProps,
  addressContainerProps,
  address1InputProps,
  address2InputProps,
  cityStateContainerProps,
  cityInputProps,
  stateInputProps,
  citySelectProps,
  stateSelectProps,
  countryContainerProps,
  countryInputProps,
  countrySelectProps,
  postCodeInputProps,
  siteSelectProps,
}: StorageFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);
  const [InputSite, setInputSite] = React.useState(<></>);

  const currentStorage = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationAddress1(use.attributes.states.address1);
    use.attributes.actions.validationAddress2(use.attributes.states.address2);
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
    use.attributes.actions.validationSite(use.attributes.states.site);
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.name,
    use.attributes.states.address1,
    use.attributes.states.address2,
    use.attributes.states.city,
    use.attributes.states.state,
    use.attributes.states.postCode,
    use.attributes.states.country,
    use.attributes.states.site,
    InputCity,
    InputState,
    InputCountry,
    InputSite,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.nameValid,
    use.attributes.states.address1Valid,
    use.attributes.states.address2Valid,
    use.attributes.states.cityValid,
    use.attributes.states.stateCountryValid,
    use.attributes.states.countryValid,
    use.attributes.states.postCodeValid,
    use.attributes.states.siteValid,
  ]);

  React.useEffect(() => {
    if (currentStorage) {
      if (currentStorage.name)
        use.attributes.actions.changeName(currentStorage.name);

      if (currentStorage.address1)
        use.attributes.actions.changeAddress1(currentStorage.address1);

      if (currentStorage.address2)
        use.attributes.actions.changeAddress2(currentStorage.address2);

      if (currentStorage.country)
        use.attributes.actions.setCountry(currentStorage.country);

      if (currentStorage.state)
        use.attributes.actions.setStateCountry(currentStorage.state);

      if (currentStorage.city)
        use.attributes.actions.changeCity({
          label: currentStorage.city,
          value: currentStorage.city,
        });

      if (currentStorage.postCode)
        use.attributes.actions.changePostCode(currentStorage.postCode);

      if (currentStorage.sitesId) {
        const currentSite = useSites.data.actions.getById(
          currentStorage.sitesId
        );
        if (currentSite) {
          const sitesValue = {
            label: currentSite.name,
            value: `${currentStorage.sitesId}`,
          };

          use.attributes.actions.changeSite(sitesValue);

          setInputSite((): JSX.Element => {
            return (
              <SelectSite
                changeSite={(event) => use.attributes.actions.changeSite(event)}
                props={{
                  defaultValue: sitesValue,
                  styles: {
                    width: '90%',
                  },
                  options: use.attributes.states.siteOptions,
                }}
                {...siteSelectProps}
              />
            );
          });
        }
      }
    }

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
            }}
            {...countrySelectProps}
          />
        );
      });

      setInputSite((): JSX.Element => {
        return (
          <SelectSite
            changeSite={(event) => use.attributes.actions.changeSite(event)}
            props={{
              defaultValue: use.attributes.states.siteDefault,
              styles: {
                width: '90%',
              },
              options: use.attributes.states.siteOptions,
            }}
            {...siteSelectProps}
          />
        );
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                ...stateSelectProps,
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
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...stateInputProps,
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
                ...citySelectProps,
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
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...cityInputProps,
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
    if (isUpdateForm && currentStorage) {
      const labelCountry = Countries[0][currentStorage.country];
      const labelStateCountry =
        StatesCountries[0][currentStorage.country][0][currentStorage.state];

      setInputCountry((): JSX.Element => {
        return (
          <Input
            inputProps={{
              placeholder: 'Pais',
              type: 'text',
              id: 'countrySite',
              defaultValue: labelCountry,
              readOnly: true,
            }}
            styles={{
              padding: '10px 19px',
              width: '90%',
            }}
            {...countryInputProps}
          />
        );
      });

      setInputState((): JSX.Element => {
        return (
          <Input
            inputProps={{
              placeholder: 'Estado',
              type: 'text',
              id: 'stateCountrySite',
              defaultValue: labelStateCountry,
              readOnly: true,
            }}
            styles={{
              padding: '10px 19px',
              width: '90%',
            }}
            {...stateInputProps}
          />
        );
      });

      setInputCity((): JSX.Element => {
        return (
          <Input
            inputProps={{
              placeholder: 'Ciudad',
              type: 'text',
              id: 'citySite',
              defaultValue: use.attributes.states.city,
              readOnly: true,
            }}
            styles={{
              padding: '10px 19px',
              width: '90%',
            }}
            {...cityInputProps}
          />
        );
      });
    }
  }, [currentStorage, use.attributes.states.city]);

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

  const title1Text = isAddForm ? 'Nuevo Deposito' : 'Actualizar Deposito';
  const title2Text = isAddForm
    ? 'Agrega un nuevo Deposito'
    : `Actualiza la información del deposito #${currentStorage?.postsId}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;

  const returnInit = () => {
    setInputState(<></>);
    setInputCountry(<></>);
    use.pages.actions.returnInit();
  };

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        returnInit();
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
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...nameContainerProps}
        >
          <>
            <InputName
              changeName={use.attributes.actions.changeName}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.name,
                },
                styles: {
                  width: '90%',
                  padding: '10px 19px',
                },
                ...nameInputProps,
              }}
            />
            {InputSite}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...addressContainerProps}
        >
          <>
            <InputAddress1
              changeAddress1={use.attributes.actions.changeAddress1}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.address1,
                },
                styles: {
                  width: '90%',
                  padding: '10px 19px',
                },
                ...address1InputProps,
              }}
            />
            <InputAddress2
              changeAddress2={use.attributes.actions.changeAddress2}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.address2,
                },
                styles: {
                  width: '90%',
                  padding: '10px 19px',
                },
                ...address2InputProps,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...cityStateContainerProps}
        >
          <>
            {InputCity}
            {InputState}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...countryContainerProps}
        >
          <>
            {InputCountry}
            <InputZipCode
              changeZipCode={use.attributes.actions.changePostCode}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.postCode,
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...postCodeInputProps,
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
