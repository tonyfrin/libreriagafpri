import React from 'react';
import { css, cx } from '@emotion/css';
import { Button } from '../Button';
import { ContainerButton, ContainerHeaderInfo } from '../Containers';
import { Title2 } from '../Title';
import { Input } from '../Input';

type ButtonPayment = {
  title: string;
  action: () => void;
};

type ButtonsPaymentMethodsContainerStyleProps = {
  display?: string;
  justifyContent?: string;
  custom?: string;
};

const buttonsPaymentMethodsContainerStyle = (
  styles: ButtonsPaymentMethodsContainerStyleProps
) => css`
  display: ${styles.display || 'flex'};
  justify-content: ${styles.justifyContent || 'center'};
  ${styles.custom}
`;

type ButtonsPaymentMethodsContentStyleProps = {
  display?: string;
  flexFlow?: string;
  justifyContent?: string;
  custom?: string;
};

const buttonsPaymentMethodsContentStyle = (
  styles: ButtonsPaymentMethodsContentStyleProps
) => css`
  display: ${styles.display || 'flex'};
  flex-flow: ${styles.flexFlow || 'wrap'};
  justify-content: ${styles.justifyContent || 'space-around'};
  ${styles.custom}
`;

export type ButtonsPaymentMethodsFormProps = {
  buttonsDeposit: ButtonPayment[];
  buttonsDebit: ButtonPayment[];
  total: number;
  depositTotal: number;
  debitTotal: number;
  setNote: (value: string) => void;
  add: () => void;
  containerStyle?: ButtonsPaymentMethodsContainerStyleProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentStyle?: ButtonsPaymentMethodsContentStyleProps;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const ButtonsPaymentMethodsForm = ({
  buttonsDeposit,
  buttonsDebit,
  total,
  depositTotal,
  debitTotal,
  setNote,
  add,
  containerStyle = {},
  containerProps = {},
  contentStyle = {},
  contentProps = {},
}: ButtonsPaymentMethodsFormProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;

  let title;

  if (total > depositTotal - debitTotal) {
    title = 'Agregar pagos';
  } else if (total === depositTotal - debitTotal) {
    title = 'Emitir pago';
  } else {
    title = 'Agregar vuelto';
  }

  return (
    <>
      <ContainerHeaderInfo>
        <div
          className={cx(
            buttonsPaymentMethodsContainerStyle(containerStyle),
            containerClassName
          )}
          {...restContainerProps}
        >
          <Title2 title={title} />
        </div>
        <div
          className={cx(
            buttonsPaymentMethodsContentStyle(contentStyle),
            contentClassName
          )}
          {...restContentProps}
        >
          {total > depositTotal - debitTotal &&
            buttonsDeposit &&
            buttonsDeposit.map((button, index) => (
              <Button
                key={`${button.title}${index}`}
                title={button.title}
                styles={{
                  backgroundColor: 'rgb(50, 67, 117)',
                  fontSize: '8px',
                  margin: '10px',
                }}
                buttonProps={{
                  onClick: button.action,
                }}
              />
            ))}

          {total < depositTotal - debitTotal &&
            buttonsDebit &&
            buttonsDebit.map((button, index) => (
              <Button
                key={`${button.title}${index}`}
                title={button.title}
                styles={{
                  backgroundColor: 'rgb(50, 67, 117)',
                  fontSize: '8px',
                  margin: '10px',
                }}
                buttonProps={{
                  onClick: button.action,
                }}
              />
            ))}

          {total === depositTotal - debitTotal && (
            <>
              <ContainerButton
                styles={{
                  display: 'block',
                  width: '90%',
                }}
              >
                <>
                  <Input
                    inputProps={{
                      title: 'Nota interna del pago',
                      type: 'text',
                      onChange: (e) => setNote(e.target.value),
                    }}
                  />
                  <Button
                    title="Procesar"
                    buttonProps={{
                      onClick: () => add(),
                    }}
                  />
                </>
              </ContainerButton>
            </>
          )}
        </div>
      </ContainerHeaderInfo>
    </>
  );
};
