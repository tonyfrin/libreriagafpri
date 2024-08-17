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
  UseGafpriIncomeReturn,
} from '../../states';

export type EntityIncomeSearchFormStaylesContainerProps = {
  color?: string;
  fontSize?: string;
  paddingBottom?: string;
  custom?: string;
};

const entityIncomeSearchFormStaylesContainer = (
  styles: EntityIncomeSearchFormStaylesContainerProps
) => css`
  color: ${styles.color || '#616e7d'};
  font-size: ${styles.fontSize || '12px'};
  padding-bottom: ${styles.paddingBottom || '40px'};
  ${styles.custom || ''}
`;

export type EntityIncomeSearchFormProps = {
  containerStyles?: EntityIncomeSearchFormStaylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useIncome: UseGafpriIncomeReturn;
  useEntity: UseGafpriEntityReturn;
  returnInitModule: () => void;
};

export const EntityIncomeSearchForm = ({
  containerStyles = {},
  containerProps = {},
  useIncome,
  useEntity,
  returnInitModule,
}: EntityIncomeSearchFormProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          entityIncomeSearchFormStaylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <SearchBox
          title1Props={{
            title: 'Modulo de ingresos',
          }}
          title2Props={{
            title: 'Busqueda de clientes',
          }}
          containerStyles={{
            width: 'auto',
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
                    onKeyPress:
                      useIncome.pages.actions.processEntityBydocumentId,
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
                    onKeyPress: useIncome.pages.actions.processEntityByName,
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
                    onKeyPress: useIncome.pages.actions.processEntityByPhone,
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
                    onKeyPress: useIncome.pages.actions.processEntityByEmail,
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
                  onClick: () => returnInitModule(),
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
