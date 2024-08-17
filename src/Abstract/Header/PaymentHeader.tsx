import React from 'react';
import { css, cx } from '@emotion/css';
import { Box1 } from '../Box';
import { Title1, Title2 } from '../Title';
import { Error } from '../Error';
import { ContainerButton } from '../Containers';
import { Button } from '../Button';
import { CircleStep } from '../Circle';

type PaymentHeaderContainerStyleProps = {
  display?: string;
  justifyContent?: string;
  custom?: string;
};

const paymentHeaderContainerStyle = (
  styles: PaymentHeaderContainerStyleProps
) => css`
  display: ${styles.display || 'flex'};
  justify-content: ${styles.justifyContent || 'center'};
  ${styles.custom}
`;

type PaymentHeaderContentStyleProps = {
  marginTop?: string;
  custom?: string;
};

const paymentHeaderContentStyle = (
  styles: PaymentHeaderContentStyleProps
) => css`
  margin-top: ${styles.marginTop || '10px'};
  ${styles.custom}
`;

export type PaymentHeaderProps = {
  error: string[] | null;
  stepName: string;
  step: string;
  moduleName: string;
  returnFunction: () => void;
  returnTitle?: string;
  nextTitle?: string;
  nextFunction?: () => void;
  containerStyle?: PaymentHeaderContainerStyleProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentStyle?: PaymentHeaderContentStyleProps;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const PaymentHeader = ({
  error,
  stepName,
  step,
  moduleName,
  returnFunction,
  returnTitle,
  nextTitle,
  nextFunction,
  containerStyle = {},
  containerProps = {},
  contentStyle = {},
  contentProps = {},
}: PaymentHeaderProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;

  return (
    <div
      className={cx(
        paymentHeaderContainerStyle(containerStyle),
        containerClassName
      )}
      {...restContainerProps}
    >
      <Box1
        styles={{
          width: '90%',
          margin: '0',
          padding: '10px 40px',
          borderRadius: '10px',
          height: 'auto',
        }}
      >
        <>
          <div
            className={cx(
              paymentHeaderContentStyle(contentStyle),
              contentClassName
            )}
            {...restContentProps}
          >
            <Title1
              title={moduleName}
              styles={{
                fontSize: '1.2rem',
                lineHeight: '1.2rem',
              }}
            />
            <Title2
              title={stepName}
              styles={{
                fontSize: '1rem',
                margin: '0',
              }}
            />
          </div>
          <ContainerButton
            styles={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <>
              <CircleStep step={step} />
              <ContainerButton
                styles={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  custom: `
                                margin: 20px 0px;
                                padding-left: 5%;
                                `,
                }}
              >
                <>
                  <ContainerButton
                    styles={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-around',
                      custom: `
                                        margin: auto;
                                    `,
                    }}
                  >
                    <>
                      {returnTitle && (
                        <Button
                          title={returnTitle}
                          buttonProps={{
                            onClick: returnFunction,
                          }}
                          styles={{
                            backgroundColor: '#c12429',
                          }}
                        />
                      )}
                      {nextTitle && (
                        <Button
                          title={nextTitle}
                          buttonProps={{
                            onClick: nextFunction,
                          }}
                        />
                      )}
                    </>
                  </ContainerButton>
                </>
              </ContainerButton>
            </>
          </ContainerButton>
          <Error error={error} />
        </>
      </Box1>
    </div>
  );
};
