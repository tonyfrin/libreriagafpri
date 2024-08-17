import React from 'react';
import {
  Input,
  SelectProjectId,
  SelectExpensesType,
  InputNote,
  InputInvoice,
} from '../Input';
import { ContainerButton } from '../Containers';
import { ModelForm } from '../Form';
import type { SiteOptions, UseGafpriExpensesReturn } from '../../states';
import { SpanValue } from '../Span';
import { decimalFormatPriceConverter } from '../../helpers';
import { EXPENSES_ROUTE } from '../../constants';

export type ExpensesFormProps = {
  use: UseGafpriExpensesReturn;
  siteOptions: SiteOptions;
};

export const ExpensesForm = ({
  use,
  siteOptions,
}: ExpensesFormProps): JSX.Element => {
  const [InputProjects, setInputProjects] = React.useState(<></>);
  const [InputExpensesType, setInputExpensesType] = React.useState(<></>);
  const supplierName = use.attributes.states?.entity
    ? use.attributes.states.entity?.lastName
      ? `${use.attributes.states.entity?.name} ${use.attributes.states.entity?.lastName}`
      : use.attributes.states.entity?.name
    : '';

  const goPaymentCr = () => {
    use.pages.actions.onPaymentCrForm();
  };

  React.useEffect(() => {
    use.attributes.actions.validationSupplierId(
      use.attributes.states.supplierId
    );
    use.attributes.actions.validationExpensesTypeId(
      use.attributes.states.expensesTypeId
    );
    use.attributes.actions.validationProjectsPostsId(
      use.attributes.states.projectsPostsId
    );
  }, [
    use.attributes.states.supplierId,
    use.attributes.states.expensesTypeId,
    use.attributes.states.projectsPostsId,
    use.attributes.states.supplierIdValid,
    use.attributes.states.expensesTypeIdValid,
    use.attributes.states.projectsPostsIdValid,
    InputExpensesType,
    InputProjects,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.supplierIdValid,
    use.attributes.states.expensesTypeIdValid,
    use.attributes.states.projectsPostsIdValid,
    use.attributes.states.total,
  ]);

  React.useEffect(() => {
    setInputProjects((): JSX.Element => {
      return (
        <SelectProjectId
          change={(e) => use.attributes.actions.changeProjectsPostsId(e)}
          props={{
            options: use.attributes.states.projectsPostsIdOptions,
            defaultValue: use.attributes.states.projectsPostsIdDefault,
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });

    setInputExpensesType((): JSX.Element => {
      return (
        <SelectExpensesType
          change={(e) => use.attributes.actions.changeExpensesTypeId(e)}
          props={{
            options: use.attributes.states.expensesTypeIdOptions,
            defaultValue: use.attributes.states.expensesTypeIdDefault,
            styles: {
              width: '100%',
            },
          }}
        />
      );
    });
  }, []);

  const title1Text = 'Nuevo Egreso';
  const title2Text = 'Agrega un nuevo engreso';

  const buttonTitle = 'Siguiente';
  const buttonAction = goPaymentCr;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <ModelForm
      titles={{
        title1: title1Text,
        title2: title2Text,
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.error.states.error}
      buttonNextId={EXPENSES_ROUTE}
      boxProps={{
        styles: {
          width: 'auto',
          height: 'auto',
        },
      }}
      returnButtonConatinerStyle="padding-button: 0px;"
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
              value="Proveedor: "
              containerStyles={{
                margin: '0px 15px 0px 0px',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
            />
            <SpanValue
              containerStyles={{
                margin: '0',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
              value={supplierName}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>{InputProjects}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>{InputExpensesType}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <InputNote
              change={(e) => use.attributes.actions.changeNote(e)}
              props={{
                inputProps: {
                  placeholder: 'Motivo del gasto',
                  title: 'Motivo del gasto',
                  defaultValue: use.attributes.states.note,
                },
                styles: {
                  width: '100%',
                },
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <InputInvoice
              change={(e) => use.attributes.actions.changeInvoice(e)}
              props={{
                styles: {
                  width: '100%',
                },
                inputProps: {
                  defaultValue: use.attributes.states.invoice,
                },
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <Input
              inputProps={{
                onChange: (e) =>
                  use.attributes.actions.changeSubTotal(e.target.value),
                title: 'Sub-Total',
                placeholder: 'Sub-Total',
                type: 'number',
                step: '0.01',
                defaultValue: use.attributes.states.subTotal,
              }}
              styles={{
                width: '100%',
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <>
            <Input
              inputProps={{
                onChange: (e) =>
                  use.attributes.actions.changeSubTotalTax(e.target.value),
                title: 'Impuestos',
                placeholder: 'Impuestos',
                type: 'number',
                step: '0.01',
                defaultValue: use.attributes.states.subTotalTax,
              }}
              styles={{
                width: '100%',
              }}
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
              value="Total: "
              containerStyles={{
                margin: '0px 15px 0px 0px',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
            />
            <SpanValue
              containerStyles={{
                margin: '0',
                custom: `
                  font-weight: 700;
                  font-size: 20px;
                `,
              }}
              value={decimalFormatPriceConverter(
                use.attributes.states.total,
                siteOptions.DECIMAL_NUMBERS,
                siteOptions.CURRENCY_SYMBOL,
                siteOptions.CURRENCY_LOCATION,
                siteOptions.CURRENCY_FORMAT
              )}
            />
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
