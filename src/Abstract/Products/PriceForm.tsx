import React, { ChangeEvent } from 'react';
import { css } from '@emotion/css';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import { UseGafpriProductsReturn } from '../../states';
import { InputSalesPrice, InputOfferPrice, InputCost, Input } from '../Input';

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

      if (current.price1) {
        use.attributes.actions.changePrice1(`${current.price1}`);
      }

      if (current.price2) {
        use.attributes.actions.changePrice2(`${current.price2}`);
      }

      if (current.price3) {
        use.attributes.actions.changePrice3(`${current.price3}`);
      }

      if (current.price4) {
        use.attributes.actions.changePrice4(`${current.price4}`);
      }

      if (current.price5) {
        use.attributes.actions.changePrice5(`${current.price5}`);
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
            <Input
              styles={{
                width: '100%',
              }}
              inputProps={{
                placeholder: 'Precio 1',
                type: 'number',
                min: '0',
                step: '0.1',
                title: 'Precio 1',
                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                  use.attributes.actions.changePrice1(
                    event.currentTarget.value
                  ),
                defaultValue: use.attributes.states.price1,
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
            <Input
              styles={{
                width: '100%',
              }}
              inputProps={{
                placeholder: 'Precio 2',
                type: 'number',
                min: '0',
                step: '0.1',
                title: 'Precio 2',
                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                  use.attributes.actions.changePrice2(
                    event.currentTarget.value
                  ),
                defaultValue: use.attributes.states.price2,
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
            <Input
              styles={{
                width: '100%',
              }}
              inputProps={{
                placeholder: 'Precio 3',
                type: 'number',
                min: '0',
                step: '0.1',
                title: 'Precio 3',
                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                  use.attributes.actions.changePrice3(
                    event.currentTarget.value
                  ),
                defaultValue: use.attributes.states.price3,
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
            <Input
              styles={{
                width: '100%',
              }}
              inputProps={{
                placeholder: 'Precio 4',
                type: 'number',
                min: '0',
                step: '0.1',
                title: 'Precio 4',
                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                  use.attributes.actions.changePrice4(
                    event.currentTarget.value
                  ),
                defaultValue: use.attributes.states.price4,
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
            <Input
              styles={{
                width: '100%',
              }}
              inputProps={{
                placeholder: 'Precio 5',
                type: 'number',
                min: '0',
                step: '0.1',
                title: 'Precio 5',
                onChange: (event: ChangeEvent<HTMLInputElement>) =>
                  use.attributes.actions.changePrice5(
                    event.currentTarget.value
                  ),
                defaultValue: use.attributes.states.price5,
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
