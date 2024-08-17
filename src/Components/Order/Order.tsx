import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  UseGafpriProductsReturn,
  UseGafpriOrderReturn,
  UseGafpriEntityReturn,
  SiteOptions,
} from '../../states';
import {
  FadeIn,
  HeaderMenu,
  HeaderMenuItem,
  MainMenuItems,
  UseGafpriPagesSalesModuleReturn,
  OrderInit,
  EntitySearch,
  Sales,
} from '../../Abstract';
import { EntityOrder } from '../Entity';
import { ProductOrder } from '../Products';

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

export type OrderProps = {
  use: UseGafpriOrderReturn;
  useEntity: UseGafpriEntityReturn;
  usePagesMain: UseGafpriPagesSalesModuleReturn;
  sitesOptions: SiteOptions;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  itemsMenu: HeaderMenuItem[];
  useProducts: UseGafpriProductsReturn;
  menuEntity: MainMenuItems[];
  uploadOrder: (event: KeyboardEvent<HTMLInputElement>) => void;
  uploadOrderOnlyProducts: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const Order = ({
  use,
  useEntity,
  containerStyles = {},
  containerProps = {},
  itemsMenu,
  usePagesMain,
  sitesOptions,
  useProducts,
  menuEntity,
  uploadOrder,
  uploadOrderOnlyProducts,
}: OrderProps): JSX.Element => {
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
            <OrderInit
              useEntity={useEntity}
              useOrder={use}
              usePagesMain={usePagesMain}
              uploadOrder={uploadOrder}
            />
          </FadeIn>
        )}
        {use.pages.states.isAddEntity && (
          <FadeIn keyName="addEntity" isVisible={use.pages.states.isAddEntity}>
            <EntityOrder use={useEntity} useOrder={use} menu={menuEntity} />
          </FadeIn>
        )}
        {use.pages.states.isSales && (
          <FadeIn keyName="sales" isVisible={use.pages.states.isSales}>
            <Sales
              useOrder={use}
              sitesOptions={sitesOptions}
              useProducts={useProducts}
              uploadOrder={uploadOrderOnlyProducts}
            />
          </FadeIn>
        )}
        {use.pages.states.isEntitySearch && (
          <FadeIn
            keyName="entitySearch"
            isVisible={use.pages.states.isEntitySearch}
          >
            <EntitySearch use={useEntity} useOrder={use} />
          </FadeIn>
        )}
        {use.pages.states.isProductSearch && (
          <FadeIn
            keyName="productySearch"
            isVisible={use.pages.states.isProductSearch}
          >
            <ProductOrder
              useProduct={useProducts}
              useOrder={use}
              sitesOptions={sitesOptions}
            />
          </FadeIn>
        )}
      </div>
    </>
  );
};
