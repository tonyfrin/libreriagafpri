import React from 'react';
import { ModelForm, ModelFormPropsExtended } from '../Form';
import { ContainerButton, ContainerButtonPropsExtended } from '../Containers';
import type { UseGafpriProjectsReturn } from '../../states';
import { InputName, InputDescription, InputProps } from '../Input';

export type ProjectsFormProps = {
  use: UseGafpriProjectsReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionInputProps?: InputProps;
};

export type ProjectsFormPropsExtended = {
  use?: UseGafpriProjectsReturn;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionInputProps?: InputProps;
};

export const ProjectsForm = ({
  use,
  formType,
  modelFormProps,
  infoContainerProps,
  nameInputProps,
  descriptionInputProps,
}: ProjectsFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentProject = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(
      use.attributes.states.description
    );
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.description]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.descriptionValid]);

  React.useEffect(() => {
    if (currentProject) {
      use.attributes.actions.changeName(currentProject.name);
      use.attributes.actions.changeDescription(currentProject.description);
    }
  }, []);

  const title1Text = isAddForm ? 'Nuevo Proyecto' : 'Actualizar Proyecto';
  const title2Text = isAddForm
    ? 'Agrega un nuevo proyecto'
    : `Actualiza la información del proyecto #${currentProject?.postsId}`;

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
      error={use.error.states.error}
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...infoContainerProps}
        >
          <>
            <InputName
              changeName={use.attributes.actions.changeName}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.name,
                },
                styles: {
                  width: '85%',
                },
                ...nameInputProps,
              }}
            />
            <InputDescription
              changeDescription={use.attributes.actions.changeDescription}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.description,
                },
                styles: {
                  width: '85%',
                },
              }}
              {...descriptionInputProps}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
