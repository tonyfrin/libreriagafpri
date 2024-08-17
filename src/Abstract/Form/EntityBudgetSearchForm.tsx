import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { SearchBox } from '../Box';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';
import {
  InputDocumentiIdDigit,
  InputEmail,
  InputName,
  InputPhone,
  Input,
} from '../Input';
import type {
  UseGafpriEntityReturn,
  UseGafpriBudgetReturn,
} from '../../states';
import type { UseGafpriPagesSalesModuleReturn } from '../states';

export type EntityBudgetSearchFormStaylesContainerProps = {
  color?: string;
  fontSize?: string;
  paddingBottom?: string;
  custom?: string;
};

const entityBudgetSearchFormStaylesContainer = (
  styles: EntityBudgetSearchFormStaylesContainerProps
) => css`
  color: ${styles.color || '#616e7d'};
  font-size: ${styles.fontSize || '12px'};
  padding-bottom: ${styles.paddingBottom || '40px'};
  ${styles.custom || ''}
`;

export type EntityBudgetSearchFormProps = {
  containerStyles?: EntityBudgetSearchFormStaylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useBudget: UseGafpriBudgetReturn;
  useEntity: UseGafpriEntityReturn;
  usePagesSalesModule: UseGafpriPagesSalesModuleReturn;
  uploadBudget: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const EntityBudgetSearchForm = ({
  containerStyles = {},
  containerProps = {},
  useBudget,
  useEntity,
  usePagesSalesModule,
  uploadBudget,
}: EntityBudgetSearchFormProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          entityBudgetSearchFormStaylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <SearchBox
          title1Props={{
            title: 'Modulo de presupuestos',
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
                    onKeyPress:
                      useBudget.pages.actions.processEntityBydocumentId,
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
                    onKeyPress: useBudget.pages.actions.processEntityByName,
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
                    onKeyPress: useBudget.pages.actions.processEntityByPhone,
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
                    onKeyPress: useBudget.pages.actions.processEntityByEmail,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <Input
                styles={{
                  width: '100%',
                }}
                inputProps={{
                  title: 'Cargar Pedido/Presupuesto',
                  placeholder: 'Ingrese el numero de pedido o presupuesto',
                  onKeyPress: uploadBudget,
                  onChange: (e) =>
                    useBudget.attributes.actions.setCurrentId(
                      parseInt(e.target.value, 10)
                    ),
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
                  onClick: () => usePagesSalesModule.actions.onInit(),
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
