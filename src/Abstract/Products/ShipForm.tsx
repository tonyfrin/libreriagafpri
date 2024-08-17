import React from 'react';
import { css } from '@emotion/css';
import { ModelForm } from '../Form';
import { ContainerButton } from '../Containers';
import { UseGafpriProductsReturn } from '../../states';
import {
  SelectPackageType,
  InputQtyPack,
  InputUndCbm,
  InputWeight,
  InputHeight,
  InputWidth,
  InputLength,
} from '../Input';

export type ShipFormProps = {
  use: UseGafpriProductsReturn;
  formType: 'add' | 'update';
};

export type ShipFormExtended = {
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

const defaultFormContainerUndsStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 32px;
  width: 92%;
`;

export const ShipForm = ({ use, formType }: ShipFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    if (current) {
      if (current.packageType) {
        const options = use.attributes.actions.getPackageTypeOptionByValue(
          current.packageType
        );
        if (options) use.attributes.actions.changePackageType(options);
      }
      if (current.qtyPack)
        use.attributes.actions.changeQtyPack(`${current.qtyPack}`);
      if (current.undCbm)
        use.attributes.actions.changeUndCbm(`${current.undCbm}`);
      if (current.weight)
        use.attributes.actions.changeWeight(`${current.weight}`);
      if (current.height)
        use.attributes.actions.changeHeight(`${current.height}`);
      if (current.width) use.attributes.actions.changeWidth(`${current.width}`);
      if (current.length)
        use.attributes.actions.changeLength(`${current.length}`);
    }
  }, [current]);

  const title1Text = isAddForm ? 'Envío' : 'Actualización de Envío';
  const title2Text = isAddForm ? '' : '';

  const buttonTitle = 'Siguiente';
  const buttonAction = use.subPages.actions.onAttributes;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onInventory();
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
              <SelectPackageType
                change={use.attributes.actions.changePackageType}
                props={{
                  options: use.attributes.states.packageTypeOptions,
                  defaultValue: use.attributes.states.packageTypeDefault,
                  title: 'Tipo de paquete',
                  styles: {
                    width: '90%',
                  },
                }}
              />
            </ContainerButton>
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <InputQtyPack
              change={use.attributes.actions.changeQtyPack}
              props={{
                styles: {
                  width: '90%',
                },
                inputProps: {
                  defaultValue: use.attributes.states.qtyPack,
                },
              }}
            />
          </div>
        </div>
        <div className={css(defaultFormContainerStyle)}>
          <div className={css(defaultImageContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputUndCbm
                change={use.attributes.actions.changeUndCbm}
                props={{
                  styles: {
                    width: '90%',
                  },
                  containerStyles: {
                    custom: `
                      display: flex;
                      flex-direction: column;
                  `,
                  },
                  inputProps: {
                    defaultValue: use.attributes.states.undCbm,
                  },
                }}
              />
            </ContainerButton>
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <InputWeight
              change={use.attributes.actions.changeWeight}
              props={{
                styles: {
                  width: '90%',
                },
                containerStyles: {
                  custom: `
                    display: flex;
                    flex-direction: column;
                `,
                },
                inputProps: {
                  defaultValue: use.attributes.states.weight,
                },
              }}
            />
          </div>
        </div>
        <div className={css(defaultFormContainerUndsStyle)}>
          <div className={css(defaultImageContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputHeight
                change={use.attributes.actions.changeHeight}
                props={{
                  styles: {
                    width: '90%',
                  },
                  containerStyles: {
                    custom: `
                      display: flex;
                      flex-direction: column;
                  `,
                  },
                  inputProps: {
                    defaultValue: use.attributes.states.height,
                  },
                }}
              />
            </ContainerButton>
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputWidth
                change={use.attributes.actions.changeWidth}
                props={{
                  styles: {
                    width: '90%',
                  },
                  containerStyles: {
                    custom: `
                      display: flex;
                      flex-direction: column;
                  `,
                  },
                  inputProps: {
                    defaultValue: use.attributes.states.width,
                  },
                }}
              />
            </ContainerButton>
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputLength
                change={use.attributes.actions.changeLength}
                props={{
                  styles: {
                    width: '90%',
                  },
                  containerStyles: {
                    custom: `
                      display: flex;
                      flex-direction: column;
                  `,
                  },
                  inputProps: {
                    defaultValue: use.attributes.states.length,
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
