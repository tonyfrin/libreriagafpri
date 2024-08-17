import React from 'react';
import { css, cx } from '@emotion/css';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

export type LineInfoThreeStylesContainerProps = {
  display?: string;
  width?: string;
  custom?: string;
};

export type LineInfoThreeStylesContentTitleProps = {
  width?: string;
  margin?: string;
  fontWeight?: string;
  custom?: string;
};

export type LineInfoThreeStylesSpanTitle = {
  fontSize?: string;
  margin?: string;
  custom?: string;
};

export type LineInfoThreeStylesContentInfoProps = {
  width?: string;
  margin?: string;
  custom?: string;
};

export type LineInfoThreeStylesSpanInfo = {
  fontSize?: string;
  margin?: string;
  custom?: string;
};

export type LineInfoThreeStylesContentButtonProps = {
  width?: string;
  margin?: string;
  custom?: string;
};

const lineInfoThreeStylesContainer = (
  styles: LineInfoThreeStylesContainerProps
) => css`
  display: ${styles.display || 'flex'};
  width: ${styles.width || '100%'};
  ${styles.custom || ''}
`;

const lineInfoThreeStylesContentTitle = (
  styles: LineInfoThreeStylesContentTitleProps
) => css`
  margin: ${styles.margin || '8px auto'};
  width: ${styles.width || '33.3333333%'};
  font-weight: ${styles.fontWeight || '700'};
  ${styles.custom || ''}
`;

const lineInfoThreeStylesSpanTitle = (
  styles: LineInfoThreeStylesSpanTitle
) => css`
  font-size: ${styles.fontSize || '15px'};
  margin: ${styles.margin || '0.5em'};
  ${styles.custom || ''}
`;

const lineInfoThreeStylesContentInfo = (
  styles: LineInfoThreeStylesContentInfoProps
) => css`
  width: ${styles.width || '50%'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

const lineInfoThreeStylesSpanInfo = (
  styles: LineInfoThreeStylesSpanInfo
) => css`
  font-size: ${styles.fontSize || '15px'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

const lineInfoThreeStylesContentButton = (
  styles: LineInfoThreeStylesContentButtonProps
) => css`
  width: ${styles.width || '16.6666667%'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

export type LineInfoThreeProps = {
  containerStyles?: LineInfoThreeStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentTitleStyles?: LineInfoThreeStylesContentTitleProps;
  contentTitleProps?: React.HTMLAttributes<HTMLDivElement>;
  spanTitleStyles?: LineInfoThreeStylesSpanTitle;
  spanTitleProps?: React.HTMLAttributes<HTMLSpanElement>;
  title: string;
  contentInfoStyles?: LineInfoThreeStylesContentInfoProps;
  contentInfoProps?: React.HTMLAttributes<HTMLDivElement>;
  spanInfoStyles?: LineInfoThreeStylesSpanInfo;
  spanInfoProps?: React.HTMLAttributes<HTMLSpanElement>;
  info: string;
  contentButtonStyles?: LineInfoThreeStylesContentButtonProps;
  contentButtonProps?: React.HTMLAttributes<HTMLDivElement>;
  buttonProps: ButtonProps;
};

export const LineInfoThree = ({
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
  contentButtonStyles = {},
  contentButtonProps = {},
  buttonProps,
}: LineInfoThreeProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentTitleClassName, ...restContentTitleProps } =
    contentTitleProps;
  const { className: spanTitleClassName, ...restSpanTitleProps } =
    spanTitleProps;
  const { className: contentInfoClassName, ...restContentInfoProps } =
    contentInfoProps;
  const { className: spanInfoClassName, ...restSpanInfoProps } = spanInfoProps;
  const { className: contentButtonClassName, ...restContentButtonProps } =
    contentButtonProps;

  return (
    <div
      className={cx(
        lineInfoThreeStylesContainer(containerStyles),
        containerClassName
      )}
      {...restContainerProps}
    >
      <div
        className={cx(
          lineInfoThreeStylesContentTitle(contentTitleStyles),
          contentTitleClassName
        )}
        {...restContentTitleProps}
      >
        <span
          className={cx(
            lineInfoThreeStylesSpanTitle(spanTitleStyles),
            spanTitleClassName
          )}
          {...restSpanTitleProps}
        >
          {title}
        </span>
      </div>
      <div
        className={cx(
          lineInfoThreeStylesContentInfo(contentInfoStyles),
          contentInfoClassName
        )}
        {...restContentInfoProps}
      >
        <span
          className={cx(
            lineInfoThreeStylesSpanInfo(spanInfoStyles),
            spanInfoClassName
          )}
          {...restSpanInfoProps}
        >
          {info}
        </span>
      </div>
      <div
        className={cx(
          lineInfoThreeStylesContentButton(contentButtonStyles),
          contentButtonClassName
        )}
        {...restContentButtonProps}
      >
        <Button {...buttonProps} />
      </div>
    </div>
  );
};
