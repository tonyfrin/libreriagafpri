import React from 'react';
import { css, cx } from '@emotion/css';
import { Title2 } from '../Title';
import { decimalFormatPriceConverter } from '../../helpers';
import { SiteOptions } from '../../states';
import { Button } from '../Button';
import { SingleTable } from './SingleTable';

export type MethodsPaymentItems = {
  title: string;
  amount: number;
  remove: (() => void) | null;
};

type MethodsPaymentTableContainerStylesProps = {
  width?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  height?: string;
  custom?: string;
};

const methodsPaymentTableContainerStyle = (
  styles: MethodsPaymentTableContainerStylesProps
) => css`
  width: ${styles.width || '45%'};
  background-color: ${styles.backgroundColor || '#fff'};
  padding: ${styles.padding || '10px 20px'};
  margin: ${styles.margin || '0px 20px'};
  border-radius: ${styles.borderRadius || '10px'};
  height: ${styles.height || 'auto'};
  ${styles.custom || ''}
`;

const methodsPaymentTableTdStyle = (width: string, custom?: string) => css`
  width: ${width};
  border: 1px solid #ddd;
  padding: 4px;
  text-align: center;
  ${custom || ''}
`;

export type MethodsPaymentTableProps = {
  siteOptions: SiteOptions;
  methods: MethodsPaymentItems[];
  title: string;
  total: number;
  containerStyles?: MethodsPaymentTableContainerStylesProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const MethodsPaymentTable = ({
  siteOptions,
  methods,
  title,
  total,
  containerStyles = {},
  containerProps = {},
}: MethodsPaymentTableProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  const items = methods.map((item) => {
    return [
      <td
        className={cx(methodsPaymentTableTdStyle('50%', `text-align: start;`))}
      >
        {item.title || ''}
      </td>,
      <td className={cx(methodsPaymentTableTdStyle('25%', `text-align: end;`))}>
        {decimalFormatPriceConverter(
          item.amount || 0,
          siteOptions.DECIMAL_NUMBERS,
          siteOptions.CURRENCY_SYMBOL || '',
          siteOptions.CURRENCY_LOCATION
        )}
      </td>,
      <td
        className={cx(methodsPaymentTableTdStyle('25%', `text-align: center;`))}
      >
        {item.remove && (
          <Button
            title="X"
            styles={{
              fontSize: '8px',
              backgroundColor: '#c12429',
              padding: '3px 6px',
            }}
            buttonProps={{
              onClick: item.remove,
            }}
          />
        )}
      </td>,
    ];
  });

  items.push([
    <td
      className={cx(
        methodsPaymentTableTdStyle(
          '50%',
          `
      text-align: end;
      font-weight: 700;
    `
        )
      )}
    >
      Total
    </td>,
    <td
      className={cx(
        methodsPaymentTableTdStyle(
          '25%',
          `
    text-align: end;
    font-weight: 700;
  `
        )
      )}
    >
      {decimalFormatPriceConverter(
        total || 0,
        siteOptions.DECIMAL_NUMBERS,
        siteOptions.CURRENCY_SYMBOL || '',
        siteOptions.CURRENCY_LOCATION
      )}
    </td>,
    <td
      className={cx(
        methodsPaymentTableTdStyle(
          '25%',
          `
      text-align: end;
      font-weight: 700;
    `
        )
      )}
    ></td>,
  ]);

  const header = ['Metodo de Pago', 'Monto', 'Acción'];

  return (
    <>
      <div
        className={cx(
          methodsPaymentTableContainerStyle(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <Title2
          title={title}
          styles={{
            fontSize: '0.9rem',
            margin: '0px',
            fontWeight: '700',
          }}
        />
        <SingleTable
          headers={header}
          data={items}
          containerStyles={{
            minHeight: 'none',
            custom: `
                    padding: 10px;
                  `,
          }}
        />
      </div>
    </>
  );
};
