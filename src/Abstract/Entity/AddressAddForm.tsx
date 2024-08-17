import React from 'react';
import {
  SelectAddressType,
  SelectCity,
  InputCity as InputCityGeneral,
  SelectStateCountry,
  InputStateCountry,
  SelectCountry,
  InputAddress1,
  InputAddress2,
  InputZipCode,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseGafpriEntityReturn } from '../../states';

export type AddressFormProps = {
  use: UseGafpriEntityReturn;
  inputCityProps?: InputProps;
  selectCityProps?: GsSelectPropsExtended;
  inputStateProps?: InputProps;
  selectStateProps?: GsSelectPropsExtended;
  selectCountryProps?: GsSelectPropsExtended;
  selectTypeProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  containerAddressProps?: ContainerButtonPropsExtended;
  inputAddress1Props?: InputProps;
  inputAddress2Props?: InputProps;
  containerCountryProps?: ContainerButtonPropsExtended;
  containerPostCodeProps?: ContainerButtonPropsExtended;
  inputPostCodeProps?: InputProps;
};

export type AddressFormPropsExtended = {
  inputCityProps?: InputProps;
  selectCityProps?: GsSelectPropsExtended;
  inputStateProps?: InputProps;
  selectStateProps?: GsSelectPropsExtended;
  selectCountryProps?: GsSelectPropsExtended;
  selectTypeProps?: GsSelectPropsExtended;
  mainTitle?: string;
  subTitle?: string;
  modelFormProps?: ModelFormPropsExtended;
  containerAddressProps?: ContainerButtonPropsExtended;
  inputAddress1Props?: InputProps;
  inputAddress2Props?: InputProps;
  containerCountryProps?: ContainerButtonPropsExtended;
  containerPostCodeProps?: ContainerButtonPropsExtended;
  inputPostCodeProps?: InputProps;
};

export const AddressAddForm = ({
  use,
  inputCityProps,
  selectCityProps,
  inputStateProps,
  selectStateProps,
  selectCountryProps,
  selectTypeProps,
  mainTitle = 'Nueva dirección',
  subTitle = 'Agregar nueva dirección',
  modelFormProps,
  containerAddressProps,
  inputAddress1Props,
  inputAddress2Props,
  containerCountryProps,
  containerPostCodeProps,
  inputPostCodeProps,
}: AddressFormProps): JSX.Element => {
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);
  const [InputType, setInputType] = React.useState(<></>);

  React.useEffect(() => {
    use.attributes.actions.validationAddressType(
      use.attributes.states.addressType
    );
    use.attributes.actions.validationAddress1(use.attributes.states.address1);
    use.attributes.actions.validationAddress2(use.attributes.states.address2);
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
  }, [
    use.attributes.states.address1,
    use.attributes.states.address2,
    use.attributes.states.city,
    InputCity,
    use.attributes.states.state,
    InputState,
    use.attributes.states.country,
    InputCountry,
    use.attributes.states.postCode,
    use.attributes.states.addressType,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNextAddress();
  }, [
    use.attributes.states.address1Valid,
    use.attributes.states.address2Valid,
    use.attributes.states.cityValid,
    use.attributes.states.stateCountryValid,
    use.attributes.states.countryValid,
    use.attributes.states.postCodeValid,
    use.attributes.states.addressTypeValid,
  ]);

  const buttonTitle = 'Agregar';

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.api.actions.addAddress();
        break;
      case 'return':
        use.pages.actions.goUpdate(use.attributes.states.currentId);
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  React.useEffect(() => {
    setInputCountry((): JSX.Element => {
      return (
        <SelectCountry
          changeCountry={(event) => use.attributes.actions.changeCountry(event)}
          props={{
            options: use.attributes.states.countryOptions,
            defaultValue: use.attributes.states.countryDefault,
            styles: {
              width: '89%',
            },
            ...selectCountryProps,
          }}
        />
      );
    });

    setInputType((): JSX.Element => {
      return (
        <SelectAddressType
          changeAddressType={(event) =>
            use.attributes.actions.changeAddressType(event)
          }
          props={{
            options: use.attributes.states.addressTypeOptions,
            defaultValue: use.attributes.states.addressTypeDefault,
            styles: {
              width: '92%',
            },
            ...selectTypeProps,
          }}
        />
      );
    });
  }, []);

  React.useEffect(() => {
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
                width: '89%',
              },
              ...selectStateProps,
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
                width: '89%',
              },
              ...inputStateProps,
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
                width: '89%',
              },
              ...selectCityProps,
            }}
          />
        );
      });
    } else {
      setInputCity((): JSX.Element => {
        return (
          <InputCityGeneral
            changeCity={(event) => use.attributes.actions.changeCity(event)}
            props={{
              inputProps: {
                defaultValue: use.attributes.states.city,
              },
              styles: {
                padding: '10px 19px',
                width: '89%',
              },
              ...inputCityProps,
            }}
          />
        );
      });
    }
  }, [
    use.attributes.states.country,
    use.attributes.states.stateCountryOptions,
    use.attributes.states.cityOptions,
  ]);

  React.useEffect(() => {
    use.attributes.actions.changeCityOptions();
  }, [use.attributes.actions.changeCityOptions]);

  React.useEffect(() => {
    use.attributes.actions.changeStateCountryOptions();
  }, [use.attributes.actions.changeStateCountryOptions]);

  return (
    <ModelForm
      titles={{
        title1: mainTitle,
        title2: subTitle,
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
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerAddressProps}
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
                  width: '92%',
                  padding: '09px 19px',
                },
                ...inputAddress1Props,
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
                  width: '92%',
                  padding: '09px 19px',
                },
                ...inputAddress2Props,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerCountryProps}
        >
          <>
            {InputCity}
            {InputState}
            {InputCountry}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerPostCodeProps}
        >
          <>
            <InputZipCode
              changeZipCode={(event) =>
                use.attributes.actions.changePostCode(event)
              }
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.postCode,
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...inputPostCodeProps,
              }}
            />
            {InputType}
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
