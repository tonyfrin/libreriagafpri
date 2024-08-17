import React from 'react';
import { css } from '@emotion/css';
import type { InputProps, GsSelectPropsExtended } from '../Input';
import { ContainerButton } from '../Containers';
import type { ContainerButtonPropsExtended } from '../Containers';
import { ModelForm } from '../Form';
import type { ModelFormPropsExtended } from '../Form';
import type { UseGafpriExpensesTypeReturn } from '../../states';
import { List } from '../List';
import { ListPropsExtended } from '../List';
import { Loading } from '../../Components';
import type { LoadingProps } from '../../Components';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import type { PhotoCategoryProps } from '../Form';
import {
  InputName,
  InputDescription,
  SelectParentId,
  SelectStatus,
} from '../Input';

export type ExpensesTypeFormProps = {
  use: UseGafpriExpensesTypeReturn;
  formType: 'add' | 'update';
  optionsButtonMainContainerStyle?: string;
  formContainerStyle?: string;
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

export type ExpensesTypeFormPropsExtended = {
  use?: UseGafpriExpensesTypeReturn;
  formType?: 'add' | 'update';
  optionsButtonMainContainerStyle?: string;
  formContainerStyle?: string;
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
  margin-top: 10px;
  flex-direction: column;
`;

export const ExpensesTypeForm = ({
  use,
  formType,
  optionsButtonMainContainerStyle = defaultOptionsButtonMainContainerStyle,
  formContainerStyle = defaultFormContainerStyle,
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
}: ExpensesTypeFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [InputParentId, setInputParentId] = React.useState(<></>);
  const [InputStatus, setInputStatus] = React.useState(<></>);

  const currentCategory = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;
  const children = currentCategory
    ? use.data.actions.getChildren(currentCategory.id)
    : [];

  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonMainContainerStyle)}>
        <Button
          buttonProps={{
            onClick: () => use.api.actions.deleteParentId(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filtered = use.paginations.actions.filterByName(
    children,
    use.paginations.states.searchTerm
  );

  const category =
    use.paginations.actions.sortByName(
      filtered,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getPaginated(
    category,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
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
    use.paginations.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    category.length / use.paginations.states.itemsPerPage
  );

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(
      use.attributes.states.description
    );
    use.attributes.actions.validationParentId(use.attributes.states.parentId);
    use.attributes.actions.validationStatus(use.attributes.states.status);
  }, [
    use.attributes.states.name,
    use.attributes.states.parentId,
    use.attributes.states.description,
    use.attributes.states.status,
  ]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.nameValid,
    use.attributes.states.parentIdValid,
    use.attributes.states.descriptionValid,
    use.attributes.states.statusValid,
  ]);

  React.useEffect(() => {
    if (currentCategory) {
      if (currentCategory.name)
        use.attributes.actions.changeName(currentCategory.name);
      if (currentCategory.description)
        use.attributes.actions.changeDescription(currentCategory.description);
      if (currentCategory.parentId === null) {
        use.attributes.actions.changeParentId({
          label: 'Sin categoría padre',
          value: '',
        });
      } else {
        const categoryParent = use.data.actions.getById(
          currentCategory.parentId
        );
        use.attributes.actions.changeParentId({
          label: `${categoryParent?.name}`,
          value: `${categoryParent?.id}`,
        });
      }
      if (currentCategory.status) {
        const label =
          currentCategory.status === 'active'
            ? 'Activo'
            : currentCategory.status === 'disabled'
            ? 'Desactivo'
            : '';
        use.attributes.actions.changeStatus({
          label: label,
          value: currentCategory.status,
        });
      }
    }

    if (isAddForm) {
      setInputParentId((): JSX.Element => {
        return (
          <SelectParentId
            changeParentId={(e) => use.attributes.actions.changeParentId(e)}
            props={{
              options: use.attributes.states.parentIdOptions,
              defaultValue: use.attributes.states.parentIdDefault,
              title: 'Egreso padre',
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
            changeStatus={(e) => use.attributes.actions.changeStatus(e)}
            props={{
              options: use.attributes.states.statusOptions,
              defaultValue: use.attributes.states.statusDefault,
              title: 'Estatus',
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
        (use.attributes.states.parentIdDefault.value === '' &&
          currentCategory.parentId === null) ||
        (use.attributes.states.parentIdDefault.value !== '' &&
          currentCategory.parentId !== null)
      ) {
        setInputParentId((): JSX.Element => {
          return (
            <SelectParentId
              changeParentId={(e) => use.attributes.actions.changeParentId(e)}
              props={{
                options: use.attributes.states.parentIdOptions,
                defaultValue: use.attributes.states.parentIdDefault,
                title: 'Egreso padre',
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
            changeStatus={(e) => use.attributes.actions.changeStatus(e)}
            props={{
              options: use.attributes.states.statusOptions,
              defaultValue: use.attributes.states.statusDefault,
              title: 'Estatus',
              styles: {
                width: '100%',
              },
              ...statusInputProps,
            }}
          />
        );
      });
    }
  }, [
    use.attributes.states.parentIdDefault,
    use.attributes.states.statusDefault,
  ]);

  const title1Text = isAddForm
    ? 'Nuevo Tipo de Egreso'
    : 'Actualizar tipo de egreso';
  const title2Text = isAddForm
    ? 'Agrega un nuevo tipo de egreso'
    : `Actualiza la información del tipo de egreso #${currentCategory?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;

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
      {...modelFormProps}
    >
      <>
        <div className={css(formContainerStyle)}>
          <ContainerButton
            styles={{
              width: '100%',
              justifyContent: 'center',
            }}
            {...nameContainerProps}
          >
            <>
              <InputName
                changeName={use.attributes.actions.changeName}
                props={{
                  inputProps: {
                    title: 'Nombre',
                    defaultValue: use.attributes.states.name,
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
              justifyContent: 'center',
            }}
            {...descriptionContainerProps}
          >
            <>
              <InputDescription
                changeDescription={use.attributes.actions.changeDescription}
                props={{
                  inputProps: {
                    defaultValue: use.attributes.states.description,
                    title: 'Descripción',
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
              justifyContent: 'center',
            }}
            {...parentIdContainerProps}
          >
            <>{InputParentId}</>
          </ContainerButton>
          <ContainerButton
            styles={{
              width: '100%',
              justifyContent: 'center',
            }}
            {...statusContainerProps}
          >
            <>{InputStatus}</>
          </ContainerButton>
        </div>
        {children.length > 0 && (
          <div>
            {use.pages.states.childrenFetching ? (
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
                      use.paginations.actions.setOrderList(
                        event.value as 'asc' | 'desc'
                      );
                    }
                  },
                  defaultValue: valueDefaul,
                  styles: {
                    width: '50%',
                  },
                }}
                inputProps={{
                  value: use.paginations.states.searchTerm,
                  onChange: (e) =>
                    use.paginations.actions.setSearchTerm(e.target.value),
                  placeholder: 'Buscar por nombre...',
                }}
                propsPagination={{
                  currentPage: use.paginations.states.currentPage,
                  setCurrentPage: use.paginations.actions.setCurrentPage,
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
