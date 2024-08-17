import React from 'react';
import { css, cx } from '@emotion/css';
import { SearchBox } from '../Box';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';
import {
  InputDocumentiIdDigit,
  InputEmail,
  InputName,
  InputPhone,
} from '../Input';
import type {
  UseGafpriEntityReturn,
  UseGafpriAccountsReceivableReturn,
} from '../../states';

export type EntityAccountsReceivableSearchFormStaylesContainerProps = {
  color?: string;
  fontSize?: string;
  paddingBottom?: string;
  custom?: string;
};

const entityAccountsReceivableSearchFormStaylesContainer = (
  styles: EntityAccountsReceivableSearchFormStaylesContainerProps
) => css`
  color: ${styles.color || '#616e7d'};
  font-size: ${styles.fontSize || '12px'};
  padding-bottom: ${styles.paddingBottom || '40px'};
  ${styles.custom || ''}
`;

export type EntityAccountsReceivableSearchFormProps = {
  containerStyles?: EntityAccountsReceivableSearchFormStaylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  use: UseGafpriAccountsReceivableReturn;
  useEntity: UseGafpriEntityReturn;
  returnModule: () => void;
};

export const EntityAccountsReceivableSearchForm = ({
  containerStyles = {},
  containerProps = {},
  use,
  useEntity,
  returnModule,
}: EntityAccountsReceivableSearchFormProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          entityAccountsReceivableSearchFormStaylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <SearchBox
          title1Props={{
            title: 'Modulo de creditos',
          }}
          title2Props={{
            title: 'Busqueda de clientes',
          }}
        >
          <>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputDocumentiIdDigit
                changeDocumentiIdDigit={(e: string) =>
                  useEntity.attributes.actions.changeDigit(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Cedula o RIF',
                    onKeyPress: use.pages.actions.processEntityBydocumentId,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputName
                changeName={(e: string) =>
                  useEntity.attributes.actions.changeName(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Nombre',
                    onKeyPress: use.pages.actions.processEntityByName,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputPhone
                changePhone={(e: string) =>
                  useEntity.attributes.actions.changePhone(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Numero de telefono',
                    onKeyPress: use.pages.actions.processEntityByPhone,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputEmail
                changeEmail={(e: string) =>
                  useEntity.attributes.actions.changeEmail(e)
                }
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    title: 'Email',
                    onKeyPress: use.pages.actions.processEntityByEmail,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'flex-start',
                custom: `
                  margin-top: 30px;`,
              }}
            >
              <Button
                title="regresar"
                buttonProps={{
                  onClick: () => returnModule(),
                }}
                styles={{
                  backgroundColor: '#c12429',
                }}
              />
            </ContainerButton>
          </>
        </SearchBox>
      </div>
    </>
  );
};
