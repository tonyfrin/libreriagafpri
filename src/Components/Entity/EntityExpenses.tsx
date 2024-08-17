import React from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  FadeIn,
  EntityAddForm,
  MainMenuItems,
  EntityExpensesInit,
} from '../../Abstract';
import { UseGafpriExpensesReturn, UseGafpriEntityReturn } from '../../states';

export type EntityExpensesStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

const entityExpensesStylesContainer = (
  stayles: EntityExpensesStylesContainerProps
) => css`
  ${stayles.custom || ''}
`;

export type EntityExpensesProps = {
  use: UseGafpriEntityReturn;
  useExpenses: UseGafpriExpensesReturn;
  containerStyles?: EntityExpensesStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menu: MainMenuItems[];
};

export const EntityExpenses = ({
  use,
  useExpenses,
  containerStyles = {},
  containerProps = {},
  menu,
}: EntityExpensesProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          entityExpensesStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {use.pages.states.isFetching && <Loading />}
        {use.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
            <EntityExpensesInit
              useEntity={use}
              useExpenses={useExpenses}
              menu={menu}
            />
          </FadeIn>
        )}
        {use.pages.states.isAdd && (
          <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
            <EntityAddForm
              modelFormContainerProps={{
                styles: {
                  height: 'auto',
                  padding: '10px',
                  width: 'auto',
                },
              }}
              use={use}
              formType={use.attributes.states.formType}
              propsPhoto={{
                imageStyle: `
                    width: 100%;
                    max-width: 150px;
                    max-height: 150px;
                    object-fit: cover;
                    border: 1px solid #ebebeb;
                    margin: auto;
                    border-radius: 100%;
                  `,
              }}
            />
          </FadeIn>
        )}
      </div>
    </>
  );
};
