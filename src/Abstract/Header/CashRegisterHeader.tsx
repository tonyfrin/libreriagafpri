import React from 'react';
import { css, cx } from '@emotion/css';
import { Box1 } from '../Box';
import { Title1, Title2 } from '../Title';
import { Error } from '../Error';
import { ContainerButton } from '../Containers';
import { SpanValue } from '../Span';
import { formatDate } from '../../helpers';

const cashRegisterContainerStyle = () => css`
  display: flex;
  justify-content: center;
`;

const defaultTitleContainerStyle = css`
  margin-top: 10px;
`;

export type CashRegisterHeaderProps = {
  error: string[] | null;
  crName: string;
  cashRegisterPostId: number;
  dateOpen: string;
  author: string;
};

export const CashRegisterHeader = ({
  error,
  crName,
  cashRegisterPostId,
  dateOpen,
  author,
}: CashRegisterHeaderProps): JSX.Element => {
  return (
    <div className={cx(cashRegisterContainerStyle())}>
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
              title={`Control de caja #: ${cashRegisterPostId}`}
              styles={{
                fontSize: '1.2rem',
                lineHeight: '1.2rem',
              }}
            />
            <Title2
              title={crName}
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
                    value={`fecha de apertura:`}
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
                    value={formatDate(dateOpen)}
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
                <>
                  <SpanValue
                    value="Autorizado: "
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
                    value={author}
                  />
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
