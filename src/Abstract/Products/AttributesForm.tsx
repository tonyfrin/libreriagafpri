import React from 'react';
import { css } from '@emotion/css';
import { ModelForm } from '../Form';
import { UseGafpriProductsReturn } from '../../states';
import { Paragraph, Input } from '../Input';
import { AttributeTable } from '../Table';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';

export type AttributesFormProps = {
  use: UseGafpriProductsReturn;
  formType: 'add' | 'update';
};

export type AttributesFormExtended = {
  use?: UseGafpriProductsReturn;
  formType?: 'add' | 'update';
};

const defaultFormContainerStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 24px;
`;

const defaultImageContainerStyle = css`
  width: 50%;
`;

const defaultTitleContainerStyle = css`
  width: 50%;
`;

export const AttributesForm = ({
  use,
  formType,
}: AttributesFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    if (current) {
      if (current.attributes) {
        use.attributes.actions.setAttributes(current.attributes);
      }
    }
  }, [current]);

  const title1Text = isAddForm ? 'Atributos' : 'Actualización de Atributos';
  const title2Text = isAddForm ? '' : '';

  const buttonTitle = 'Siguiente';
  const buttonAction = use.subPages.actions.onAdvanced;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onShip();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <ModelForm
      boxProps={{
        styles: {
          width: '90%',
          padding: '0',
          margin: '0',
        },
      }}
      childrenContainerProps={{
        styles: {
          width: '100%',
        },
      }}
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
    >
      <>
        <div className={css(defaultFormContainerStyle)}>
          <div className={css(defaultImageContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <Input
                styles={{
                  width: '90%',
                }}
                inputProps={{
                  placeholder: 'Atributo',
                  title: 'Atributo',
                  type: 'text',
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                    use.attributes.actions.setValueAttributes(
                      event.currentTarget.value
                    ),
                  value: use.attributes.states.valueAttributes,
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <Button
                title="Agregar Atributo"
                buttonProps={{
                  onClick: () => use.attributes.actions.addAttributes(),
                }}
              />
            </ContainerButton>
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <Paragraph
              onChange={(e) =>
                use.attributes.actions.setDescriptionAttributes(e)
              }
              inputProps={{
                value: use.attributes.states.descriptionAttributes,
                title: 'Descripción',
                placeholder: 'Descripción',
              }}
            />
          </div>
        </div>

        <AttributeTable
          data={use.attributes.states.attributes}
          onRemove={use.attributes.actions.onRemoveAttibutes}
        />
      </>
    </ModelForm>
  );
};
