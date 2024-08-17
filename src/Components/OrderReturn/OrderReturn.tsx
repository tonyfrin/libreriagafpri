import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  UseGafpriProductsReturn,
  UseGafpriOrderReturnReturn,
  UseGafpriEntityReturn,
  SiteOptions,
  UseGafpriPaymentReturn,
} from '../../states';
import {
  FadeIn,
  HeaderMenu,
  HeaderMenuItem,
  MainMenuItems,
  UseGafpriPagesSalesModuleReturn,
  OrderReturnInit,
  EntitySearch,
  SalesReturn,
  OrderReturnPaymentForm,
} from '../../Abstract';
import { EntityOrder } from '../Entity';
import { ProductOrder } from '../Products';

export type OrderReturnStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  minHeight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  custom?: string;
};

const orderStylesContainer = (stayles: OrderReturnStylesContainerProps) => css`
  padding-top: ${stayles.paddingTop || '60px'};
  padding-bottom: ${stayles.paddingBottom || '50px'};
  min-height: ${stayles.minHeight || '100vh'};
  ${stayles.backgroundImage &&
  `background-image: url(${stayles.backgroundImage});`}
  background-repeat: ${stayles.backgroundRepeat || 'no-repeat'};
  background-size: ${stayles.backgroundSize || '345vh'};
  ${stayles.custom || ''}
`;

export type OrderReturnProps = {
  use: UseGafpriOrderReturnReturn;
  returnModule: () => void;
  sitesOptions: SiteOptions;
  containerStyles?: OrderReturnStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  itemsMenu: HeaderMenuItem[];
  usePayment: UseGafpriPaymentReturn;
};

export const OrderReturn = ({
  use,
  returnModule,
  containerStyles = {},
  containerProps = {},
  itemsMenu,
  sitesOptions,
  usePayment,
}: OrderReturnProps): JSX.Element => {
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
          <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
            <OrderReturnInit use={use} returnModule={returnModule} />
          </FadeIn>
        )}
        {use.pages.states.isSales && (
          <FadeIn keyName="sales" isVisible={use.pages.states.isSales}>
            <SalesReturn
              use={use}
              sitesOptions={sitesOptions}
              usePayment={usePayment}
            />
          </FadeIn>
        )}
        {use.pages.states.isOrderPayment && (
          <>
            <OrderReturnPaymentForm
              use={usePayment}
              useOrderReturn={use}
              siteOptions={sitesOptions}
            />
          </>
        )}
      </div>
    </>
  );
};
