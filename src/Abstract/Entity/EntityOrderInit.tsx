import React from 'react';
import { css, cx } from '@emotion/css';
import { MainMenu, MainMenuItems } from '../Menu';
import { ModelForm } from '../Form';
import { UseGafpriEntityReturn, UseGafpriOrderReturn } from '../../states';

export type EntityOrderInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type EntityOrderInitProps = {
  containerStyles?: EntityOrderInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useEntity: UseGafpriEntityReturn;
  useOrder: UseGafpriOrderReturn;
  menu: MainMenuItems[];
};

const entityOrderInitStylesContainer = (
  stayles: EntityOrderInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const EntityOrderInit = ({
  containerStyles = {},
  containerProps = {},
  useEntity,
  useOrder,
  menu,
}: EntityOrderInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  const handleActions = (action: string, value: any): void => {
    switch (action) {
      case 'submit':
        break;
      case 'return':
        useOrder.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <>
      <div
        className={cx(
          entityOrderInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <ModelForm
          titles={{
            title1: 'Modulo de ventas',
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
