import React from 'react';
import { css, cx } from '@emotion/css';
import { MainMenu, MainMenuItems } from '../Menu';
import { ModelForm } from '../Form';
import {
  UseGafpriEntityReturn,
  UseGafpriAccountsReceivableReturn,
} from '../../states';

export type EntityAccountsReceivableInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type EntityAccountsReceivableInitProps = {
  containerStyles?: EntityAccountsReceivableInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useEntity: UseGafpriEntityReturn;
  useAccountsReceivable: UseGafpriAccountsReceivableReturn;
  menu: MainMenuItems[];
};

const entityAccountsReceivableInitStylesContainer = (
  stayles: EntityAccountsReceivableInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const EntityAccountsReceivableInit = ({
  containerStyles = {},
  containerProps = {},
  useEntity,
  useAccountsReceivable,
  menu,
}: EntityAccountsReceivableInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  const handleActions = (action: string, value: any): void => {
    switch (action) {
      case 'submit':
        break;
      case 'return':
        useAccountsReceivable.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <>
      <div
        className={cx(
          entityAccountsReceivableInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <ModelForm
          titles={{
            title1: 'Modulo de creditos',
            title2: 'agregar cliente',
          }}
          buttonTitles={{
            mainButton: '',
            returnButton: 'regresar',
          }}
          handleActions={handleActions}
          error={useEntity.error.states.error}
          boxProps={{
            styles: {
              height: '100%',
              padding: '40px 40px 0 40px',
            },
          }}
        >
          <MainMenu items={menu} />
        </ModelForm>
      </div>
    </>
  );
};
