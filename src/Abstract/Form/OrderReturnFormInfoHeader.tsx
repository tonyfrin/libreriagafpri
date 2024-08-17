import React from 'react';
import type { SiteOptions } from '../../states';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { UseGafpriOrderReturnReturn } from '../../states';
import { Button } from '../Button';
import { LineInfoTwo } from '../Li';
import { decimalFormatPriceConverter } from '../../helpers';

export type OrderReturnFormInfoHeaderProps = {
  useOrderReturn: UseGafpriOrderReturnReturn;
  siteOptions: SiteOptions;
  goPayment: () => void;
};

export const OrderReturnFormInfoHeader = ({
  useOrderReturn,
  siteOptions,
  goPayment,
}: OrderReturnFormInfoHeaderProps) => {
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
            useOrderReturn.useProductItems.states.subTotal || '0',
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
            useOrderReturn.useProductItems.states.subTotalTax || '0',
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
            useOrderReturn.useProductItems.states.total || '0',
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
            {parseFloat(useOrderReturn.useProductItems.states.total) > 0 && (
              <Button
                title="Emitir devolución"
                buttonProps={{
                  onClick: () => goPayment(),
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
