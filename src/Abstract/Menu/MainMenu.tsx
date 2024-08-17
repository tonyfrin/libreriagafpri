import React, { HTMLAttributes } from 'react';
import { CircleButton } from '../Button';
import { css, cx } from '@emotion/css';

export type MainMenuItem = {
  key: string;
  image: string;
  title: string;
  onClick?: () => void;
};

export type MainMenuItems = MainMenuItem[];

export type MainMenuStylesContainerProps = {
  display?: string;
  justifyContent?: string;
  margin?: string;
  custom?: string;
};

export type MainMenuStylesContentProps = {
  textAling?: string;
  listStyle?: string;
  custom?: string;
};

export type MainMenuProps = {
  items: MainMenuItems[];
  stylesContainer?: MainMenuStylesContainerProps;
  containerProps?: HTMLAttributes<HTMLUListElement>;
  stylesContent?: MainMenuStylesContentProps;
  contentProps?: HTMLAttributes<HTMLLIElement>;
};

export type MainMenuPropsExtended = {
  stylesContainer?: MainMenuStylesContainerProps;
  containerProps?: HTMLAttributes<HTMLUListElement>;
  stylesContent?: MainMenuStylesContentProps;
  contentProps?: HTMLAttributes<HTMLLIElement>;
};

const mainMenuStylesContainer = (styles: MainMenuStylesContainerProps) => css`
  display: ${styles.display || 'flex'};
  justify-content: ${styles.justifyContent || 'space-evenly'};
  margin: ${styles.margin || '10% 0'};
  ${styles.custom ? styles.custom : ''}
`;

const mainMenuStylesContent = (styles: MainMenuStylesContentProps) => css`
  text-align: ${styles.textAling || 'center'};
  list-style: ${styles.listStyle || 'none'};
  ${styles.custom ? styles.custom : ''}
`;

export const MainMenu = ({
  items,
  stylesContainer = {},
  containerProps = {},
  stylesContent = {},
  contentProps = {},
}: MainMenuProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;

  const itemsMenu = items.map((item, index) => (
    <>
      <ul
        key={item[index].key}
        className={cx(
          mainMenuStylesContainer(stylesContainer),
          containerClassName
        )}
        {...restContainerProps}
      >
        {item.map((button, i) => {
          return (
            <li
              key={`${button.title}-${i}`}
              className={cx(
                mainMenuStylesContent(stylesContent),
                contentClassName
              )}
              {...restContentProps}
            >
              <CircleButton
                title={button.title}
                image={button.image}
                contentProps={{
                  onClick: button.onClick,
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  ));

  return <>{itemsMenu}</>;
};
