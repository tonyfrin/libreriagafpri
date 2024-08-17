import React from 'react';
import { css } from '@emotion/css';
import type { UseGafpriEntityReturn } from '../../states';
import {
  InputName,
  InputLastName,
  InputDocumentiIdDigit,
  InputAddress1,
  InputAddress2,
  InputZipCode,
  InputEmail,
  InputPhone,
  SelectDocumentIdIndex,
  SelectCity,
  InputCity as InputCityGeneral,
  SelectStateCountry,
  InputStateCountry,
  SelectCountry,
  SelectTypeDocumentIdId,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm, PhotoEntity } from '../Form';
import type { ModelFormPropsExtended, PhotoEntityProps } from '../Form';
import { ENTITY_ROUTE } from '../../constants';

export type EntityAddFormProps = {
  use: UseGafpriEntityReturn;
  formType: 'personal' | 'legal';
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  modelFormContainerProps?: ModelFormPropsExtended['boxProps'];
  nameProps?: InputProps;
  lastNameProps?: InputProps;
  typeDocumentIdIdProps?: GsSelectPropsExtended;
  containerDocumentProps?: ContainerButtonPropsExtended;
  indexProps?: GsSelectPropsExtended;
  digitProps?: InputProps;
  containerAddressProps?: ContainerButtonPropsExtended;
  address1Props?: InputProps;
  address2Props?: InputProps;
  containerCityStateProps?: ContainerButtonPropsExtended;
  cityInputProps?: InputProps;
  stateInputProps?: InputProps;
  citySelectProps?: GsSelectPropsExtended;
  stateSelectProps?: GsSelectPropsExtended;
  containerCountryProps?: ContainerButtonPropsExtended;
  countryProps?: GsSelectPropsExtended;
  codePostProps?: InputProps;
  containerEmailPhoneProps?: ContainerButtonPropsExtended;
  emailProps?: InputProps;
  phoneProps?: InputProps;
  propsPhoto?: PhotoEntityProps['props'];
  customHandleActions?: (action: string, value: any) => void;
};

export type EntityAddFormPropsExtended = {
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  loadingContainerStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  modelFormContainerProps?: ModelFormPropsExtended['boxProps'];
  nameProps?: InputProps;
  lastNameProps?: InputProps;
  typeDocumentIdIdProps?: GsSelectPropsExtended;
  containerDocumentProps?: ContainerButtonPropsExtended;
  indexProps?: GsSelectPropsExtended;
  digitProps?: InputProps;
  containerAddressProps?: ContainerButtonPropsExtended;
  address1Props?: InputProps;
  address2Props?: InputProps;
  containerCityStateProps?: ContainerButtonPropsExtended;
  cityInputProps?: InputProps;
  stateInputProps?: InputProps;
  citySelectProps?: GsSelectPropsExtended;
  stateSelectProps?: GsSelectPropsExtended;
  containerCountryProps?: ContainerButtonPropsExtended;
  countryProps?: GsSelectPropsExtended;
  codePostProps?: InputProps;
  containerEmailPhoneProps?: ContainerButtonPropsExtended;
  emailProps?: InputProps;
  phoneProps?: InputProps;
  customHandleActions?: (action: string, value: any) => void;
};

const defaultPhotoContainerStyle = css`
  width: 100%;
`;

const defaultPhotoMainContainerStyle = css`
  display: flex;
  justify-content: space-between;
`;

const defaultNameContainerStyle = css`
  width: 100%;
`;

export const EntityAddForm = ({
  use,
  formType,
  photoMainContainerStyle = defaultPhotoMainContainerStyle,
  photoContainerStyle = defaultPhotoContainerStyle,
  nameContainerStyle = defaultNameContainerStyle,
  modelFormProps,
  modelFormContainerProps,
  nameProps,
  lastNameProps,
  typeDocumentIdIdProps,
  containerDocumentProps,
  indexProps,
  digitProps,
  containerAddressProps,
  address1Props,
  address2Props,
  containerCityStateProps,
  cityInputProps,
  stateInputProps,
  citySelectProps,
  stateSelectProps,
  containerCountryProps,
  countryProps,
  codePostProps,
  containerEmailPhoneProps,
  emailProps,
  phoneProps,
  propsPhoto,
  customHandleActions,
}: EntityAddFormProps): JSX.Element => {
  const [InputTypeDocumentIdId, setInputTypeDocumentIdId] = React.useState(
    <></>
  );
  const [InputIndex, setInputIndex] = React.useState(<></>);
  const [InputCity, setInputCity] = React.useState(<></>);
  const [InputState, setInputState] = React.useState(<></>);
  const [InputCountry, setInputCountry] = React.useState(<></>);
  const isPersonalForm = formType === 'personal';

  React.useEffect(() => {
    use.attributes.actions.validationPhoto(use.attributes.states.photo);
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationLastName(use.attributes.states.lastName);
    const typeDocumentIdId =
      use.attributes.states.typeDocumentIdId === null
        ? ''
        : `${use.attributes.states.typeDocumentIdId}`;
    use.attributes.actions.validationTypeDocumentIdId(typeDocumentIdId);
    use.attributes.actions.validationIndex(use.attributes.states.index);
    use.attributes.actions.validationDigit(use.attributes.states.digit);
    use.attributes.actions.validationAddressType(
      use.attributes.states.addressType
    );
    use.attributes.actions.validationAddress1(use.attributes.states.address1);
    use.attributes.actions.validationAddress2(use.attributes.states.address2);
    use.attributes.actions.validationCity(use.attributes.states.city);
    use.attributes.actions.validationStateCountry(use.attributes.states.state);
    use.attributes.actions.validationCountry(use.attributes.states.country);
    use.attributes.actions.validationPostCode(use.attributes.states.postCode);
    use.attributes.actions.validationEmail(use.attributes.states.email);
    use.attributes.actions.validationPhone(use.attributes.states.phone);
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationType(use.attributes.states.type);
  }, [
    use.attributes.states.photo,
    use.attributes.states.name,
    use.attributes.states.lastName,
    use.attributes.states.typeDocumentIdId,
    InputTypeDocumentIdId,
    use.attributes.states.index,
    InputIndex,
    use.attributes.states.digit,
    use.attributes.states.address1,
    use.attributes.states.address2,
    use.attributes.states.city,
    InputCity,
    use.attributes.states.state,
    InputState,
    use.attributes.states.country,
    InputCountry,
    use.attributes.states.postCode,
    use.attributes.states.email,
    use.attributes.states.phone,
    use.attributes.states.status,
    use.attributes.states.type,
    use.attributes.states.addressType,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.photoValid,
    use.attributes.states.nameValid,
    use.attributes.states.lastNameValid,
    use.attributes.states.typeDocumentIdIdValid,
    use.attributes.states.indexValid,
    use.attributes.states.digitValid,
    use.attributes.states.address1Valid,
    use.attributes.states.address2Valid,
    use.attributes.states.cityValid,
    use.attributes.states.stateCountryValid,
    use.attributes.states.countryValid,
    use.attributes.states.postCodeValid,
    use.attributes.states.emailValid,
    use.attributes.states.phoneValid,
    use.attributes.states.statusValid,
    use.attributes.states.addressTypeValid,
  ]);

  React.useEffect(() => {
    use.attributes.actions.changeStatus({ value: 'active', label: 'Activo' });
    use.attributes.actions.changeAddressType({
      value: 'bill',
      label: 'Facturación',
    });
  }, []);

  const title1Text = isPersonalForm
    ? 'Nueva personal natural'
    : 'Nueva persona jurídica';

  const title2Text = isPersonalForm
    ? 'Agrega una nueva persona natural'
    : `Agrega una nueva persona jurídica`;

  const buttonTitle = 'Agregar';

  const returnInit = () => {
    setInputState(<></>);
    setInputCountry(<></>);
    use.pages.actions.returnInit();
  };

  const handleActions = (action: string, value: any): void => {
    switch (action) {
      case 'submit':
        use.api.actions.add();
        break;
      case 'return':
        returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  React.useEffect(() => {
    setInputTypeDocumentIdId((): JSX.Element => {
      return (
        <SelectTypeDocumentIdId
          changeTypeDocumentIdId={(e) =>
            use.attributes.actions.changeTypeDocumentIdId(e)
          }
          props={{
            options: use.attributes.states.typeDocumentIdIdOptions,
            defaultValue: use.attributes.states.typeDocumentIdIdDefault,
            styles: {
              width: '100%',
            },
            title: 'Tipo de documento',
            ...typeDocumentIdIdProps,
          }}
        />
      );
    });

    setInputIndex((): JSX.Element => {
      return (
        <SelectDocumentIdIndex
          changeIndex={(e) => use.attributes.actions.changeIndex(e)}
          props={{
            options: use.attributes.states.indexOptions,
            defaultValue: use.attributes.states.indexDefault,
            title: 'Índice de documento',
            styles: {
              width: '92%',
            },
            ...indexProps,
          }}
        />
      );
    });

    setInputCountry((): JSX.Element => {
      return (
        <SelectCountry
          changeCountry={(e) => use.attributes.actions.changeCountry(e)}
          props={{
            options: use.attributes.states.countryOptions,
            defaultValue: use.attributes.states.countryDefault,
            title: 'País',
            styles: {
              width: '92%',
            },
            ...countryProps,
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
            changeStateCountry={(e) =>
              use.attributes.actions.changeStateCountry(e)
            }
            props={{
              title: 'Estado',
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
            changeStateCountry={(e) =>
              use.attributes.actions.changeStateCountry(e)
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
            changeCity={(e) => use.attributes.actions.changeCity(e)}
            props={{
              options: use.attributes.states.cityOptions,
              defaultValue: use.attributes.states.cityDefault,
              title: 'Ciudad',
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
          <>
            <InputCityGeneral
              changeCity={use.attributes.actions.changeCity}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.city,
                  title: 'Ciudad',
                },
                styles: {
                  padding: '10px 19px',
                  width: '90%',
                },
                ...cityInputProps,
              }}
            />
          </>
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
        title1: title1Text,
        title2: title2Text,
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver',
      }}
      handleActions={customHandleActions || handleActions}
      error={use.error.states.error}
      boxProps={modelFormContainerProps}
      buttonNextId={ENTITY_ROUTE}
      returnButtonConatinerStyle="padding-button: 0px;"
      {...modelFormProps}
    >
      <>
        <div className={css(photoMainContainerStyle)}>
          <div className={css(photoContainerStyle)}>
            <PhotoEntity
              photo={use.attributes.states.photo}
              changePhoto={use.attributes.actions.changePhoto}
              submitting={use.attributes.states.submitting}
              changeError={use.error.actions.changeError}
              setSubmitting={use.attributes.actions.setSubmitting}
              props={propsPhoto}
            />
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <InputName
                changeName={use.attributes.actions.changeName}
                props={{
                  inputProps: {
                    defaultValue: use.attributes.states.name,
                    title: 'Nombre',
                  },
                  styles: {
                    width: '100%',
                  },
                  ...nameProps,
                }}
              />
              {isPersonalForm && (
                <InputLastName
                  changeLastName={use.attributes.actions.changeLastName}
                  props={{
                    inputProps: {
                      defaultValue: use.attributes.states.lastName,
                      title: 'Apellido',
                    },
                    styles: {
                      width: '100%',
                    },
                    ...lastNameProps,
                  }}
                />
              )}
              {InputTypeDocumentIdId}
            </>
          </div>
        </div>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerDocumentProps}
        >
          <>
            {InputIndex}
            <InputDocumentiIdDigit
              changeDocumentiIdDigit={use.attributes.actions.changeDigit}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.digit,
                  title: 'Numero de documento',
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...digitProps,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerAddressProps}
        >
          <>
            <InputAddress1
              changeAddress1={use.attributes.actions.changeAddress1}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.address1,
                  title: 'Dirección 1',
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...address1Props,
              }}
            />
            <InputAddress2
              changeAddress2={use.attributes.actions.changeAddress2}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.address2,
                  title: 'Dirección 2',
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...address2Props,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerCityStateProps}
        >
          <>
            {InputCity}
            {InputState}
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
            {InputCountry}
            <InputZipCode
              changeZipCode={use.attributes.actions.changePostCode}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.postCode,
                  title: 'Código postal',
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...codePostProps,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'start',
          }}
          {...containerEmailPhoneProps}
        >
          <>
            <InputEmail
              changeEmail={use.attributes.actions.changeEmail}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.email,
                  title: 'Correo electrónico',
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...emailProps,
              }}
            />
            <InputPhone
              changePhone={use.attributes.actions.changePhone}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.phone,
                  title: 'Teléfono',
                },
                styles: {
                  width: '92%',
                  padding: '09px 19px',
                },
                ...phoneProps,
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
