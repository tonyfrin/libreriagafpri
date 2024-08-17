import React from 'react';
import { css, cx } from '@emotion/css';

type DivSigleCheckStyle = {
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;
  borderWidth?: string;
  boxSizing?: string;
  padding?: string;
  customStyle?: string;
};

type LabelSingleCheckStyle = {
  customStyle?: string;
};

type SpanSingleCheckStyle = {
  customStyle?: string;
};

const divSigleCheckStyle = (styles: DivSigleCheckStyle) => css`
  border-color: ${styles.borderColor || 'hsl(0, 0%, 80%)'};
  border-radius: ${styles.borderRadius || '4px'};
  border-style: ${styles.borderStyle || 'solid'};
  border-width: ${styles.borderWidth || '1px'};
  box-sizing: ${styles.boxSizing || 'border-box'};
  padding: ${styles.padding || '10px'};
  ${styles.customStyle || ''}
`;

const labelSingleChackStyle = (styles: LabelSingleCheckStyle) => css`
  ${styles.customStyle || ''}
`;

const spanSingleChackStyle = (styles: SpanSingleCheckStyle) => css`
  ${styles.customStyle || ''}
`;

export interface SingleCheckBoxProps {
  selected: boolean;
  title: string;
  onChange: () => void;
  containerStyles?: DivSigleCheckStyle;
  itemStayles?: LabelSingleCheckStyle;
  titleStyles?: SpanSingleCheckStyle;
}

export const SingleCheckBox: React.FC<SingleCheckBoxProps> = ({
  selected,
  title,
  onChange,
  containerStyles = {},
  itemStayles = {},
  titleStyles = {},
}) => {
  return (
    <div className={cx(divSigleCheckStyle(containerStyles))}>
      <label className={cx(labelSingleChackStyle(itemStayles))}>
        <span className={cx(spanSingleChackStyle(titleStyles))}>{title}</span>
        <input type="checkbox" checked={selected} onChange={onChange} />
      </label>
    </div>
  );
};
