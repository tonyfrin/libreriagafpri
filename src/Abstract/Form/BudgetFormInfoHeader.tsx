import React from 'react';
import type { SiteOptions } from '../../states';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { UseGafpriBudgetReturn } from '../../states';
import { Button } from '../Button';
import { LineInfoTwo } from '../Li';
import { decimalFormatPriceConverter } from '../../helpers';

export type BudgetFormInfoHeaderProps = {
  useBudget: UseGafpriBudgetReturn;
  siteOptions: SiteOptions;
};

export const BudgetFormInfoHeader = ({
  useBudget,
  siteOptions,
}: BudgetFormInfoHeaderProps) => {
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
            useBudget.useProductItems.states.subTotal || '0',
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
            useBudget.useProductItems.states.subTotalTax || '0',
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
            useBudget.useProductItems.states.total || '0',
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
            {parseFloat(useBudget.useProductItems.states.total) > 0 && (
              <Button
                title="Emitir presupuesto"
                buttonProps={{
                  onClick: () => useBudget.api.actions.add(),
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
