import React from 'react';
import { css, cx } from '@emotion/css';

type CreditHeaderLineContainerStylesProps = {
  backgroundColor?: string;
  margin?: string;
  borderRadius?: string;
  padding?: string;
  custom?: string;
};

const creditHeaderLineContainerStyles = (
  styles: CreditHeaderLineContainerStylesProps
) => css`
  background-color: ${styles.backgroundColor || '#eaeaea'};
  margin: ${styles.margin || '1%'};
  border-radius: ${styles.borderRadius || '5px'};
  padding: ${styles.padding || '1%'};
  ${styles.custom}
`;

const creditHeaderLineColStyles = (width: string, custom?: string) => css`
  text-align: center;
  width: ${width};
  ${custom || ''};
`;

export type CreditHeaderLineProps = {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  containerStyles?: CreditHeaderLineContainerStylesProps;
};

export const CreditHeaderLine = ({
  col1,
  col2,
  col3,
  col4,
  containerStyles = {},
}: CreditHeaderLineProps): JSX.Element => {
  return (
    <div className={cx(creditHeaderLineContainerStyles(containerStyles))}>
      <span className={cx(creditHeaderLineColStyles('0.1666666666%'))}>
        {col1}
      </span>
      <span className={cx(creditHeaderLineColStyles('50%'))}>{col2}</span>
      <span className={cx(creditHeaderLineColStyles('25%'))}>{col3}</span>
      <span className={cx(creditHeaderLineColStyles('0.0833333333%'))}>
        {col4}
      </span>
    </div>
  );
};
