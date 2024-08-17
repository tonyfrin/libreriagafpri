import React from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  FadeIn,
  EntityAddForm,
  MainMenuItems,
  EntityIncomeInit,
} from '../../Abstract';
import { UseGafpriIncomeReturn, UseGafpriEntityReturn } from '../../states';

export type EntityIncomeStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

const entityIncomeStylesContainer = (
  stayles: EntityIncomeStylesContainerProps
) => css`
  ${stayles.custom || ''}
`;

export type EntityIncomeProps = {
  use: UseGafpriEntityReturn;
  useIncome: UseGafpriIncomeReturn;
  containerStyles?: EntityIncomeStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menu: MainMenuItems[];
};

export const EntityIncome = ({
  use,
  useIncome,
  containerStyles = {},
  containerProps = {},
  menu,
}: EntityIncomeProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          entityIncomeStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {use.pages.states.isFetching && <Loading />}
        {use.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
            <EntityIncomeInit
              useEntity={use}
              useIncome={useIncome}
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
