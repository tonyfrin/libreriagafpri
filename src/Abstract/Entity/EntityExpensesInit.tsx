import React from 'react';
import { css, cx } from '@emotion/css';
import { MainMenu, MainMenuItems } from '../Menu';
import { ModelForm } from '../Form';
import { UseGafpriEntityReturn, UseGafpriExpensesReturn } from '../../states';

export type EntityExpensesInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type EntityExpensesInitProps = {
  containerStyles?: EntityExpensesInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useEntity: UseGafpriEntityReturn;
  useExpenses: UseGafpriExpensesReturn;
  menu: MainMenuItems[];
};

const entityExpensesInitStylesContainer = (
  stayles: EntityExpensesInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const EntityExpensesInit = ({
  containerStyles = {},
  containerProps = {},
  useEntity,
  useExpenses,
  menu,
}: EntityExpensesInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  const handleActions = (action: string, value: any): void => {
    switch (action) {
      case 'submit':
        break;
      case 'return':
        useExpenses.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <>
      <div
        className={cx(
          entityExpensesInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <ModelForm
          titles={{
            title1: 'Modulo de egresos',
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
              height: 'auto',
              width: 'auto',
              padding: '20px',
            },
          }}
          returnButtonConatinerStyle="padding-button: 0px;"
        >
          <MainMenu
            items={menu}
            stylesContainer={{
              custom: `
                padding: 0px;
              `,
            }}
          />
        </ModelForm>
      </div>
    </>
  );
};
