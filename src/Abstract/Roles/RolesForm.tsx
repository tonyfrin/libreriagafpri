import React from 'react';
import { css } from '@emotion/css';
import { Input, InputName } from '../Input';
import type { InputProps } from '../Input';
import { Button } from '../Button';
import { ButtonProps } from '../Button';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { AllRoles } from '../../constants';
import type { UseRolesReturn } from 'src/states';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import { RolePermissions } from './RolePermissions';
import type { RolePermissionsPropsExtended } from './RolePermissions';

const defaultPermissionsContainerStyle = css`
  margin: 30px;
`;

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`;

export type RolesFormProps = {
  use: UseRolesReturn;
  formType: 'add' | 'update';
  permissionsContainerStyle?: string;
  optionButtonContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  nameContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  selectAllButtonProps?: ButtonProps;
  deselectAllButtonProps?: ButtonProps;
  permissionsProps?: RolePermissionsPropsExtended;
};

export type RolesFormPropsExtended = {
  use: UseRolesReturn;
  formType: 'add' | 'update';
  permissionsContainerStyle?: string;
  optionButtonContainerStyle?: string;
  modelFormProps?: ModelFormPropsExtended;
  nameContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  selectAllButtonProps?: ButtonProps;
  deselectAllButtonProps?: ButtonProps;
  permissionsProps?: RolePermissionsPropsExtended;
};

export const RolesForm = ({
  use,
  formType,
  permissionsContainerStyle = defaultPermissionsContainerStyle,
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
  modelFormProps,
  nameContainerProps,
  nameInputProps,
  selectAllButtonProps = {
    title: 'Todos',
    styles: {
      backgroundColor: 'rgb(67, 155, 87)',
      fontSize: '10px',
    },
    buttonProps: {
      onClick: use.actions.selectAllPermissions,
    },
  },
  deselectAllButtonProps = {
    title: 'Ninguno',
    styles: {
      backgroundColor: '#c12429',
      fontSize: '10px',
    },
    buttonProps: {
      onClick: use.actions.deselectAllPermissions,
    },
  },
  permissionsProps,
}: RolesFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentRoles = isUpdateForm
    ? use.actions.getById(use.states.currentId)
    : null;

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationButtonNext();
  }, [use.states.name]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [use.states.nameValid]);

  React.useEffect(() => {
    if (currentRoles) {
      use.actions.changeName(currentRoles.name);
      use.actions.setPermissions(currentRoles.permissions);
    }
  }, []);

  const title1Text = isAddForm ? 'Nuevo Rol' : 'Actualizar Rol';
  const title2Text = isAddForm
    ? 'Agrega un nuevo Rol'
    : `Actualiza la información del rol #${currentRoles?.id}`;

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
          }}
          {...nameContainerProps}
        >
          <>
            <InputName
              changeName={use.actions.changeName}
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
          </>
        </ContainerButton>
        <div className={css(permissionsContainerStyle)}>
          <div className={css(optionButtonContainerStyle)}>
            <Button {...selectAllButtonProps} />
            <Button {...deselectAllButtonProps} />
          </div>
          {AllRoles.map((role) => (
            <RolePermissions
              selectedPermissions={use.states.permissions}
              key={role.name}
              role={role}
              onPermissionChange={use.actions.changePermissions}
              {...permissionsProps}
            />
          ))}
        </div>
      </>
    </ModelForm>
  );
};
