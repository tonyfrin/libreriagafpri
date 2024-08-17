import React from 'react';
import { css } from '@emotion/css';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseCategoryReturn } from '../../states';
import { List } from '../List';
import { ListPropsExtended } from '../List';
import { Loading } from '../../Components';
import type { LoadingProps } from '../../Components';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { PhotoCategory } from '../Form';
import type { PhotoCategoryProps } from '../Form';
import {
  InputName,
  InputDescription,
  SelectParentId,
  SelectStatus,
} from '../Input';

export type CategoryFormProps = {
  use: UseCategoryReturn;
  formType: 'add' | 'update';
  optionsButtonMainContainerStyle?: string;
  formContainerStyle?: string;
  imageContainerStyle?: string;
  infoContainerStyle?: string;
  deleteButtonProps?: ButtonProps;
  modelFormProps?: ModelFormPropsExtended;
  loadingProps?: LoadingProps;
  nameContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionContainerProps?: ContainerButtonPropsExtended;
  descriptionInputProps?: InputProps;
  parentIdContainerProps?: ContainerButtonPropsExtended;
  parentIdInputProps?: GsSelectPropsExtended;
  statusContainerProps?: ContainerButtonPropsExtended;
  statusInputProps?: GsSelectPropsExtended;
  dependentsListProps?: ListPropsExtended;
  propsPhotoCategory?: PhotoCategoryProps['props'];
};

export type CategoryFormPropsExtended = {
  use?: UseCategoryReturn;
  formType?: 'add' | 'update';
  optionsButtonMainContainerStyle?: string;
  formContainerStyle?: string;
  imageContainerStyle?: string;
  infoContainerStyle?: string;
  deleteButtonProps?: ButtonProps;
  modelFormProps?: ModelFormPropsExtended;
  loadingProps?: LoadingProps;
  nameContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionContainerProps?: ContainerButtonPropsExtended;
  descriptionInputProps?: InputProps;
  parentIdContainerProps?: ContainerButtonPropsExtended;
  parentIdInputProps?: GsSelectPropsExtended;
  statusContainerProps?: ContainerButtonPropsExtended;
  statusInputProps?: GsSelectPropsExtended;
  dependentsListProps?: ListPropsExtended;
  propsPhotoCategory?: PhotoCategoryProps['props'];
};

const defaultOptionsButtonMainContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

const defaultFormContainerStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const defaultImageContainerStyle = css`
  width: 100%;
`;

export const CategoryForm = ({
  use,
  formType,
  optionsButtonMainContainerStyle = defaultOptionsButtonMainContainerStyle,
  formContainerStyle = defaultFormContainerStyle,
  imageContainerStyle = defaultImageContainerStyle,
  infoContainerStyle = defaultImageContainerStyle,
  deleteButtonProps = {
    title: 'Eliminar',
    styles: {
      backgroundColor: '#c12429',
      fontSize: '10px',
    },
  },
  modelFormProps,
  loadingProps,
  nameContainerProps,
  nameInputProps,
  descriptionContainerProps,
  descriptionInputProps,
  parentIdContainerProps,
  parentIdInputProps,
  statusContainerProps,
  statusInputProps,
  dependentsListProps,
  propsPhotoCategory,
}: CategoryFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputParentId, setInputParentId] = React.useState(<></>);
  const [InputStatus, setInputStatus] = React.useState(<></>);

  const currentCategory = isUpdateForm
    ? use.actions.getById(use.states.currentId)
    : null;
  const children = currentCategory
    ? use.actions.getChildren(currentCategory.id)
    : [];

  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonMainContainerStyle)}>
        <Button
          buttonProps={{
            onClick: () => use.actions.deleteParentId(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filtered = use.actions.filterByName(children, use.states.searchTerm);

  const category = use.actions.sortByName(filtered, use.states.orderList) || [];

  const paginated = use.actions.getPaginated(
    category,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      return [item.name, item.description, <ButtonUpdate id={item.id} />];
    }) ?? [];
  const headers = ['Nombre', 'Descripción', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(category.length / use.states.itemsPerPage);

  React.useEffect(() => {
    use.actions.validationName(use.states.name);
    use.actions.validationDescription(use.states.description);
    use.actions.validationParentId(use.states.parentId);
    use.actions.validationPhoto(use.states.photo);
    use.actions.validationStatus(use.states.status);
  }, [
    use.states.name,
    use.states.parentId,
    use.states.description,
    use.states.photo,
    use.states.status,
  ]);

  React.useEffect(() => {
    use.actions.validationButtonNext();
  }, [
    use.states.nameValid,
    use.states.parentIdValid,
    use.states.descriptionValid,
    use.states.photoValid,
    use.states.statusValid,
  ]);

  React.useEffect(() => {
    if (currentCategory) {
      if (currentCategory.name) use.actions.changeName(currentCategory.name);
      if (currentCategory.description)
        use.actions.changeDescription(currentCategory.description);
      if (currentCategory.parentId !== undefined) {
        if (currentCategory.parentId === null) {
          use.actions.changeParentId({
            label: 'Sin categoría padre',
            value: `null`,
          });
        } else {
          const categoryParent = use.actions.getById(currentCategory.parentId);
          use.actions.changeParentId({
            label: `${categoryParent?.name}`,
            value: `${categoryParent?.id}`,
          });
        }
      }
      if (currentCategory.photo) use.actions.setPhoto(currentCategory.photo);
      if (currentCategory.status) {
        const label =
          currentCategory.status === 'active'
            ? 'Activo'
            : currentCategory.status === 'disabled'
            ? 'Desactivo'
            : '';
        use.actions.changeStatus({
          label: label,
          value: currentCategory.status,
        });
      }
    }

    if (isAddForm) {
      setInputParentId((): JSX.Element => {
        return (
          <SelectParentId
            changeParentId={(e) => use.actions.changeParentId(e)}
            props={{
              options: use.states.parentIdOptions,
              defaultValue: use.states.parentIdDefault,
              styles: {
                width: '100%',
              },
              ...parentIdInputProps,
            }}
          />
        );
      });

      setInputStatus((): JSX.Element => {
        return (
          <SelectStatus
            changeStatus={(e) => use.actions.changeStatus(e)}
            props={{
              options: use.states.statusOptions,
              defaultValue: use.states.statusDefault,
              styles: {
                width: '100%',
              },
              ...statusInputProps,
            }}
          />
        );
      });
    }
  }, []);

  React.useEffect(() => {
    if (isUpdateForm && currentCategory) {
      if (
        (use.states.parentIdDefault.value === 'null' &&
          currentCategory.parentId === null) ||
        (use.states.parentIdDefault.value !== 'null' &&
          currentCategory.parentId !== null)
      ) {
        setInputParentId((): JSX.Element => {
          return (
            <SelectParentId
              changeParentId={(e) => use.actions.changeParentId(e)}
              props={{
                options: use.states.parentIdOptions,
                defaultValue: use.states.parentIdDefault,
                styles: {
                  width: '100%',
                },
                ...parentIdInputProps,
              }}
            />
          );
        });
      }

      setInputStatus((): JSX.Element => {
        return (
          <SelectStatus
            changeStatus={(e) => use.actions.changeStatus(e)}
            props={{
              options: use.states.statusOptions,
              defaultValue: use.states.statusDefault,
              styles: {
                width: '100%',
              },
              ...statusInputProps,
            }}
          />
        );
      });
    }
  }, [use.states.parentIdDefault, use.states.statusDefault]);

  const title1Text = isAddForm ? 'Nueva Categoría' : 'Actualizar Categoría';
  const title2Text = isAddForm
    ? 'Agrega un nuevo tipo de Categoría de producto'
    : `Actualiza la información de la categoría #${currentCategory?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.actions.add : use.actions.update;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.actions.returnInit();
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
      error={use.states.error}
      {...modelFormProps}
    >
      <>
        <div className={css(formContainerStyle)}>
          <div className={css(imageContainerStyle)}>
            <PhotoCategory
              photo={use.states.photo}
              changePhoto={use.actions.changePhoto}
              changeError={use.actions.changeError}
              submitting={use.states.submitting}
              setSubmitting={use.actions.setSubmitting}
              props={propsPhotoCategory}
            />
          </div>
          <div className={css(infoContainerStyle)}>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
              {...nameContainerProps}
            >
              <>
                <InputName
                  changeName={use.actions.changeName}
                  props={{
                    inputProps: {
                      defaultValue: use.states.name,
                    },
                    styles: {
                      width: '100%',
                      padding: '10px 19px',
                    },
                    ...nameInputProps,
                  }}
                />
              </>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
              {...descriptionContainerProps}
            >
              <>
                <InputDescription
                  changeDescription={use.actions.changeDescription}
                  props={{
                    inputProps: {
                      defaultValue: use.states.description,
                    },
                    styles: {
                      width: '100%',
                      padding: '10px 19px',
                    },
                    ...descriptionInputProps,
                  }}
                />
              </>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
              {...parentIdContainerProps}
            >
              <>{InputParentId}</>
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'end',
              }}
              {...statusContainerProps}
            >
              <>{InputStatus}</>
            </ContainerButton>
          </div>
        </div>
        {children.length > 0 && (
          <div>
            {use.states.childrenFetching ? (
              <Loading {...loadingProps} />
            ) : (
              <List
                title="Dependientes"
                items={items}
                headers={headers}
                columns={3}
                selectProps={{
                  options: options,
                  onChange: (event) => {
                    if (event?.value) {
                      use.actions.setOrderList(event.value as 'asc' | 'desc');
                    }
                  },
                  defaultValue: valueDefaul,
                  styles: {
                    width: '50%',
                  },
                }}
                inputProps={{
                  value: use.states.searchTerm,
                  onChange: (e) => use.actions.setSearchTerm(e.target.value),
                  placeholder: 'Buscar por nombre...',
                }}
                propsPagination={{
                  currentPage: use.states.currentPage,
                  setCurrentPage: use.actions.setCurrentPage,
                  totalPages: totalPages,
                }}
                {...dependentsListProps}
              />
            )}
          </div>
        )}
      </>
    </ModelForm>
  );
};
