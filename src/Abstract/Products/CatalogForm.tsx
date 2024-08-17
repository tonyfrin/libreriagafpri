import React from 'react';
import { css } from '@emotion/css';
import { ContainerButton } from '../Containers';
import { ModelForm, PhotoGalleryForm } from '../Form';
import { UseGafpriProductsReturn } from '../../states';
import { ScrollableContainer, CategoriesCheckBox } from '../CheckBox';
import { InputTags, InputCatalogOrder } from '../Input';
import { FloatingButtons } from '../Button';
import { SliderHorizontal } from '../Slider';

export type CatalogFormProps = {
  use: UseGafpriProductsReturn;
  formType: 'add' | 'update';
};

export type CatalogFormExtended = {
  use?: UseGafpriProductsReturn;
  formType?: 'add' | 'update';
};
const defaultFormContainerStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const defaultImageContainerStyle = css`
  width: 50%;
`;

const defaultTitleContainerStyle = css`
  width: 50%;
`;

export const CatalogForm = ({
  use,
  formType,
}: CatalogFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    if (current) {
      if (current.galleryImage) {
        use.attributes.actions.setGalleryImage(current.galleryImage);
      }
      if (current.categoryId) {
        use.attributes.actions.changeCategory(current.categoryId);
      }
      if (current.tags) {
        use.attributes.actions.setTags(current.tags);
      }
      if (current.catalogOrder) {
        use.attributes.actions.changeCatalogOrder(`${current.catalogOrder}`);
      }
    }
  }, [current]);

  const title1Text = isAddForm ? 'Catálogo' : 'Actualización de Catálogo';
  const title2Text = isAddForm ? '' : '';

  const buttonTitle = 'Siguiente';
  const buttonAction = use.subPages.actions.onInventory;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onPrice();
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
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
            display: 'block',
          }}
        >
          <>
            <SliderHorizontal
              title="Galería de Imágenes"
              images={use.attributes.states.galleryImage}
              remove={use.attributes.actions.removeGalleryImage}
            />
            <PhotoGalleryForm
              changePhoto={use.attributes.actions.changeGalleryImage}
              formId="photo-form"
            />
          </>
        </ContainerButton>
        <div className={css(defaultFormContainerStyle)}>
          <div className={css(defaultImageContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <ScrollableContainer
                title="Categorías"
                styles={{
                  maxWidth: '100%',
                  customStyle: `
                      min-width: 237px;
                      min-height: 70px;
                    `,
                }}
              >
                <CategoriesCheckBox
                  change={use.attributes.actions.changeCategory}
                  selectedCategoryId={use.attributes.states.category}
                  categoriesData={use.attributes.states.categoryOptions}
                />
              </ScrollableContainer>
            </ContainerButton>
          </div>
          <div className={css(defaultTitleContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <InputTags
                change={use.attributes.actions.changeTags}
                setSelected={use.attributes.actions.setSelectedTagsValue}
                props={{
                  styles: {
                    width: '100%',
                  },
                  inputProps: {
                    value: use.attributes.states.selectedTagsValue,
                  },
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <FloatingButtons
                items={use.attributes.states.tags}
                remove={use.attributes.actions.removeTag}
              />
            </ContainerButton>
          </div>
        </div>
        <ContainerButton
          styles={{
            width: '100%',
          }}
        >
          <InputCatalogOrder
            change={use.attributes.actions.changeCatalogOrder}
            props={{
              styles: {
                width: '50%',
              },
              containerStyles: {
                custom: `
                      display: flex;
                      flex-direction: column;
                  `,
              },
              inputProps: {
                defaultValue: use.attributes.states.catalogOrder,
              },
            }}
          />
        </ContainerButton>
      </>
    </ModelForm>
  );
};
