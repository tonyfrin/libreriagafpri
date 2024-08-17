import React from 'react';
import { InputName } from '../Input';
import type { InputProps } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import { ModelFormPropsExtended } from '../Form';
import type { UseTypeDocumentIdReturn } from 'src/states';

export type TypeDocumentIdFormProps = {
  use: UseTypeDocumentIdReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
};

export type TypeDocumentIdFormPropsExtended = {
  use?: UseTypeDocumentIdReturn;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
};

export const TypeDocumentIdForm = ({
  use,
  formType,
  modelFormProps,
  infoContainerProps,
  nameInputProps,
}: TypeDocumentIdFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentTypeDocumentId = isUpdateForm
    ? use.actions.getById(use.states.currentId)
    : null;

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationCountry(use.states.country);
    use.actions.validationButtonNext();
  }, [use.states.name, use.states.country]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.countryValid]);

  React.useEffect(() => {
    if (currentTypeDocumentId) {
      use.actions.changeName(currentTypeDocumentId.name);
      use.actions.changeCountry(currentTypeDocumentId.country);
    }
  }, []);

  const title1Text = isAddForm
    ? 'Nuevo Tipo de Documento'
    : 'Actualizar Tipo de Documento';
  const title2Text = isAddForm
    ? 'Agrega un nuevo tipo de Documento de identificación'
    : `Actualiza la información del tipo de documento de identificación #${currentTypeDocumentId?.id}`;

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
          {...infoContainerProps}
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
      </>
    </ModelForm>
  );
};
