import React from 'react';
import { css } from '@emotion/css';
import {
  InputLastName,
  InputName,
  SelectAreaCode,
  SelectRoles,
  InputEmail,
  InputPhone,
} from '../Input';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm, PhotoUser } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseUserReturn } from '../../states';

export type UserFormProps = {
  use: UseUserReturn;
  formType: 'add' | 'update';
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
};

export type UserFormPropsExtended = {
  use?: UseUserReturn;
  formType?: 'add' | 'update';
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

export const UserForm = ({
  use,
  formType,
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
}: UserFormProps): JSX.Element => {
  const [InputAreaCode, setInputAreaCode] = React.useState(<></>);
  const [InputRole, setInputRole] = React.useState(<></>);
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentUser = isUpdateForm
    ? use.actions.getById(use.states.userId)
    : null;

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
    if (isAddForm) {
      setInputAreaCode((): JSX.Element => {
        return (
          <SelectAreaCode
            changeAreaCode={(e) => use.actions.changeAreaCode(e)}
            props={{
              options: use.states.areaCodeOptions,
              defaultValue: use.states.areaCodeDefault,
              title: 'Código de area',
              styles: {
                width: '96%',
              },
              ...areaCodeSelectProps,
            }}
          />
        );
      });

      setInputRole((): JSX.Element => {
        return (
          <SelectRoles
            changeRoles={(e) => use.actions.changeRole(e)}
            props={{
              options: use.states.roleOptions,
              defaultValue: use.states.roleDefault,
              title: 'Rol de usuario',
              styles: {
                width: '96%',
              },
              ...roleSelectProps,
            }}
          />
        );
      });
    }
  }, []);

  const title1Text = isAddForm ? 'Nuevo Usuario' : 'Actualizar Usuario';
  const title2Text = isAddForm
    ? 'Agrega un nuevo usuario'
    : `Actualiza la información del usuario #${currentUser?.id}`;

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
        <div className={css(photoMainContainerStyle)}>
          <div className={css(photoContainerStyle)}>
            <PhotoUser
              photo={use.states.photo}
              changePhoto={use.actions.changePhoto}
              submitting={use.states.submitting}
              changeError={use.actions.changeError}
              setSubmitting={use.actions.setSubmitting}
              props={{
                imageStyle: `
                  transition: all 1s ease 0s;
                  width: 100%;
                  max-width: 150px;
                  max-height: 150px;
                  object-fit: cover;
                  border: 1px solid #ebebeb;
                  margin: auto;
                  border-radius: 100%;
                `,
              }}
            />
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <InputName
                changeName={(e) => use.actions.changeName(e)}
                props={{
                  inputProps: {
                    defaultValue: use.states.name,
                    title: 'Nombre',
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
                    title: 'Apellido',
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
                    title: 'Email',
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
                  title: 'Teléfono',
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
