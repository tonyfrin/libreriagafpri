import React from 'react';
import {
  Input,
  SelectDocumentIdIndex,
  SelectCity,
  InputCity as GeneralInputCity,
  SelectStateCountry,
  InputStateCountry,
  SelectCountry,
  SelectCurrencies,
  SelectCurrenciesLocations,
  SelectCurrenciesSeparator,
  SelectCurrenciesDecimalNumbers,
  SelectTaxes,
  InputName,
  InputDocumentiIdDigit,
  InputAddress1,
  InputAddress2,
  InputZipCode,
  InputPhone,
  InputEmail,
  InputWebSite,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseSitesReturn, UseCurrenciesReturn } from '../../states';
import { StatesCountries, Countries } from '../../constants';

export type SitesFormProps = {
  use: UseSitesReturn;
  formType: 'add' | 'update';
  useCurrencies: UseCurrenciesReturn;
  modelFormProps?: ModelFormPropsExtended;
  nameContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  documentContainerProps?: ContainerButtonPropsExtended;
  documentTypeSelectProps?: GsSelectPropsExtended;
  documentNumberInputProps?: InputProps;
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
  phoneEmailContainerProps?: ContainerButtonPropsExtended;
  phoneInputProps?: InputProps;
  emailInputProps?: InputProps;
  currenciesContainerProps?: ContainerButtonPropsExtended;
  currencySelectProps?: GsSelectPropsExtended;
  currencyLocationSelectProps?: GsSelectPropsExtended;
  separatorDecimalContainerProps?: ContainerButtonPropsExtended;
  separatorSelectProps?: GsSelectPropsExtended;
  decimalSelectProps?: GsSelectPropsExtended;
  taxesHostContainerProps?: ContainerButtonPropsExtended;
  taxesSelectProps?: GsSelectPropsExtended;
  hostInputProps?: InputProps;
};

export type SitesFormPropsExtended = {
  use?: UseSitesReturn;
  formType?: 'add' | 'update';
  useCurrencies?: UseCurrenciesReturn;
  modelFormProps?: ModelFormPropsExtended;
  nameContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  documentContainerProps?: ContainerButtonPropsExtended;
  documentTypeSelectProps?: GsSelectPropsExtended;
  documentNumberInputProps?: InputProps;
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
  phoneEmailContainerProps?: ContainerButtonPropsExtended;
  phoneInputProps?: InputProps;
  emailInputProps?: InputProps;
  currenciesContainerProps?: ContainerButtonPropsExtended;
  currencySelectProps?: GsSelectPropsExtended;
  currencyLocationSelectProps?: GsSelectPropsExtended;
  separatorDecimalContainerProps?: ContainerButtonPropsExtended;
  separatorSelectProps?: GsSelectPropsExtended;
  decimalSelectProps?: GsSelectPropsExtended;
  taxesHostContainerProps?: ContainerButtonPropsExtended;
  taxesSelectProps?: GsSelectPropsExtended;
  hostInputProps?: InputProps;
};

export const SitesForm = ({
  use,
  formType,
  useCurrencies,
  modelFormProps,
  nameContainerProps,
  nameInputProps,
  documentContainerProps,
  documentTypeSelectProps,
  documentNumberInputProps,
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
  phoneEmailContainerProps,
  phoneInputProps,
  emailInputProps,
  currenciesContainerProps,
  currencySelectProps,
  currencyLocationSelectProps,
  separatorDecimalContainerProps,
  separatorSelectProps,
  decimalSelectProps,
  taxesHostContainerProps,
  taxesSelectProps,
  hostInputProps,
}: SitesFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputTypeDocument, setInputTypeDocument] = React.useState(<></>);
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);
  const [InputCurrency, setInputCurrency] = React.useState(<></>);
  const [InputCurrencyLocation, setInputCurrencyLocation] = React.useState(
    <></>
  );
  const [InputSeparator, setInputSeparator] = React.useState(<></>);
  const [InputDecimalNumbers, setInputDecimalNumbers] = React.useState(<></>);
  const [InputTaxes, setInputTaxes] = React.useState(<></>);

  const currentSite = isUpdateForm
    ? use.actions.getById(use.states.siteId)
    : null;

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationDocumentIndex(use.states.documentIndex);
    use.actions.validationDocumentNumber(use.states.documentNumber);
    use.actions.validationAddress1(use.states.address1);
    use.actions.validationAddress2(use.states.address2);
    use.actions.validationCity(use.states.city);
    use.actions.validationStateCountry(use.states.state);
    use.actions.validationCountry(use.states.country);
    use.actions.validationPostCode(use.states.postCode);
    use.actions.validationEmail(use.states.email);
    use.actions.validationPhone(use.states.phone);

    const currenciesId =
      use.states.currenciesId === 0 ? '' : use.states.currenciesId;
    use.actions.validationCurrenciesId(`${currenciesId}`);
    use.actions.validationCurrencyLocation(use.states.currencyLocation);
    use.actions.validationSeparator(use.states.thousandsSeparator);
    use.actions.validationSeparator(use.states.decimalSeparator);

    use.actions.validationDecimalNumbers(`${use.states.decimalNumbers}`);
    use.actions.validationTaxes(`${use.states.taxes}`);
    use.actions.validationHost(use.states.host);
    use.actions.validationButtonNext();
  }, [
    use.states.name,
    use.states.documentIndex,
    use.states.documentNumber,
    use.states.address1,
    use.states.address2,
    use.states.city,
    use.states.state,
    use.states.postCode,
    use.states.country,
    use.states.email,
    use.states.phone,
    use.states.currenciesId,
    use.states.currencyLocation,
    use.states.thousandsSeparator,
    use.states.decimalSeparator,
    use.states.decimalNumbers,
    use.states.taxes,
    use.states.host,
    InputTypeDocument,
    InputCity,
    InputState,
    InputCountry,
    InputCurrency,
    InputCurrencyLocation,
    InputSeparator,
    InputDecimalNumbers,
    InputTaxes,
  ]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [
    use.states.nameValid,
    use.states.documentIndexValid,
    use.states.documentNumberValid,
    use.states.address1Valid,
    use.states.address2Valid,
    use.states.cityValid,
    use.states.stateCountryValid,
    use.states.countryValid,
    use.states.postCodeValid,
    use.states.emailValid,
    use.states.phoneValid,
    use.states.currenciesIdValid,
    use.states.currencyLocationValid,
    use.states.separatorValid,
    use.states.decimalNumbersValid,
    use.states.taxesValid,
    use.states.hostValid,
  ]);

  React.useEffect(() => {
    if (currentSite) {
      if (currentSite.name) use.actions.changeName(currentSite.name);

      if (currentSite.documentIndex) {
        const labelDocumentIndex =
          currentSite.documentIndex === 'null'
            ? 'No Aplica'
            : currentSite.documentIndex;
        use.actions.changeDocumentIndex({
          label: labelDocumentIndex,
          value: currentSite.documentIndex,
        });
      }

      if (currentSite.documentNumber)
        use.actions.changeDocumentNumber(currentSite.documentNumber);

      if (currentSite.address1)
        use.actions.changeAddress1(currentSite.address1);

      if (currentSite.address2)
        use.actions.changeAddress2(currentSite.address2);

      if (currentSite.country) use.actions.setCountry(currentSite.country);

      if (currentSite.state) use.actions.setStateCountry(currentSite.state);

      if (currentSite.city)
        use.actions.changeCity({
          label: currentSite.city,
          value: currentSite.city,
        });

      if (currentSite.postCode)
        use.actions.changePostCode(currentSite.postCode);

      if (currentSite.email) use.actions.changeEmail(currentSite.email);

      if (currentSite.phone) use.actions.changePhone(currentSite.phone);

      if (currentSite.currenciesId) {
        const labelCurrenciesId = useCurrencies.actions.getById(
          currentSite.currenciesId
        )?.name;
        use.actions.changeCurrenciesId({
          label: `${labelCurrenciesId}`,
          value: `${currentSite.currenciesId}`,
        });
      }

      if (currentSite.currencyLocation) {
        const labelCurrencyLocation =
          currentSite.currencyLocation === 'left'
            ? 'Izquierda'
            : currentSite.currencyLocation === 'right'
            ? 'Derecha'
            : '';
        use.actions.changeCurrencyLocation({
          label: labelCurrencyLocation,
          value: currentSite.currencyLocation,
        });
      }

      if (currentSite.thousandsSeparator) {
        const labelSeparator =
          currentSite.thousandsSeparator === '.'
            ? 'Miles: " . "    Decimal: " , "'
            : currentSite.thousandsSeparator === ','
            ? 'Miles: " , "    Decimal: " . "'
            : '';
        use.actions.changeSeparator({
          label: labelSeparator,
          value: currentSite.thousandsSeparator,
        });
      }

      if (typeof currentSite.decimalNumbers !== 'undefined') {
        use.actions.changeDecimalNumbers({
          label: `${currentSite.decimalNumbers}`,
          value: `${currentSite.decimalNumbers}`,
        });
      }

      if (typeof currentSite.taxes !== 'undefined') {
        const labelTaxes = currentSite.taxes
          ? 'Si trabaja con impuestos'
          : 'No trabaja con impuestos';
        use.actions.changeTaxes({
          label: labelTaxes,
          value: `${currentSite.taxes}`,
        });
      }

      if (currentSite.host) use.actions.changeHost(currentSite.host);
    }

    if (isAddForm) {
      setInputTypeDocument((): JSX.Element => {
        return (
          <SelectDocumentIdIndex
            changeIndex={(event) => use.actions.changeDocumentIndex(event)}
            props={{
              options: use.states.documentIndexOptions,
              defaultValue: use.states.documentIndexDefault,
              styles: {
                width: '90%',
              },
              ...documentTypeSelectProps,
            }}
          />
        );
      });

      setInputCountry((): JSX.Element => {
        return (
          <SelectCountry
            changeCountry={(event) => use.actions.changeCountry(event)}
            props={{
              options: use.states.countryOptions,
              defaultValue: use.states.countryDefault,
              styles: {
                width: '90%',
              },
              ...countrySelectProps,
            }}
          />
        );
      });

      setInputCurrency((): JSX.Element => {
        return (
          <SelectCurrencies
            changeCurrencies={(event) => use.actions.changeCurrenciesId(event)}
            props={{
              options: use.states.currenciesIdOptions,
              defaultValue: use.states.currenciesIdDefault,
              styles: {
                width: '90%',
              },
              ...currencySelectProps,
            }}
          />
        );
      });

      setInputCurrencyLocation((): JSX.Element => {
        return (
          <SelectCurrenciesLocations
            changeCurrenciesLocations={(event) =>
              use.actions.changeCurrencyLocation(event)
            }
            props={{
              options: use.states.currencyLocationOptions,
              defaultValue: use.states.currencyLocationDefault,
              styles: {
                width: '90%',
              },
              ...currencyLocationSelectProps,
            }}
          />
        );
      });

      setInputSeparator((): JSX.Element => {
        return (
          <SelectCurrenciesSeparator
            changeCurrenciesSeparator={(event) =>
              use.actions.changeSeparator(event)
            }
            props={{
              options: use.states.separatorOptions,
              defaultValue: use.states.separatorDefault,
              styles: {
                width: '90%',
              },
              ...separatorSelectProps,
            }}
          />
        );
      });

      setInputDecimalNumbers((): JSX.Element => {
        return (
          <SelectCurrenciesDecimalNumbers
            changeCurrenciesDecimalNumbers={(event) =>
              use.actions.changeDecimalNumbers(event)
            }
            props={{
              options: use.states.decimalNumbersOptions,
              defaultValue: use.states.decimalNumbersDefault,
              styles: {
                width: '90%',
              },
              ...decimalSelectProps,
            }}
          />
        );
      });

      setInputTaxes((): JSX.Element => {
        return (
          <SelectTaxes
            changeTaxes={(event) => use.actions.changeTaxes(event)}
            props={{
              options: use.states.taxesOptions,
              defaultValue: use.states.taxesDefault,
              styles: {
                width: '90%',
              },
              ...taxesSelectProps,
            }}
          />
        );
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (isAddForm) {
      if (use.states.stateCountryOptions.length > 0) {
        setInputState((): JSX.Element => {
          return (
            <SelectStateCountry
              changeStateCountry={(event) =>
                use.actions.changeStateCountry(event)
              }
              props={{
                options: use.states.stateCountryOptions,
                defaultValue: use.states.stateCountryDefault,
                styles: {
                  width: '90%',
                },
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
                use.actions.changeStateCountry(event)
              }
              props={{
                inputProps: {
                  defaultValue: use.states.state,
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

      if (use.states.cityOptions.length > 0) {
        setInputCity((): JSX.Element => {
          return (
            <SelectCity
              changeCity={(event) => use.actions.changeCity(event)}
              props={{
                options: use.states.cityOptions,
                defaultValue: use.states.cityDefault,
                styles: {
                  width: '90%',
                },
                ...citySelectProps,
              }}
            />
          );
        });
      } else {
        setInputCity((): JSX.Element => {
          return (
            <GeneralInputCity
              changeCity={(event) => use.actions.changeCity(event)}
              props={{
                inputProps: {
                  defaultValue: use.states.city,
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
    use.states.country,
    use.states.stateCountryOptions,
    use.states.cityOptions,
  ]);

  React.useEffect(() => {
    if (isUpdateForm) {
      if (
        use.states.documentIndexDefault?.label !== 'Elija el tipo de Documento'
      ) {
        setInputTypeDocument((): JSX.Element => {
          return (
            <SelectDocumentIdIndex
              changeIndex={(event) => use.actions.changeDocumentIndex(event)}
              props={{
                options: use.states.documentIndexOptions,
                defaultValue: use.states.documentIndexDefault,
                styles: {
                  width: '90%',
                },
                ...documentTypeSelectProps,
              }}
            />
          );
        });
      }

      if (
        use.states.currenciesIdDefault?.label !== 'Elija la moneda del Sitio'
      ) {
        setInputCurrency((): JSX.Element => {
          return (
            <SelectCurrencies
              changeCurrencies={(event) =>
                use.actions.changeCurrenciesId(event)
              }
              props={{
                options: use.states.currenciesIdOptions,
                defaultValue: use.states.currenciesIdDefault,
                styles: {
                  width: '90%',
                },
                ...currencySelectProps,
              }}
            />
          );
        });
      }

      if (
        use.states.currencyLocationDefault?.label !==
        'Elija la ubicación del símbolo de la moneda'
      ) {
        setInputCurrencyLocation((): JSX.Element => {
          return (
            <SelectCurrenciesLocations
              changeCurrenciesLocations={(event) =>
                use.actions.changeCurrencyLocation(event)
              }
              props={{
                options: use.states.currencyLocationOptions,
                defaultValue: use.states.currencyLocationDefault,
                styles: {
                  width: '90%',
                },
                ...currencyLocationSelectProps,
              }}
            />
          );
        });
      }

      if (
        use.states.separatorDefault?.label !==
        'Selecciona los separadores de la moneda'
      ) {
        setInputSeparator((): JSX.Element => {
          return (
            <SelectCurrenciesSeparator
              changeCurrenciesSeparator={(event) =>
                use.actions.changeSeparator(event)
              }
              props={{
                options: use.states.separatorOptions,
                defaultValue: use.states.separatorDefault,
                styles: {
                  width: '90%',
                },
                ...separatorSelectProps,
              }}
            />
          );
        });
      }

      if (
        use.states.decimalNumbersDefault?.label !==
        'Selecciona el número de decimales'
      ) {
        setInputDecimalNumbers((): JSX.Element => {
          return (
            <SelectCurrenciesDecimalNumbers
              changeCurrenciesDecimalNumbers={(event) =>
                use.actions.changeDecimalNumbers(event)
              }
              props={{
                options: use.states.decimalNumbersOptions,
                defaultValue: use.states.decimalNumbersDefault,
                styles: {
                  width: '90%',
                },
                ...decimalSelectProps,
              }}
            />
          );
        });
      }

      if (
        use.states.taxesDefault?.label !==
        'Selecciona la opción para los impuestos'
      ) {
        setInputTaxes((): JSX.Element => {
          return (
            <SelectTaxes
              changeTaxes={(event) => use.actions.changeTaxes(event)}
              props={{
                options: use.states.taxesOptions,
                defaultValue: use.states.taxesDefault,
                styles: {
                  width: '90%',
                },
                ...taxesSelectProps,
              }}
            />
          );
        });
      }
    }
  }, [use.states.documentIndexDefault]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (isUpdateForm && currentSite) {
      const labelCountry = Countries[0][currentSite.country];
      const labelStateCountry =
        StatesCountries[0][currentSite.country][0][currentSite.state];

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
          <InputStateCountry
            changeStateCountry={(event) =>
              use.actions.changeStateCountry(event)
            }
            props={{
              inputProps: {
                defaultValue: labelStateCountry,
                readOnly: true,
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

      setInputCity((): JSX.Element => {
        return (
          <GeneralInputCity
            changeCity={(event) => use.actions.changeCity(event)}
            props={{
              inputProps: {
                defaultValue: use.states.city,
                readOnly: true,
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
  }, [currentSite, use.states.city]);

  React.useEffect(() => {
    if (isAddForm) {
      use.actions.changeCityOptions();
    }
  }, [use.actions.changeCityOptions]);

  React.useEffect(() => {
    if (isAddForm) {
      use.actions.changeStateCountryOptions();
    }
  }, [use.actions.changeStateCountryOptions]);

  const title1Text = isAddForm ? 'Nuevo Sitio' : 'Actualizar Sitio';
  const title2Text = isAddForm
    ? 'Agrega un nuevo Sitio'
    : `Actualiza la información del sitio #${currentSite?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.actions.add : use.actions.update;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.actions.returnInit();
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
      error={use.states.error}
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...nameContainerProps}
        >
          <>
            <InputName
              changeName={(event) => use.actions.changeName(event)}
              props={{
                inputProps: {
                  defaultValue: use.states.name,
                },
                styles: {
                  width: '100%',
                  padding: '10px 19px',
                },
                ...nameInputProps,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...documentContainerProps}
        >
          <>
            {InputTypeDocument}

            <InputDocumentiIdDigit
              changeDocumentiIdDigit={(event) =>
                use.actions.changeDocumentNumber(event)
              }
              props={{
                inputProps: {
                  defaultValue: use.states.documentNumber,
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...documentNumberInputProps,
              }}
            />
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
              changeAddress1={(event) => use.actions.changeAddress1(event)}
              props={{
                inputProps: {
                  defaultValue: use.states.address1,
                },
                styles: {
                  width: '90%',
                  padding: '10px 19px',
                },
                ...address1InputProps,
              }}
            />

            <InputAddress2
              changeAddress2={(event) => use.actions.changeAddress2(event)}
              props={{
                inputProps: {
                  defaultValue: use.states.address2,
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
              changeZipCode={(event) => use.actions.changePostCode(event)}
              props={{
                inputProps: {
                  defaultValue: use.states.postCode,
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
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...phoneEmailContainerProps}
        >
          <>
            <InputPhone
              changePhone={(event) => use.actions.changePhone(event)}
              props={{
                inputProps: {
                  defaultValue: use.states.phone,
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...phoneInputProps,
              }}
            />
            <InputEmail
              changeEmail={(event) => use.actions.changeEmail(event)}
              props={{
                inputProps: {
                  defaultValue: use.states.email,
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...emailInputProps,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...currenciesContainerProps}
        >
          <>
            {InputCurrency}
            {InputCurrencyLocation}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...separatorDecimalContainerProps}
        >
          <>
            {InputSeparator}
            {InputDecimalNumbers}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...taxesHostContainerProps}
        >
          <>
            {InputTaxes}
            <InputWebSite
              changeWebSite={(event) => use.actions.changeHost(event)}
              props={{
                inputProps: {
                  defaultValue: use.states.host,
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...hostInputProps,
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
