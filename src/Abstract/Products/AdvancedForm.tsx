import React from 'react';
import { css } from '@emotion/css';
import { ModelForm } from '../Form';
import { ContainerButton } from '../Containers';
import { UseGafpriProductsReturn } from '../../states';
import { SelectTaxStatus, SelectTaxClass, ParagraphNote } from '../Input';
import { SingleCheckBox } from '../CheckBox';

export type AdvancedFormProps = {
  use: UseGafpriProductsReturn;
  formType: 'add' | 'update';
};

export type AdvancedFormExtended = {
  use?: UseGafpriProductsReturn;
  formType?: 'add' | 'update';
};

const defaultFormContainerStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 24px;
`;

const defaultImageContainerStyle = css`
  width: 50%;
`;

const defaultTitleContainerStyle = css`
  width: 50%;
`;

export const AdvancedForm = ({
  use,
  formType,
}: AdvancedFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.skuValid,
    use.attributes.states.nameValid,
    use.attributes.states.salesPriceValid,
    use.attributes.states.typeValid,
    use.attributes.states.statusValid,
    use.attributes.states.visibilityValid,
  ]);

  React.useEffect(() => {
    if (current) {
      if (current.taxStatus) {
        const taxOption = use.attributes.actions.getTaxStatusOptionByValue(
          current.taxStatus
        );
        if (taxOption) {
          use.attributes.actions.changeTaxStatus(taxOption);
        }
      }
      if (current.taxClass) {
        const taxClassOption =
          use.attributes.actions.getTaxClassesOptionByValue(current.taxClass);
        if (taxClassOption) {
          use.attributes.actions.changeTaxClasses(taxClassOption);
        }
      }
      if (current.note) {
        use.attributes.actions.changeNote(current.note);
      }
      if (current.reviews) {
        use.attributes.actions.setReviews(current.reviews);
      }
      if (current.discount) {
        use.attributes.actions.setDiscount(current.discount);
      }
    }
  }, [current]);

  const title1Text = isAddForm ? 'Avanzado' : 'Actualización Avanzada';
  const title2Text = isAddForm ? '' : '';

  const buttonTitle = 'Siguiente';
  const buttonAction = use.subPages.actions.onAttributes;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onInventory();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <ModelForm
      boxProps={{
        styles: {
          width: '90%',
          padding: '0',
          margin: '0',
        },
      }}
      childrenContainerProps={{
        styles: {
          width: '100%',
        },
      }}
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
      buttonConditional={false}
    >
      <>
        <div className={css(defaultFormContainerStyle)}>
          <div className={css(defaultImageContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <SelectTaxStatus
                change={use.attributes.actions.changeTaxStatus}
                props={{
                  title: 'Estado de impuestos',
                  options: use.attributes.states.taxStatusOptions,
                  defaultValue: use.attributes.states.taxStatusDefault,
                }}
              />
            </ContainerButton>
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <>
                {use.attributes.states.taxStatus === 'taxable' && (
                  <SelectTaxClass
                    change={use.attributes.actions.changeTaxClasses}
                    props={{
                      title: 'Clases de impuestos',
                      options: use.attributes.states.taxClassesOptions,
                      defaultValue: use.attributes.states.taxClassesDefault,
                    }}
                  />
                )}
              </>
            </ContainerButton>
          </div>
        </div>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <ParagraphNote
            change={use.attributes.actions.changeNote}
            props={{
              inputProps: {
                defaultValue: use.attributes.states.note,
              },
            }}
          />
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'flex-start',
            custom: `padding-left: 34px;`,
          }}
        >
          <SingleCheckBox
            title="Habilitar reseñas"
            selected={use.attributes.states.reviews}
            onChange={use.attributes.actions.changeReviews}
            titleStyles={{
              customStyle: `
              margin-right: 15px;
              color: #8d8d8d;
            `,
            }}
          />
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'flex-start',
            custom: `padding-left: 34px;`,
          }}
        >
          <SingleCheckBox
            title="Habilitar descuento"
            selected={use.attributes.states.discount}
            onChange={use.attributes.actions.changeDiscount}
            titleStyles={{
              customStyle: `
              margin-right: 15px;
              color: #8d8d8d;
            `,
            }}
          />
        </ContainerButton>
      </>
    </ModelForm>
  );
};
