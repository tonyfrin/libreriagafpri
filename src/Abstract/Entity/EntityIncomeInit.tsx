import React from 'react';
import { css, cx } from '@emotion/css';
import { MainMenu, MainMenuItems } from '../Menu';
import { ModelForm } from '../Form';
import { UseGafpriEntityReturn, UseGafpriIncomeReturn } from '../../states';

export type EntityIncomeInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type EntityIncomeInitProps = {
  containerStyles?: EntityIncomeInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useEntity: UseGafpriEntityReturn;
  useIncome: UseGafpriIncomeReturn;
  menu: MainMenuItems[];
};

const entityIncomeInitStylesContainer = (
  stayles: EntityIncomeInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const EntityIncomeInit = ({
  containerStyles = {},
  containerProps = {},
  useEntity,
  useIncome,
  menu,
}: EntityIncomeInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  const handleActions = (action: string, value: any): void => {
    switch (action) {
      case 'submit':
        break;
      case 'return':
        useIncome.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <>
      <div
        className={cx(
          entityIncomeInitStylesContainer(containerStyles),
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
          <MainMenu items={menu} />
        </ModelForm>
      </div>
    </>
  );
};
