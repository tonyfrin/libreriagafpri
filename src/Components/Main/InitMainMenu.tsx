import React, { HTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';
import { Error, MainMenu } from '../../Abstract';
import type { MainMenuProps } from '../../Abstract';
import type { UseErrorReturn } from '../../states';

export type InitMainMenuStylesContainerProps = {
  padding?: string;
  custom?: string;
  backgroundImage?: string;
  height?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
};

export type InitMainMenuProps = {
  stylesContainer?: InitMainMenuStylesContainerProps;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  contentProps: MainMenuProps;
  useError?: UseErrorReturn;
};

const initMainMenuStylesContainer = (
  styles: InitMainMenuStylesContainerProps
) => css`
  padding: ${styles.padding || '28px 0'};
  background-image: ${styles.backgroundImage ||
  'url(https://tiendasgafpri.com/wp-content/themes/gafpristore/assets/img/fondo-admin.png)'};
  background-repeat: ${styles.backgroundRepeat || 'no-repeat'};
  height: ${styles.height || '100vh'};
  background-size: ${styles.backgroundSize || '177vh'};
  ${styles.custom ? styles.custom : ''}
`;

export const InitMainMenu = ({
  stylesContainer = {},
  containerProps = {},
  contentProps,
  useError,
}: InitMainMenuProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          initMainMenuStylesContainer(stylesContainer),
          containerClassName
        )}
        {...restContainerProps}
      >
        <MainMenu {...contentProps} />
        {useError && useError.states.error && (
          <Error error={useError.states.error} />
        )}
      </div>
    </>
  );
};
