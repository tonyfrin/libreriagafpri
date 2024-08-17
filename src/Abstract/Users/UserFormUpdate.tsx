import React from 'react';
import { css } from '@emotion/css';
import {
  SelectAreaCode,
  SelectRoles,
  InputName,
  InputLastName,
  InputEmail,
  InputPhone,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm, PhotoUser } from '../Form';
import type { ModelFormPropsExtended, PhotoUserProps } from '../Form';
import type { UseUserReturn, UseSitesReturn } from '../../states';

export type UserFormUpdateProps = {
  use: UseUserReturn;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  emailInputProps?: InputProps;
  phoneContainerProps?: ContainerButtonPropsExtended;
  areaCodeSelectProps?: GsSelectPropsExtended;
  phoneInputProps?: InputProps;
  roleSelectProps?: GsSelectPropsExtended;
  propsPhoto?: PhotoUserProps['props'];
};

export type UserFormUpdatePropsExtended = {
  use?: UseUserReturn;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  nameContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  emailInputProps?: InputProps;
  phoneContainerProps?: ContainerButtonPropsExtended;
  areaCodeSelectProps?: GsSelectPropsExtended;
  phoneInputProps?: InputProps;
  roleSelectProps?: GsSelectPropsExtended;
  propsPhoto?: PhotoUserProps['props'];
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

export const UserFormUpdate = ({
  use,
  photoMainContainerStyle = defaultPhotoMainContainerStyle,
  photoContainerStyle = defaultPhotoContainerStyle,
  nameContainerStyle = defaultNameContainerStyle,
  modelFormProps,
  nameInputProps,
  lastNameInputProps,
  emailInputProps,
  phoneContainerProps,
  areaCodeSelectProps,
  phoneInputProps,
  roleSelectProps,
  propsPhoto,
}: UserFormUpdateProps): JSX.Element => {
  const [InputAreaCode, setInputAreaCode] = React.useState(<></>);

  const [InputRole, setInputRole] = React.useState(<></>);

  const currentUser = use.actions.getById(use.states.userId);

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationLastName(use.states.lastName);
    use.actions.validationEmail(use.states.email);
    use.actions.validationAreaCode(use.states.areaCode);
    use.actions.validationPhoneNumber(use.states.phoneNumber);
    use.actions.validationRole(use.states.rolesId);
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationIsActive(`${use.states.isActive}`);
    use.actions.validationButtonNext();
  }, [
    use.states.name,
    use.states.lastName,
    use.states.email,
    use.states.phoneNumber,
    use.states.areaCode,
    use.states.rolesId,
    use.states.photo,
    use.states.isActive,
    InputRole,
    InputAreaCode,
  ]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [
    use.states.nameValid,
    use.states.lastNameValid,
    use.states.emailValid,
    use.states.phoneNumberValid,
    use.states.areaCodeValid,
    use.states.roleValid,
    use.states.photoValid,
    use.states.isActiveValid,
  ]);

  React.useEffect(() => {
    if (use.states.roleDefault.value !== '') {
      setInputRole((): JSX.Element => {
        return (
          <SelectRoles
            changeRoles={(e) => use.actions.changeRole(e)}
            props={{
              options: use.states.roleOptions,
              defaultValue: use.states.roleDefault,
              styles: {
                width: '96%',
              },
              ...roleSelectProps,
            }}
          />
        );
      });
    }
  }, [use.states.roleDefault]);

  React.useEffect(() => {
    if (use.states.name !== '') {
      setInputAreaCode((): JSX.Element => {
        return (
          <SelectAreaCode
            changeAreaCode={(e) => use.actions.changeAreaCode(e)}
            props={{
              options: use.states.areaCodeOptions,
              defaultValue: use.states.areaCodeDefault,
              styles: {
                width: '96%',
              },
              ...areaCodeSelectProps,
            }}
          />
        );
      });
    }
  }, [use.states.name]);

  React.useEffect(() => {
    if (currentUser) {
      use.actions.changeName(currentUser.name);
      if (currentUser?.lastName)
        use.actions.changeLastName(currentUser.lastName);
      use.actions.changeEmail(currentUser.email);
      if (currentUser?.photo) use.actions.setPhoto(currentUser.photo);
      if (currentUser?.roles) {
        const currentRole = {
          label: currentUser.roles.name,
          value: `${currentUser.roles.id}`,
        };
        use.actions.changeRole(currentRole);
      }
      const countryCode = currentUser.phone.slice(0, -10);
      const countryCodeLabel =
        countryCode === '0058'
          ? '(+58) Venezuela'
          : countryCode === '001'
          ? '(+1) Estados Unidos'
          : '';
      const countryCodeDefault = {
        label: countryCodeLabel,
        value: countryCode,
      };
      use.actions.changeAreaCode(countryCodeDefault);
      const phoneNumber = currentUser.phone.slice(-10);
      use.actions.changePhoneNumber(phoneNumber);
    }
  }, []);

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.actions.update();
        break;
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acciónes desconocidas:', action);
    }
  };

  return (
    <ModelForm
      titles={{
        title1: 'Actualizar Usuario',
        title2: `Actualiza la información del usuario #${currentUser?.id}`,
      }}
      buttonTitles={{
        mainButton: 'Actualizar',
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.states.error}
      {...modelFormProps}
    >
      <>
        <div className={css(photoMainContainerStyle)}>
          <div className={css(photoContainerStyle)}>
            <PhotoUser
              photo={use.states.photo}
              changePhoto={use.actions.changePhoto}
              submitting={use.states.submitting}
              changeError={use.actions.changeError}
              setSubmitting={use.actions.setSubmitting}
              props={propsPhoto}
            />
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <InputName
                changeName={(e) => use.actions.changeName(e)}
                props={{
                  inputProps: {
                    defaultValue: use.states.name,
                  },
                  styles: {
                    width: '100%',
                  },
                  ...nameInputProps,
                }}
              />
              <InputLastName
                changeLastName={(e) => use.actions.changeLastName(e)}
                props={{
                  inputProps: {
                    defaultValue: use.states.lastName,
                  },
                  styles: {
                    width: '100%',
                  },
                  ...lastNameInputProps,
                }}
              />
              <InputEmail
                changeEmail={(e) => use.actions.changeEmail(e)}
                props={{
                  inputProps: {
                    defaultValue: use.states.email,
                  },
                  styles: {
                    width: '100%',
                  },
                  ...emailInputProps,
                }}
              />
              {InputRole}
            </>
          </div>
        </div>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...phoneContainerProps}
        >
          <>
            {InputAreaCode}
            <InputPhone
              changePhone={(e) => use.actions.changePhoneNumber(e)}
              props={{
                inputProps: {
                  defaultValue: use.states.phoneNumber,
                },
                styles: {
                  width: '96%',
                },
                ...phoneInputProps,
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
