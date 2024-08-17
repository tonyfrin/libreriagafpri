import React from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  FadeIn,
  EntityAddForm,
  MainMenuItems,
  EntityOrderInit,
} from '../../Abstract';
import { UseGafpriOrderReturn, UseGafpriEntityReturn } from '../../states';

export type EntityOrderStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

const entityOrderStylesContainer = (
  stayles: EntityOrderStylesContainerProps
) => css`
  ${stayles.custom || ''}
`;

export type EntityOrderProps = {
  use: UseGafpriEntityReturn;
  useOrder: UseGafpriOrderReturn;
  containerStyles?: EntityOrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menu: MainMenuItems[];
};

export const EntityOrder = ({
  use,
  useOrder,
  containerStyles = {},
  containerProps = {},
  menu,
}: EntityOrderProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          entityOrderStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {use.pages.states.isFetching && <Loading />}
        {use.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
            <EntityOrderInit useEntity={use} useOrder={useOrder} menu={menu} />
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
