import React from 'react';
import { Title1, Title2 } from '../Title';
import type { Title1Props, Title2Props } from '../Title';
import { css, cx } from '@emotion/css';

export type SearchBoxStylesContainerProps = {
  padding?: string;
  width?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  custom?: string;
};

const SearchBoxStylesContainer = (styles: SearchBoxStylesContainerProps) => css`
  padding: ${styles.padding || '40px'};
  width: ${styles.width || '60%'};
  border-radius: ${styles.borderRadius || '10px'};
  background-color: ${styles.backgroundColor || '#fff'};
  margin: ${styles.margin || '30px auto'};
  ${styles.custom || ''}
`;

export type SearchBoxStylesContentProps = {
  custom?: string;
};

const SearchBoxStylesContent = (styles: SearchBoxStylesContentProps) => css`
  ${styles.custom || ''}
`;

export type SearchBoxProps = {
  containerStyles?: SearchBoxStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLFormElement>;
  contentStyles?: SearchBoxStylesContentProps;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
  title1Props: Title1Props;
  title2Props: Title2Props;
  children: React.ReactNode;
};

export const SearchBox = ({
  containerStyles = {},
  containerProps = {},
  contentStyles = {},
  contentProps = {},
  title1Props,
  title2Props,
  children,
}: SearchBoxProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;
  return (
    <>
      <form
        className={cx(
          SearchBoxStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <div
          className={cx(
            SearchBoxStylesContent(contentStyles),
            contentClassName
          )}
          {...restContentProps}
        >
          <Title1 {...title1Props} />
          <Title2 {...title2Props} />
        </div>
        {children}
      </form>
    </>
  );
};
