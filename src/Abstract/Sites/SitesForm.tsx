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
  SelectType,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm, PhotoGalleryForm, PhotoProduct } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseGafpriSitesReturn, UseCurrenciesReturn } from '../../states';
import { StatesCountries, Countries } from '../../constants';
import { SliderHorizontal } from '../Slider';

export type SitesFormProps = {
  use: UseGafpriSitesReturn;
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
  use?: UseGafpriSitesReturn;
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
  const [InputType, setInputType] = React.useState(<></>);

  const currentSite = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.siteId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDocumentIndex(
      use.attributes.states.documentIndex
    );
    use.attributes.actions.validationDocumentNumber(
      use.attributes.states.documentNumber
    );
    use.attributes.actions.validationAddress1(use.attributes.states.address1);
    use.attributes.actions.validationAddress2(use.attributes.states.address2);
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
    use.attributes.actions.validationEmail(use.attributes.states.email);
    use.attributes.actions.validationPhone(use.attributes.states.phone);

    const currenciesId =
      use.attributes.states.currenciesId === 0
        ? ''
        : use.attributes.states.currenciesId;
    use.attributes.actions.validationCurrenciesId(`${currenciesId}`);
    use.attributes.actions.validationCurrencyLocation(
      use.attributes.states.currencyLocation
    );
    use.attributes.actions.validationSeparator(
      use.attributes.states.thousandsSeparator
    );
    use.attributes.actions.validationSeparator(
      use.attributes.states.decimalSeparator
    );

    use.attributes.actions.validationDecimalNumbers(
      `${use.attributes.states.decimalNumbers}`
    );
    use.attributes.actions.validationTaxes(`${use.attributes.states.taxes}`);
    use.attributes.actions.validationHost(use.attributes.states.host);
    use.attributes.actions.validationType(use.attributes.states.type);
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.name,
    use.attributes.states.documentIndex,
    use.attributes.states.documentNumber,
    use.attributes.states.address1,
    use.attributes.states.address2,
    use.attributes.states.city,
    use.attributes.states.state,
    use.attributes.states.postCode,
    use.attributes.states.country,
    use.attributes.states.email,
    use.attributes.states.phone,
    use.attributes.states.currenciesId,
    use.attributes.states.currencyLocation,
    use.attributes.states.thousandsSeparator,
    use.attributes.states.decimalSeparator,
    use.attributes.states.decimalNumbers,
    use.attributes.states.taxes,
    use.attributes.states.host,
    InputTypeDocument,
    InputCity,
    InputState,
    InputCountry,
    InputCurrency,
    InputCurrencyLocation,
    InputSeparator,
    InputDecimalNumbers,
    InputTaxes,
    InputType,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.nameValid,
    use.attributes.states.documentIndexValid,
    use.attributes.states.documentNumberValid,
    use.attributes.states.address1Valid,
    use.attributes.states.address2Valid,
    use.attributes.states.cityValid,
    use.attributes.states.stateCountryValid,
    use.attributes.states.countryValid,
    use.attributes.states.postCodeValid,
    use.attributes.states.emailValid,
    use.attributes.states.phoneValid,
    use.attributes.states.currenciesIdValid,
    use.attributes.states.currencyLocationValid,
    use.attributes.states.separatorValid,
    use.attributes.states.decimalNumbersValid,
    use.attributes.states.taxesValid,
    use.attributes.states.hostValid,
  ]);

  React.useEffect(() => {
    if (currentSite) {
      if (currentSite.name) use.attributes.actions.changeName(currentSite.name);

      if (currentSite.documentIndex) {
        const labelDocumentIndex =
          currentSite.documentIndex === 'null'
            ? 'No Aplica'
            : currentSite.documentIndex;
        use.attributes.actions.changeDocumentIndex({
          label: labelDocumentIndex,
          value: currentSite.documentIndex,
        });
      }

      if (currentSite.documentNumber)
        use.attributes.actions.changeDocumentNumber(currentSite.documentNumber);

      if (currentSite.address1)
        use.attributes.actions.changeAddress1(currentSite.address1);

      if (currentSite.address2)
        use.attributes.actions.changeAddress2(currentSite.address2);

      if (currentSite.country)
        use.attributes.actions.setCountry(currentSite.country);

      if (currentSite.state)
        use.attributes.actions.setStateCountry(currentSite.state);

      if (currentSite.city)
        use.attributes.actions.changeCity({
          label: currentSite.city,
          value: currentSite.city,
        });

      if (currentSite.postCode)
        use.attributes.actions.changePostCode(currentSite.postCode);

      if (currentSite.email)
        use.attributes.actions.changeEmail(currentSite.email);

      if (currentSite.phone)
        use.attributes.actions.changePhone(currentSite.phone);

      if (currentSite.currenciesId) {
        const labelCurrenciesId = useCurrencies.actions.getById(
          currentSite.currenciesId
        )?.name;
        use.attributes.actions.changeCurrenciesId({
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
        use.attributes.actions.changeCurrencyLocation({
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
        use.attributes.actions.changeSeparator({
          label: labelSeparator,
          value: currentSite.thousandsSeparator,
        });
      }

      if (typeof currentSite.decimalNumbers !== 'undefined') {
        use.attributes.actions.changeDecimalNumbers({
          label: `${currentSite.decimalNumbers}`,
          value: `${currentSite.decimalNumbers}`,
        });
      }

      if (typeof currentSite.taxes !== 'undefined') {
        const labelTaxes = currentSite.taxes
          ? 'Si trabaja con impuestos'
          : 'No trabaja con impuestos';
        use.attributes.actions.changeTaxes({
          label: labelTaxes,
          value: `${currentSite.taxes}`,
        });
      }

      if (currentSite.host) use.attributes.actions.changeHost(currentSite.host);
    }

    if (isAddForm) {
      setInputTypeDocument((): JSX.Element => {
        return (
          <SelectDocumentIdIndex
            changeIndex={(event) =>
              use.attributes.actions.changeDocumentIndex(event)
            }
            props={{
              options: use.attributes.states.documentIndexOptions,
              defaultValue: use.attributes.states.documentIndexDefault,
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
            changeCountry={(event) =>
              use.attributes.actions.changeCountry(event)
            }
            props={{
              options: use.attributes.states.countryOptions,
              defaultValue: use.attributes.states.countryDefault,
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
            changeCurrencies={(event) =>
              use.attributes.actions.changeCurrenciesId(event)
            }
            props={{
              options: use.attributes.states.currenciesIdOptions,
              defaultValue: use.attributes.states.currenciesIdDefault,
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
              use.attributes.actions.changeCurrencyLocation(event)
            }
            props={{
              options: use.attributes.states.currencyLocationOptions,
              defaultValue: use.attributes.states.currencyLocationDefault,
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
              use.attributes.actions.changeSeparator(event)
            }
            props={{
              options: use.attributes.states.separatorOptions,
              defaultValue: use.attributes.states.separatorDefault,
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
              use.attributes.actions.changeDecimalNumbers(event)
            }
            props={{
              options: use.attributes.states.decimalNumbersOptions,
              defaultValue: use.attributes.states.decimalNumbersDefault,
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
            changeTaxes={(event) => use.attributes.actions.changeTaxes(event)}
            props={{
              options: use.attributes.states.taxesOptions,
              defaultValue: use.attributes.states.taxesDefault,
              styles: {
                width: '90%',
              },
              ...taxesSelectProps,
            }}
          />
        );
      });

      setInputType((): JSX.Element => {
        return (
          <SelectType
            changeType={(event) => use.attributes.actions.changeType(event)}
            props={{
              options: use.attributes.states.typeOptions,
              defaultValue: use.attributes.states.typeDefault,
              styles: {
                width: '90%',
              },
            }}
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
                options: use.attributes.states.stateCountryOptions,
                defaultValue: use.attributes.states.stateCountryDefault,
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
                options: use.attributes.states.cityOptions,
                defaultValue: use.attributes.states.cityDefault,
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
    if (isUpdateForm) {
      if (
        use.attributes.states.documentIndexDefault?.label !==
        'Elija el tipo de Documento'
      ) {
        setInputTypeDocument((): JSX.Element => {
          return (
            <SelectDocumentIdIndex
              changeIndex={(event) =>
                use.attributes.actions.changeDocumentIndex(event)
              }
              props={{
                options: use.attributes.states.documentIndexOptions,
                defaultValue: use.attributes.states.documentIndexDefault,
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
        use.attributes.states.currenciesIdDefault?.label !==
        'Elija la moneda del Sitio'
      ) {
        setInputCurrency((): JSX.Element => {
          return (
            <SelectCurrencies
              changeCurrencies={(event) =>
                use.attributes.actions.changeCurrenciesId(event)
              }
              props={{
                options: use.attributes.states.currenciesIdOptions,
                defaultValue: use.attributes.states.currenciesIdDefault,
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
        use.attributes.states.currencyLocationDefault?.label !==
        'Elija la ubicación del símbolo de la moneda'
      ) {
        setInputCurrencyLocation((): JSX.Element => {
          return (
            <SelectCurrenciesLocations
              changeCurrenciesLocations={(event) =>
                use.attributes.actions.changeCurrencyLocation(event)
              }
              props={{
                options: use.attributes.states.currencyLocationOptions,
                defaultValue: use.attributes.states.currencyLocationDefault,
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
        use.attributes.states.separatorDefault?.label !==
        'Selecciona los separadores de la moneda'
      ) {
        setInputSeparator((): JSX.Element => {
          return (
            <SelectCurrenciesSeparator
              changeCurrenciesSeparator={(event) =>
                use.attributes.actions.changeSeparator(event)
              }
              props={{
                options: use.attributes.states.separatorOptions,
                defaultValue: use.attributes.states.separatorDefault,
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
        use.attributes.states.decimalNumbersDefault?.label !==
        'Selecciona el número de decimales'
      ) {
        setInputDecimalNumbers((): JSX.Element => {
          return (
            <SelectCurrenciesDecimalNumbers
              changeCurrenciesDecimalNumbers={(event) =>
                use.attributes.actions.changeDecimalNumbers(event)
              }
              props={{
                options: use.attributes.states.decimalNumbersOptions,
                defaultValue: use.attributes.states.decimalNumbersDefault,
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
        use.attributes.states.taxesDefault?.label !==
        'Selecciona la opción para los impuestos'
      ) {
        setInputTaxes((): JSX.Element => {
          return (
            <SelectTaxes
              changeTaxes={(event) => use.attributes.actions.changeTaxes(event)}
              props={{
                options: use.attributes.states.taxesOptions,
                defaultValue: use.attributes.states.taxesDefault,
                styles: {
                  width: '90%',
                },
                ...taxesSelectProps,
              }}
            />
          );
        });
      }

      if (use.attributes.states.typeDefault?.value !== '') {
        setInputType((): JSX.Element => {
          return (
            <SelectType
              changeType={(event) => use.attributes.actions.changeType(event)}
              props={{
                options: use.attributes.states.typeOptions,
                defaultValue: use.attributes.states.typeDefault,
                styles: {
                  width: '90%',
                },
              }}
            />
          );
        });
      }
    }
  }, [use.attributes.states.documentIndexDefault]); // eslint-disable-line react-hooks/exhaustive-deps

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
              use.attributes.actions.changeStateCountry(event)
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
            changeCity={(event) => use.attributes.actions.changeCity(event)}
            props={{
              inputProps: {
                defaultValue: use.attributes.states.city,
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
  }, [currentSite, use.attributes.states.city]);

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

  const title1Text = isAddForm ? 'Nuevo Sitio' : 'Actualizar Sitio';
  const title2Text = isAddForm
    ? 'Agrega un nuevo Sitio'
    : `Actualiza la información del sitio #${currentSite?.id}`;

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
      error={use.attributes.states.error}
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
              changeName={(event) => use.attributes.actions.changeName(event)}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.name,
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
                use.attributes.actions.changeDocumentNumber(event)
              }
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.documentNumber,
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
              changeAddress1={(event) =>
                use.attributes.actions.changeAddress1(event)
              }
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
              changeAddress2={(event) =>
                use.attributes.actions.changeAddress2(event)
              }
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
              changeZipCode={(event) =>
                use.attributes.actions.changePostCode(event)
              }
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
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...taxesHostContainerProps}
        >
          <>
            <Input
              styles={{
                padding: '10px 19px',
                width: '90%',
              }}
              inputProps={{
                placeholder: 'Latitud',
                type: 'text',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.attributes.actions.setLatitude(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.attributes.states.latitude,
              }}
            />
            <Input
              styles={{
                padding: '10px 19px',
                width: '90%',
              }}
              inputProps={{
                placeholder: 'Longitud',
                type: 'text',
                onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) =>
                  use.attributes.actions.setLongitude(
                    (event.target as HTMLInputElement).value
                  ),
                defaultValue: use.attributes.states.longitude,
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
              changePhone={(event) => use.attributes.actions.changePhone(event)}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.phone,
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...phoneInputProps,
              }}
            />
            <InputEmail
              changeEmail={(event) => use.attributes.actions.changeEmail(event)}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.email,
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
              changeWebSite={(event) =>
                use.attributes.actions.changeHost(event)
              }
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.host,
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
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...taxesHostContainerProps}
        >
          <>{InputType}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...taxesHostContainerProps}
        >
          <>{InputType}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...taxesHostContainerProps}
        >
          <>
            <PhotoProduct
              photo={use.attributes.states.image}
              changePhoto={use.attributes.actions.changeImage}
              changeError={use.error.actions.changeError}
              submitting={use.attributes.states.submitting}
              setSubmitting={use.attributes.actions.setSubmitting}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            display: 'block',
          }}
        >
          <>
            <SliderHorizontal
              title="Galería de Imágenes"
              images={use.attributes.states.galleryImage}
              remove={use.attributes.actions.removeGalleryImage}
            />
            <PhotoGalleryForm
              changePhoto={use.attributes.actions.changeGalleryImage}
              formId="photo-form"
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
