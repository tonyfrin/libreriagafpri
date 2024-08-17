import React from 'react';
import { SingleValue } from 'react-select';
import { ModelForm } from '../Form';
import { ContainerButton } from '../Containers';
import { UseGafpriBankTypeReturn, SiteOptions } from '../../states';
import { GsSelect } from '../Input';

export type InitBankProps = {
  use: UseGafpriBankTypeReturn;
  siteOptions: SiteOptions;
  returnModule: () => void;
};

export const InitBank = ({
  use,
  siteOptions,
  returnModule,
}: InitBankProps): JSX.Element => {
  const title1Text = 'Modulo de Banco';
  const title2Text = 'Elije una opción para comenzar';

  const options = use.data.actions.getOptionsItems(siteOptions.id);

  const next = (value: SingleValue<{ label: string; value: string }>) => {
    if (!value?.value) return;
    use.pages.actions.goPortal(parseInt(value.value, 10));
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
            <GsSelect options={options} onChange={(e) => next(e)} />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
