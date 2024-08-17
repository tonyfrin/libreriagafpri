import React, { HTMLAttributes } from 'react';
import { CircleButton, CircleButtonPropsExtended } from '../Button';
import { css, cx } from '@emotion/css';

export type HeaderMenuItem = {
  key: string;
  image: string;
  title: string;
  onClick?: () => void;
};

export type HeaderMenuStylesContainerProps = {
  paddingBottom?: string;
  marginTop?: string;
  maxWidth?: string;
  margin?: string;
  custom?: string;
};

export type HeaderMenuStylesContentProps = {
  width?: string;
  margin?: string;
  custom?: string;
};

export type HeaderMenuStylesContentUlProps = {
  display?: string;
  padding?: string;
  justifyContent?: string;
  custom?: string;
};

export type HeaderMenuStylesContentLiProps = {
  listStyle?: string;
  custom?: string;
};

export type HeaderMenuProps = {
  items: HeaderMenuItem[];
  stylesContainer?: HeaderMenuStylesContainerProps;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  stylesContent?: HeaderMenuStylesContentProps;
  contentProps?: HTMLAttributes<HTMLDivElement>;
  contentUlProps?: HTMLAttributes<HTMLUListElement>;
  stylesContentUl?: HeaderMenuStylesContentUlProps;
  stylesContentLi?: HeaderMenuStylesContentLiProps;
  contentLiProps?: HTMLAttributes<HTMLLIElement>;
  contentButtonProps?: CircleButtonPropsExtended;
};

export type HeaderMenuPropsExtended = {
  stylesContainer?: HeaderMenuStylesContainerProps;
  containerProps?: HTMLAttributes<HTMLUListElement>;
  stylesContent?: HeaderMenuStylesContentProps;
  contentProps?: HTMLAttributes<HTMLLIElement>;
  contentUlProps?: HTMLAttributes<HTMLUListElement>;
  stylesContentUl?: HeaderMenuStylesContentUlProps;
  stylesContentLi?: HeaderMenuStylesContentLiProps;
  contentLiProps?: HTMLAttributes<HTMLLIElement>;
  contentButtonProps?: CircleButtonPropsExtended;
};

const headerMenuStylesContainer = (
  styles: HeaderMenuStylesContainerProps
) => css`
  padding-bottom: ${styles.paddingBottom || '20px'};
  margin-top: ${styles.marginTop || '20px'};
  max-width: ${styles.maxWidth || '900px'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom ? styles.custom : ''}
`;

const headerMenuStylesContent = (styles: HeaderMenuStylesContentProps) => css`
  width: ${styles.width || '83.33%'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom ? styles.custom : ''}
`;

const headerMenuStylesContentUl = (
  styles: HeaderMenuStylesContentUlProps
) => css`
  display: ${styles.display || 'flex'};
  padding: ${styles.padding || '0'};
  justify-content: ${styles.justifyContent || 'space-between'};
  ${styles.custom ? styles.custom : ''}
`;

const headerMenuStylesContentLi = (
  styles: HeaderMenuStylesContentLiProps
) => css`
  list-style: ${styles.listStyle || 'none'};
  ${styles.custom ? styles.custom : ''}
`;

export const HeaderMenu = ({
  items,
  stylesContainer = {},
  containerProps = {},
  stylesContent = {},
  contentProps = {},
  contentUlProps = {},
  stylesContentUl = {},
  stylesContentLi = {},
  contentLiProps = {},
  contentButtonProps,
}: HeaderMenuProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;
  const { className: contentUlClassName, ...restContentUlProps } =
    contentUlProps;
  const { className: contentLiClassName, ...restContentLiProps } =
    contentLiProps;

  return (
    <>
      <div
        className={cx(
          headerMenuStylesContainer(stylesContainer),
          containerClassName
        )}
        {...restContainerProps}
      >
        <div
          className={cx(
            headerMenuStylesContent(stylesContent),
            contentClassName
          )}
          {...restContentProps}
        >
          <ul
            className={cx(
              headerMenuStylesContentUl(stylesContentUl),
              contentUlClassName
            )}
            {...restContentUlProps}
          >
            {items.map((item, index) => (
              <li
                key={`${item.key}`}
                className={cx(
                  headerMenuStylesContentLi(stylesContentLi),
                  contentLiClassName
                )}
                {...restContentLiProps}
              >
                <CircleButton
                  title={item.title}
                  image={item.image}
                  contentProps={{
                    onClick: item.onClick,
                  }}
                  titleStyles={{
                    fontSize: '8px',
                    fontWeight: '500',
                    textTransform: 'capitalize',
                  }}
                  imageStyles={{
                    width: '50px',
                  }}
                  {...contentButtonProps}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
