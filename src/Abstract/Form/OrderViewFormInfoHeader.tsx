import React from 'react';
import type { SiteOptions } from '../../states';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { LineInfoTwo } from '../Li';
import { decimalFormatPriceConverter } from '../../helpers';
import { OrderAttributes } from '../states';
import { PrintButtonOrderPending } from '../Pdf';

export type OrderViewFormInfoHeaderProps = {
  order: OrderAttributes;
  siteOptions: SiteOptions;
  logoPdf: string;
};

export const OrderViewFormInfoHeader = ({
  order,
  siteOptions,
  logoPdf,
}: OrderViewFormInfoHeaderProps) => {
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
            order.subTotal || '0',
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
            order.subTotalTax || '0',
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
            order.total || '0',
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
            <PrintButtonOrderPending
              order={order}
              siteOptions={siteOptions}
              logoPdf={logoPdf}
            />
          </>
        </ContainerButton>
      </ContainerHeaderInfo>
    </>
  );
};
