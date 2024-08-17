import React from 'react';
import { css } from '@emotion/css';
import { Input } from '../Input';
import type { InputProps } from '../Input';
import { formatPhoneNumber } from '../../helpers';
import { Button } from '../Button';
import type { ButtonPropsExtended } from '../Button';
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseUserReturn, UseSitesReturn } from '../../states';
import type { RoleArray } from '../../helpers';

export type UserViewProps = {
  use: UseUserReturn;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  optionButtonContainerStyle?: string;
  emailPhoneButtonProps?: ButtonPropsExtended;
  modelFormProps?: ModelFormPropsExtended;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  roleListProps?: ListPropsExtended;
};

export type UserViewPropsExtended = {
  use?: UseUserReturn;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  photoFormStyle?: string;
  photoStyle?: string;
  nameContainerStyle?: string;
  optionButtonContainerStyle?: string;
  emailPhoneButtonProps?: ButtonPropsExtended;
  modelFormProps?: ModelFormPropsExtended;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  roleListProps?: ListPropsExtended;
};

const defaultPhotoContainerStyle = css`
  width: 100%;
`;

const defaultPhotoFormStyle = css`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`;

const defaultPhotoStyle = css`
  transition: all 1s ease 0s;
  width: 100%;
  max-width: 180px;
  max-height: 180px;
  object-fit: cover;
  border: 1px solid #ebebeb;
  margin: auto;
  border-radius: 100%;
`;

const defaultPhotoMainContainerStyle = css`
  display: flex;
  justify-content: space-between;
`;

const defaultNameContainerStyle = css`
  width: 100%;
`;

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
  width: 91.66667%;
  margin: 10px 0px;
`;

export const UserView = ({
  use,
  photoMainContainerStyle = defaultPhotoMainContainerStyle,
  photoContainerStyle = defaultPhotoContainerStyle,
  photoFormStyle = defaultPhotoFormStyle,
  photoStyle = defaultPhotoStyle,
  nameContainerStyle = defaultNameContainerStyle,
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
  emailPhoneButtonProps,
  modelFormProps,
  nameInputProps,
  lastNameInputProps,
  roleListProps,
}: UserViewProps): JSX.Element => {
  const currentUser = use.actions.getById(use.states.userId);

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'return':
        use.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  const ButtonEmailPhone: React.FC<{ email: string; isActive: boolean }> = ({
    email,
    isActive,
  }) => {
    const color = isActive ? '#439b57' : '#c12429';
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          title={email}
          styles={{
            fontSize: '15px',
            backgroundColor: color,
            cursor: 'off',
            padding: '8px 19px',
          }}
          Class="email-button"
          buttonProps={{
            title: `${email}`,
          }}
          {...emailPhoneButtonProps}
        />
      </div>
    );
  };

  return (
    <ModelForm
      titles={{
        title1: 'Ver',
        title2: `Información del usuario #${currentUser?.id}`,
      }}
      buttonTitles={{
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.states.error}
      {...modelFormProps}
    >
      <>
        <div className={css(photoMainContainerStyle)}>
          <div className={css(photoContainerStyle)}>
            <div className={css(photoFormStyle)}>
              <img
                className={css(photoStyle)}
                src={
                  currentUser?.photo ||
                  'https://categorygafpri.s3.us-east-2.amazonaws.com/fotousuariogafpri.png'
                }
                alt="Category"
              />
            </div>
          </div>
          <div className={css(nameContainerStyle)}>
            <>
              <ButtonEmailPhone
                email={currentUser?.isActive ? 'Activo' : 'Inactivo'}
                isActive={currentUser?.isActive || false}
              />
              <Input
                inputProps={{
                  placeholder: 'Nombre',
                  type: 'text',
                  id: `userName`,
                  readOnly: true,
                  defaultValue: currentUser?.name,
                }}
                styles={{
                  width: '100%',
                }}
                {...nameInputProps}
              />
              <Input
                inputProps={{
                  placeholder: 'Apellido',
                  type: 'text',
                  id: `userLastName`,
                  readOnly: true,
                  defaultValue: currentUser?.lastName,
                }}
                styles={{
                  width: '100%',
                }}
                {...lastNameInputProps}
              />
              <ButtonEmailPhone
                email={currentUser?.email || ''}
                isActive={currentUser?.emailConfirmation || false}
              />
              <ButtonEmailPhone
                email={
                  currentUser?.phone ? formatPhoneNumber(currentUser.phone) : ''
                }
                isActive={currentUser?.phoneConfirmation || false}
              />
              <Input
                inputProps={{
                  placeholder: 'Rol',
                  type: 'text',
                  readOnly: true,
                  defaultValue: currentUser?.roles.name,
                }}
                styles={{
                  width: '100%',
                }}
                {...nameInputProps}
              />
            </>
          </div>
        </div>
      </>
    </ModelForm>
  );
};
