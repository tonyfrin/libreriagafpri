import React from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  FadeIn,
  EntityAddForm,
  MainMenuItems,
  EntityBudgetInit,
} from '../../Abstract';
import { UseGafpriBudgetReturn, UseGafpriEntityReturn } from '../../states';

export type EntityBudgetStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

const entityBudgetStylesContainer = (
  stayles: EntityBudgetStylesContainerProps
) => css`
  ${stayles.custom || ''}
`;

export type EntityBudgetProps = {
  use: UseGafpriEntityReturn;
  useBudget: UseGafpriBudgetReturn;
  containerStyles?: EntityBudgetStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menu: MainMenuItems[];
};

export const EntityBudget = ({
  use,
  useBudget,
  containerStyles = {},
  containerProps = {},
  menu,
}: EntityBudgetProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          entityBudgetStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {use.pages.states.isFetching && <Loading />}
        {use.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
            <EntityBudgetInit
              useEntity={use}
              useBudget={useBudget}
              menu={menu}
            />
          </FadeIn>
        )}
        {use.pages.states.isAdd && (
          <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
            <EntityAddForm
              modelFormContainerProps={{
                styles: {
                  height: '100%',
                  padding: '40px 40px 0px 40px',
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
