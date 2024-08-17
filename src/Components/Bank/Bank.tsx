import React from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  UseGafpriBankTypeReturn,
  SiteOptions,
  UseCurrenciesReturn,
} from '../../states';
import {
  InitBank,
  HeaderMenu,
  HeaderMenuItem,
  MainMenuItems,
  BankForm,
} from '../../Abstract';

export type OrderStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  minHeight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  custom?: string;
};

const orderStylesContainer = (stayles: OrderStylesContainerProps) => css`
  padding-top: ${stayles.paddingTop || '60px'};
  padding-bottom: ${stayles.paddingBottom || '50px'};
  min-height: ${stayles.minHeight || '100vh'};
  ${stayles.backgroundImage &&
  `background-image: url(${stayles.backgroundImage});`}
  background-repeat: ${stayles.backgroundRepeat || 'no-repeat'};
  background-size: ${stayles.backgroundSize || '345vh'};
  ${stayles.custom || ''}
`;

export type BankProps = {
  use: UseGafpriBankTypeReturn;
  useCurrencies: UseCurrenciesReturn;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  itemsMenu: HeaderMenuItem[];
  siteOptions: SiteOptions;
  entityMenu: MainMenuItems[];
  returnModule: () => void;
};

export const Bank = ({
  use,
  useCurrencies,
  containerStyles = {},
  containerProps = {},
  itemsMenu,
  siteOptions,
  entityMenu,
  returnModule,
}: BankProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          orderStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <HeaderMenu items={itemsMenu} />
        {use.pages.states.isFetching && (
          <Loading
            mainStyles={{
              custom: 'height: 100vh;',
            }}
          />
        )}

        {use.pages.states.isInit && (
          <InitBank
            use={use}
            returnModule={returnModule}
            siteOptions={siteOptions}
          />
        )}

        {use.pages.states.isPortal && (
          <BankForm
            use={use}
            siteOptions={siteOptions}
            useCurrencies={useCurrencies}
          />
        )}
      </div>
    </>
  );
};
