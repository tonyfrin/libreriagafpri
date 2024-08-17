import React from 'react';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import { css } from '@emotion/css';
import { UseGafpriProductsReturn } from '../../states';
import { InputSku, SelectType } from '../Input';

export type InventoryFormProps = {
  use: UseGafpriProductsReturn;
  formType: 'add' | 'update';
};

export type InventoryFormExtended = {
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

export const InventoryForm = ({
  use,
  formType,
}: InventoryFormProps): JSX.Element => {
  const [InputType, setInputType] = React.useState(<></>);
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationSku(use.attributes.states.sku);
    use.attributes.actions.validationType(use.attributes.states.type);
  }, [use.attributes.states.sku, use.attributes.states.type, InputType]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.skuValid, use.attributes.states.typeValid]);

  React.useEffect(() => {
    if (current) {
      if (current.sku) {
        use.attributes.actions.changeSku(current.sku);
      }
      if (current.type) {
        const type = use.attributes.actions.getTypeOptionByValue(current.type);
        if (type) use.attributes.actions.changeType(type);
      }
    }
  }, [current]);

  React.useEffect(() => {
    if (isAddForm) {
      setInputType((): JSX.Element => {
        return (
          <SelectType
            changeType={(e) => use.attributes.actions.changeType(e)}
            props={{
              options: use.attributes.states.typeOptions,
              defaultValue: use.attributes.states.typeDefault,
              styles: {
                width: '90%',
              },
              title: 'Tipo',
            }}
          />
        );
      });
    }
  }, []);

  React.useEffect(() => {
    if (isUpdateForm && current) {
      setInputType((): JSX.Element => {
        return (
          <SelectType
            changeType={(e) => use.attributes.actions.changeType(e)}
            props={{
              options: use.attributes.states.typeOptions,
              defaultValue: use.attributes.states.typeDefault,
              styles: {
                width: '90%',
              },
              title: 'Tipo',
              containerStyles: {
                custom: `
                    display: flex;
                    flex-direction: column;
                `,
              },
            }}
          />
        );
      });
    }
  }, [current]);

  const title1Text = isAddForm ? 'Inventario' : 'Actualización de Inventario';
  const title2Text = isAddForm ? '' : '';

  const buttonTitle = 'Siguiente';
  const buttonAction = use.subPages.actions.onShip;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onCatalog();
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
                justifyContent: 'end',
              }}
            >
              <>{InputType}</>
            </ContainerButton>
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputSku
                change={use.attributes.actions.changeSku}
                props={{
                  styles: {
                    width: '90%',
                  },
                  inputProps: {
                    defaultValue: use.attributes.states.sku,
                  },
                  containerStyles: {
                    custom: `
                        display: flex;
                        flex-direction: column;
                    `,
                  },
                }}
              />
            </ContainerButton>
          </div>
        </div>
      </>
    </ModelForm>
  );
};
