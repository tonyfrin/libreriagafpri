import React from 'react';
import { css, cx } from '@emotion/css';
import { MainMenu, MainMenuItems } from '../Menu';
import { ModelForm } from '../Form';
import { UseGafpriEntityReturn, UseGafpriBudgetReturn } from '../../states';

export type EntityBudgetInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type EntityBudgetInitProps = {
  containerStyles?: EntityBudgetInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useEntity: UseGafpriEntityReturn;
  useBudget: UseGafpriBudgetReturn;
  menu: MainMenuItems[];
};

const entityBudgetInitStylesContainer = (
  stayles: EntityBudgetInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const EntityBudgetInit = ({
  containerStyles = {},
  containerProps = {},
  useEntity,
  useBudget,
  menu,
}: EntityBudgetInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  const handleActions = (action: string, value: any): void => {
    switch (action) {
      case 'submit':
        break;
      case 'return':
        useBudget.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <>
      <div
        className={cx(
          entityBudgetInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <ModelForm
          titles={{
            title1: 'Modulo de presupuestos',
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
