import React from 'react';
import { css, cx } from '@emotion/css';
import { Box1 } from '../Box';
import { Title1, Title2 } from '../Title';
import { Error } from '../Error';
import { ContainerButton } from '../Containers';
import { SpanValue } from '../Span';

const bankHeaderContainerStyle = () => css`
  display: flex;
  justify-content: center;
`;

const defaultTitleContainerStyle = css`
  margin-top: 10px;
`;

export type BankHeaderProps = {
  error: string[] | null;
  name: string;
  bankName: string;
  account: string;
  balance: string;
};

export const BankHeader = ({
  error,
  name,
  bankName,
  account,
  balance,
}: BankHeaderProps): JSX.Element => {
  return (
    <div className={cx(bankHeaderContainerStyle())}>
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
          <div className={css(defaultTitleContainerStyle)}>
            <Title1
              title={`Detalles de banco ${name}`}
              styles={{
                fontSize: '1.2rem',
                lineHeight: '1.2rem',
              }}
            />
            <Title2
              title={`Banco ${bankName} - Cuenta: ${account}`}
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
                  <SpanValue
                    value={`Balance Actual:`}
                    containerStyles={{
                      margin: '0px 15px 0px 0px',
                      custom: `
                                    font-weight: 700;
                                    font-size: 0.8em;
                                    `,
                    }}
                  />
                  <SpanValue
                    containerStyles={{
                      margin: '0',
                      custom: `
                                    font-weight: 300;
                                    font-size: 0.8em;
                                    `,
                    }}
                    value={balance}
                  />
                </>
              </ContainerButton>
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
                <></>
              </ContainerButton>
            </>
          </ContainerButton>
          <Error error={error} />
        </>
      </Box1>
    </div>
  );
};
