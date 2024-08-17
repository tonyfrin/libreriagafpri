import React, { ButtonHTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';
import { Globo } from '../Icons';
import { GloboTitle } from '../Title';
import { ContainerGlobo, ContainerButton } from '../Containers';
import type { ContainerGloboStyle, ContainerButtonStyle } from '../Containers';
import type { GloboStyle } from '../Icons';
import type { GloboTitleStyle } from '../Title';
import { Button } from '../Button';
import type { ButtonStyle } from '../Button';

const StepStyles = (styles: StepStyle) => css`
  display: ${styles.display || 'flex'};
  padding: ${styles.padding || '15px 0px'};
  margin: ${styles.margin || '10px 0px'};
`;

type StepStyle = {
  display?: string | number;
  padding?: string | number;
  margin?: string | number;
};

type Step = {
  styles?: StepStyle | undefined;
  Class?: string;
  containerStyles?: ContainerGloboStyle | undefined;
  containerClass?: string;
  globoStyles?: GloboStyle | undefined;
  step: string;
  globoClass?: string;
  titleStyles?: GloboTitleStyle | undefined;
  title: string;
  globoTitleClass?: string;
  buttonReturnStyles?: ButtonStyle | undefined;
  buttonReturnProps?: ButtonHTMLAttributes<HTMLButtonElement> | undefined;
  buttonReturnClass?: string;
  buttonReturnTitle?: string;
  buttonNextStyles?: ButtonStyle | undefined;
  buttonNextProps?: ButtonHTMLAttributes<HTMLButtonElement> | undefined;
  buttonNextClass?: string;
  buttonNextTitle?: string;
  containerButtonStyles?: ContainerButtonStyle | undefined;
  containerButtonClass?: string;
};

export const Step = ({
  containerStyles = {},
  containerClass = '',
  globoStyles = {},
  step,
  globoClass = '',
  titleStyles = {},
  title,
  globoTitleClass = '',
  styles = {},
  Class = '',
  buttonReturnStyles = {},
  buttonReturnProps = {},
  buttonReturnClass = '',
  buttonReturnTitle,
  buttonNextStyles = {},
  buttonNextProps = {},
  buttonNextClass = '',
  buttonNextTitle,
  containerButtonStyles = {},
  containerButtonClass = '',
}: Step) => {
  return (
    <div className={cx(StepStyles(styles), Class)}>
      <ContainerGlobo styles={containerStyles} containerClass={containerClass}>
        <>
          <Globo styles={globoStyles} step={step} globoClass={globoClass} />
          <GloboTitle
            styles={titleStyles}
            title={title}
            globoTitleClass={globoTitleClass}
          />
        </>
      </ContainerGlobo>
      <ContainerButton
        styles={containerButtonStyles}
        Class={containerButtonClass}
      >
        <>
          {buttonReturnTitle ? (
            <Button
              styles={buttonReturnStyles}
              buttonProps={buttonReturnProps}
              Class={buttonReturnClass}
              title={buttonReturnTitle}
            />
          ) : (
            ''
          )}
          {buttonNextTitle ? (
            <Button
              styles={buttonNextStyles}
              buttonProps={buttonNextProps}
              Class={buttonNextClass}
              title={buttonNextTitle}
            />
          ) : (
            ''
          )}
        </>
      </ContainerButton>
    </div>
  );
};
