import React from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  FadeIn,
  EntityAddForm,
  MainMenuItems,
  EntityAccountsReceivableInit,
} from '../../Abstract';
import {
  UseGafpriAccountsReceivableReturn,
  UseGafpriEntityReturn,
} from '../../states';

export type EntityAccountsReceivableStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

const entityAccountsReceivableStylesContainer = (
  stayles: EntityAccountsReceivableStylesContainerProps
) => css`
  ${stayles.custom || ''}
`;

export type EntityAccountsReceivableProps = {
  use: UseGafpriEntityReturn;
  useAccountsReceivable: UseGafpriAccountsReceivableReturn;
  containerStyles?: EntityAccountsReceivableStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menu: MainMenuItems[];
};

export const EntityAccountsReceivable = ({
  use,
  useAccountsReceivable,
  containerStyles = {},
  containerProps = {},
  menu,
}: EntityAccountsReceivableProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          entityAccountsReceivableStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {use.pages.states.isFetching && <Loading />}
        {use.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
            <EntityAccountsReceivableInit
              useEntity={use}
              useAccountsReceivable={useAccountsReceivable}
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
