import React from 'react';
import type { SiteOptions } from '../../states';
import { decimalFormatPriceConverter } from '../../helpers';
import { SpanValue } from '../Span';
import { LineCol4 } from './LineCol4';
import { LineCol2 } from './LineCol2';
import { LineTable } from './LineTable';
import { OrderAttributes } from '../states';

export type LineProductOrderViewCartProps = {
  order: OrderAttributes;
  siteOptions: SiteOptions;
};

export const LineProductOrderViewCart = ({
  order,
  siteOptions,
}: LineProductOrderViewCartProps): React.ReactElement => {
  const items = order.orderItems.map((product, index) => (
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
        <SpanValue value={parseFloat(`${product.qty}`).toFixed(2) || '0'} />
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
