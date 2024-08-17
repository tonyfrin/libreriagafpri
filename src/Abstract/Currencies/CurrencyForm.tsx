import React from 'react';
import { Input } from '../Input';
import type { InputProps } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseCurrenciesReturn } from '../../states';
import { InputName, InputCurrenciesSymbol } from '../Input';

export type CurrencyFormProps = {
  use: UseCurrenciesReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  symbolInputProps?: InputProps;
};

export type CurrencyFormPropsExtended = {
  use?: UseCurrenciesReturn;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  symbolInputProps?: InputProps;
};

export const CurrencyForm = ({
  use,
  formType,
  modelFormProps,
  infoContainerProps,
  nameInputProps,
  symbolInputProps,
}: CurrencyFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentCurrency = isUpdateForm
    ? use.actions.getById(use.states.currentId)
    : null;

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationSymbol(use.states.symbol);
    use.actions.validationButtonNext();
  }, [use.states.name, use.states.symbol]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.symbolValid]);

  React.useEffect(() => {
    if (currentCurrency) {
      use.actions.changeName(currentCurrency.name);
      use.actions.changeSymbol(currentCurrency.symbol);
    }
  }, []);

  const title1Text = isAddForm ? 'Nueva Moneda' : 'Actualizar Moneda';
  const title2Text = isAddForm
    ? 'Agrega un nuevo tipo de Moneda'
    : `Actualiza la información de la moneda #${currentCurrency?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm
    ? use.actions.addCurrencies
    : use.actions.updateCurrency;

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
            width: '96.5%',
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
                  width: '85%',
                },
                ...nameInputProps,
              }}
            />
            <InputCurrenciesSymbol
              changeSymbol={use.actions.changeSymbol}
              props={{
                inputProps: {
                  defaultValue: use.states.symbol,
                },
                styles: {
                  width: '85%',
                },
                ...symbolInputProps,
              }}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
