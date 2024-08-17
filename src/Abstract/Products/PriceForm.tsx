import React from 'react';
import { css } from '@emotion/css';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import { UseGafpriProductsReturn } from '../../states';
import { InputSalesPrice, InputOfferPrice, InputCost } from '../Input';

export type PriceFormProps = {
  use: UseGafpriProductsReturn;
  formType: 'add' | 'update';
};

export type PriceFormExtended = {
  use?: UseGafpriProductsReturn;
  formType?: 'add' | 'update';
};

export const PriceForm = ({ use, formType }: PriceFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationSalesPrice(
      parseFloat(use.attributes.states.salesPrice)
    );
  }, [use.attributes.states.salesPrice]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.salesPriceValid]);

  React.useEffect(() => {
    if (current) {
      if (current.salesPrice) {
        use.attributes.actions.changeSalesPrice(`${current.salesPrice}`);
      }

      if (current.offerPrice) {
        use.attributes.actions.changeOfferPrice(`${current.offerPrice}`);
      }

      if (current.cost) {
        use.attributes.actions.changeCost(`${current.cost}`);
      }
    }
  }, [current]);

  const title1Text = isAddForm ? 'Precios' : 'Actualización de Precios';
  const title2Text = isAddForm ? '' : '';

  const buttonTitle = 'Siguiente';
  const buttonAction = use.subPages.actions.onCatalog;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onGeneral();
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
        <ContainerButton
          styles={{
            width: '40%',
            justifyContent: 'end',
          }}
        >
          <>
            <InputSalesPrice
              change={use.attributes.actions.changeSalesPrice}
              props={{
                styles: {
                  width: '100%',
                },
                inputProps: {
                  defaultValue: use.attributes.states.salesPrice,
                },
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '40%',
            justifyContent: 'end',
          }}
        >
          <>
            <InputOfferPrice
              change={use.attributes.actions.changeOfferPrice}
              props={{
                styles: {
                  width: '100%',
                },
                inputProps: {
                  defaultValue: use.attributes.states.offerPrice,
                },
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '40%',
            justifyContent: 'end',
          }}
        >
          <>
            <InputCost
              changeCost={use.attributes.actions.changeCost}
              props={{
                styles: {
                  width: '100%',
                },
                inputProps: {
                  defaultValue: use.attributes.states.cost,
                },
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
