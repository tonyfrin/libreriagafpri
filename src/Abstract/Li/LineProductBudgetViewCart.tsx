import React from 'react';
import type { SiteOptions, UseGafpriBudgetReturn } from '../../states';
import { Button } from '../Button';
import { InputCart } from '../Input';
import { decimalFormatPriceConverter } from '../../helpers';
import { LineCol1 } from './LineCol1';
import { SpanValue } from '../Span';
import { LineCol4 } from './LineCol4';
import { LineCol2 } from './LineCol2';
import { LineTable } from './LineTable';
import { BudgetAttributes } from '../states';

export type LineProductBudgetViewCartProps = {
  budget: BudgetAttributes;
  siteOptions: SiteOptions;
};

export const LineProductBudgetViewCart = ({
  budget,
  siteOptions,
}: LineProductBudgetViewCartProps): React.ReactElement => {
  const items = budget.budgetItems.map((product, index) => (
    <LineTable
      containerProps={{
        key: `product-${index}`,
      }}
    >
      <LineCol2>
        <SpanValue value={product.sku} />
      </LineCol2>

      <LineCol4>
        <SpanValue value={product.name} />
      </LineCol4>

      <LineCol2>
        <SpanValue
          value={decimalFormatPriceConverter(
            product.qty || 0,
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
        />
      </LineCol2>
      <LineCol2>
        <SpanValue
          value={decimalFormatPriceConverter(
            product.price || 0,
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
        />
      </LineCol2>

      <LineCol2>
        <SpanValue
          value={decimalFormatPriceConverter(
            (
              parseFloat(`${product.qty}`) * parseFloat(`${product.price}`)
            ).toFixed(2) || '0',
            siteOptions.DECIMAL_NUMBERS,
            siteOptions.CURRENCY_SYMBOL,
            siteOptions.CURRENCY_LOCATION
          )}
        />
      </LineCol2>
    </LineTable>
  ));

  return <>{items}</>;
};
