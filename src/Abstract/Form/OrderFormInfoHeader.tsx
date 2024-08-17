import React from 'react';
import type { SiteOptions } from '../../states';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { UseGafpriOrderReturn } from '../../states';
import { Button } from '../Button';
import { LineInfoTwo } from '../Li';
import { decimalFormatPriceConverter } from '../../helpers';

export type OrderFormInfoHeaderProps = {
  useOrder: UseGafpriOrderReturn;
  siteOptions: SiteOptions;
};

export const OrderFormInfoHeader = ({
  useOrder,
  siteOptions,
}: OrderFormInfoHeaderProps) => {
  return (
    <>
      <ContainerHeaderInfo
        containerStyles={{
          borderRight: 'none',
        }}
      >
        <LineInfoTwo
          title="Sub-Total: "
          info={decimalFormatPriceConverter(
            useOrder.useProductItems.states.subTotal || '0',
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
          contentInfoStyles={{
            custom: 'text-align: center;',
          }}
        />
        <LineInfoTwo
          title="Impuestos: "
          info={decimalFormatPriceConverter(
            useOrder.useProductItems.states.subTotalTax || '0',
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
          contentInfoStyles={{
            custom: 'text-align: center;',
          }}
        />
        <LineInfoTwo
          title="Total: "
          info={decimalFormatPriceConverter(
            useOrder.useProductItems.states.total || '0',
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
          contentInfoStyles={{
            custom: 'text-align: center;',
          }}
        />
        <ContainerButton
          styles={{
            width: '100%',
            custom: 'margin-top: 30px;',
          }}
        >
          <>
            {parseFloat(useOrder.useProductItems.states.total) > 0 && (
              <Button
                title="Emitir pedido"
                buttonProps={{
                  onClick: () => useOrder.api.actions.add(),
                }}
                styles={{
                  fontSize: '12px',
                }}
              />
            )}
          </>
        </ContainerButton>
      </ContainerHeaderInfo>
    </>
  );
};
