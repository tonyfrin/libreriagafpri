import React from 'react';
import { css, cx } from '@emotion/css';

export type LineInfoTwoStylesContainerProps = {
  display?: string;
  width?: string;
  custom?: string;
};

export type LineInfoTwoStylesContentTitleProps = {
  width?: string;
  margin?: string;
  fontWeight?: string;
  custom?: string;
};

export type LineInfoTwoStylesSpanTitle = {
  fontSize?: string;
  margin?: string;
  custom?: string;
};

export type LineInfoTwoStylesContentInfoProps = {
  width?: string;
  margin?: string;
  custom?: string;
};

export type LineInfoTwoStylesSpanInfo = {
  fontSize?: string;
  margin?: string;
  custom?: string;
};

const lineInfoTwoStylesContainer = (
  styles: LineInfoTwoStylesContainerProps
) => css`
  display: ${styles.display || 'flex'};
  width: ${styles.width || '100%'};
  ${styles.custom || ''}
`;

const lineInfoTwoStylesContentTitle = (
  styles: LineInfoTwoStylesContentTitleProps
) => css`
  width: ${styles.width || '33.3333333%'};
  margin: ${styles.margin || '8px auto'};
  font-weight: ${styles.fontWeight || '700'};
  ${styles.custom || ''}
`;

const lineInfoTwoStylesSpanTitle = (styles: LineInfoTwoStylesSpanTitle) => css`
  font-size: ${styles.fontSize || '15px'};
  margin: ${styles.margin || '0.5em'};
  ${styles.custom || ''}
`;

const lineInfoTwoStylesContentInfo = (
  styles: LineInfoTwoStylesContentInfoProps
) => css`
  width: ${styles.width || '66.6666667%'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

const lineInfoTwoStylesSpanInfo = (styles: LineInfoTwoStylesSpanInfo) => css`
  font-size: ${styles.fontSize || '15px'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

export type LineInfoTwoProps = {
  containerStyles?: LineInfoTwoStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentTitleStyles?: LineInfoTwoStylesContentTitleProps;
  contentTitleProps?: React.HTMLAttributes<HTMLDivElement>;
  spanTitleStyles?: LineInfoTwoStylesSpanTitle;
  spanTitleProps?: React.HTMLAttributes<HTMLSpanElement>;
  title: string;
  contentInfoStyles?: LineInfoTwoStylesContentInfoProps;
  contentInfoProps?: React.HTMLAttributes<HTMLDivElement>;
  spanInfoStyles?: LineInfoTwoStylesSpanInfo;
  spanInfoProps?: React.HTMLAttributes<HTMLSpanElement>;
  info: string;
};

export const LineInfoTwo = ({
  containerStyles = {},
  containerProps = {},
  contentTitleStyles = {},
  contentTitleProps = {},
  spanTitleStyles = {},
  spanTitleProps = {},
  title,
  contentInfoStyles = {},
  contentInfoProps = {},
  spanInfoStyles = {},
  spanInfoProps = {},
  info,
}: LineInfoTwoProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentTitleClassName, ...restContentTitleProps } =
    contentTitleProps;
  const { className: spanTitleClassName, ...restSpanTitleProps } =
    spanTitleProps;
  const { className: contentInfoClassName, ...restContentInfoProps } =
    contentInfoProps;
  const { className: spanInfoClassName, ...restSpanInfoProps } = spanInfoProps;

  return (
    <div
      className={cx(
        lineInfoTwoStylesContainer(containerStyles),
        containerClassName
      )}
      {...restContainerProps}
    >
      <div
        className={cx(
          lineInfoTwoStylesContentTitle(contentTitleStyles),
          contentTitleClassName
        )}
        {...restContentTitleProps}
      >
        <span
          className={cx(
            lineInfoTwoStylesSpanTitle(spanTitleStyles),
            spanTitleClassName
          )}
          {...restSpanTitleProps}
        >
          {title}
        </span>
      </div>
      <div
        className={cx(
          lineInfoTwoStylesContentInfo(contentInfoStyles),
          contentInfoClassName
        )}
        {...restContentInfoProps}
      >
        <span
          className={cx(
            lineInfoTwoStylesSpanInfo(spanInfoStyles),
            spanInfoClassName
          )}
          {...restSpanInfoProps}
        >
          {info}
        </span>
      </div>
    </div>
  );
};
