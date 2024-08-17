import React from 'react';
import { SingleValue } from 'react-select';
import { ModelForm } from '../Form';
import { ContainerButton } from '../Containers';
import { UseGafpriCashRegisterTypeReturn, UseLoginReturn } from '../../states';
import { GsSelect } from '../Input';

export type InitCashRegisterProps = {
  use: UseGafpriCashRegisterTypeReturn;
  uselogin: UseLoginReturn;
  returnModule: () => void;
};

export const InitCashRegister = ({
  use,
  uselogin,
  returnModule,
}: InitCashRegisterProps): JSX.Element => {
  const title1Text = 'Modulo de Caja';
  const title2Text = 'Elije una opción para comenzar';

  const cashOptions = use.data.actions.getOptionsItemsByAutorized(
    uselogin.states.currentUser?.id || 0
  );

  const next = (value: SingleValue<{ label: string; value: string }>) => {
    if (!value?.value) return;
    use.pages.actions.goCashPortal(parseInt(value.value, 10));
  };

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        break;
      case 'return':
        returnModule();
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
        mainButton: '',
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.error.states.error}
      boxProps={{
        styles: {
          width: '70%',
          height: 'auto',
        },
      }}
      returnButtonConatinerStyle="padding: 0px;"
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            custom: `
              margin: 20px 0px;
              padding-left: 5%;
            `,
          }}
        >
          <>
            <GsSelect options={cashOptions} onChange={(e) => next(e)} />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
