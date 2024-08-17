import React from 'react';
import { ModelForm } from '../Form';
import type { UseGafpriProductsReturn } from '../../states';
import { HorizontalMenu } from '../Menu';
import {
  FaCog,
  FaDollarSign,
  FaBook,
  FaBoxOpen,
  FaTruck,
  FaTag,
  FaCogs,
} from 'react-icons/fa';
import { GeneralForm } from './GeneralForm';
import { PriceForm } from './PriceForm';
import { CatalogForm } from './CatalogForm';
import { InventoryForm } from './InventoryForm';
import { ShipForm } from './ShipForm';
import { AttributesForm } from './AttributesForm';
import { AdvancedForm } from './AdvancedForm';

export type ProductsFormProps = {
  use: UseGafpriProductsReturn;
  formType: 'add' | 'update';
};

export type ProductsFormExtended = {
  use?: UseGafpriProductsReturn;
  formType?: 'add' | 'update';
};

export const ProductsForm = ({
  use,
  formType,
}: ProductsFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const current = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  const title1Text = isAddForm ? 'Nuevo Producto' : 'Actualizar Producto';
  const title2Text = isAddForm
    ? 'Agrega un Producto'
    : `Actualiza la información del producto ${current?.sku}`;

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

  const itemMenu = [
    {
      id: '1',
      label: 'General',
      onClick: () => use.subPages.actions.onGeneral(),
      icon: FaCog,
    },
    {
      id: '2',
      label: 'Precios',
      onClick: () => use.subPages.actions.onPrice(),
      icon: FaDollarSign,
    },
    {
      id: '3',
      label: 'Catálogo',
      onClick: () => use.subPages.actions.onCatalog(),
      icon: FaBook,
    },
    {
      id: '4',
      label: 'Inventario',
      onClick: () => use.subPages.actions.onInventory(),
      icon: FaBoxOpen,
    },
    {
      id: '5',
      label: 'Envío',
      onClick: () => use.subPages.actions.onShip(),
      icon: FaTruck,
    },
    {
      id: '6',
      label: 'Atributos',
      onClick: () => use.subPages.actions.onAttributes(),
      icon: FaTag,
    },
    {
      id: '7',
      label: 'Avanzado',
      onClick: () => use.subPages.actions.onAdvanced(),
      icon: FaCogs,
    },
  ];

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
      if (current.name) use.attributes.actions.changeName(current.name);
      if (current.publicName)
        use.attributes.actions.changePublicName(current.publicName);
      if (current.image) use.attributes.actions.setPhoto(current.image);
      if (current.posts.permanentLink)
        use.attributes.actions.changeLink(current.posts.permanentLink);
      if (current.description)
        use.attributes.actions.changeDescription(current.description);
      if (current.posts.status) {
        const status = use.attributes.actions.getStatusOptionByValue(
          current.posts.status
        );
        if (status) use.attributes.actions.changeStatus(status);
      }
      if (current.posts.visibility) {
        const visibility = use.attributes.actions.getVisibilityOptionByValue(
          current.posts.visibility
        );
        if (visibility) {
          use.attributes.actions.changeVisibility(visibility);
        }
      }
      if (current.type) {
        const type = use.attributes.actions.getTypeOptionByValue(current.type);
        if (type) use.attributes.actions.changeType(type);
      }
      if (current.salesPrice)
        use.attributes.actions.changeSalesPrice(`${current.salesPrice}`);

      if (current.offerPrice)
        use.attributes.actions.changeOfferPrice(`${current.offerPrice}`);
      if (current.cost) use.attributes.actions.changeCost(`${current.cost}`);

      if (current.packageType) {
        const options = use.attributes.actions.getPackageTypeOptionByValue(
          current.packageType
        );
        if (options) use.attributes.actions.changePackageType(options);
      }
      if (current.qtyPack)
        use.attributes.actions.changeQtyPack(`${current.qtyPack}`);
      if (current.undCbm)
        use.attributes.actions.changeUndCbm(`${current.undCbm}`);
      if (current.weight)
        use.attributes.actions.changeWeight(`${current.weight}`);
      if (current.height)
        use.attributes.actions.changeHeight(`${current.height}`);
      if (current.width) use.attributes.actions.changeWidth(`${current.width}`);
      if (current.length)
        use.attributes.actions.changeLength(`${current.length}`);
      if (current.galleryImage)
        use.attributes.actions.setGalleryImage(current.galleryImage);

      if (current.categoryId)
        use.attributes.actions.changeCategory(current.categoryId);

      if (current.tags) use.attributes.actions.setTags(current.tags);

      if (current.catalogOrder)
        use.attributes.actions.changeCatalogOrder(`${current.catalogOrder}`);

      if (current.sku) use.attributes.actions.changeSku(current.sku);

      if (current.attributes)
        use.attributes.actions.setAttributes(current.attributes);

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
      if (current.note) use.attributes.actions.changeNote(current.note);

      if (current.reviews) use.attributes.actions.setReviews(current.reviews);
    }
  }, [current]);

  return (
    <div>
      <ModelForm
        boxProps={{
          styles: {
            width: '90%',
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
        buttonConditional={use.subPages.states.isAdvanced}
        buttonNextId="general-product"
      >
        <>
          <HorizontalMenu items={itemMenu} />
          {use.subPages.states.isGeneral && isAddForm && (
            <GeneralForm use={use} formType="add" />
          )}

          {use.subPages.states.isGeneral && isUpdateForm && current && (
            <GeneralForm use={use} formType="update" />
          )}

          {use.subPages.states.isPrice && isAddForm && (
            <PriceForm use={use} formType="add" />
          )}

          {use.subPages.states.isPrice && isUpdateForm && current && (
            <PriceForm use={use} formType="update" />
          )}

          {use.subPages.states.isCatalog && isAddForm && (
            <CatalogForm use={use} formType="add" />
          )}

          {use.subPages.states.isCatalog && isUpdateForm && current && (
            <CatalogForm use={use} formType="update" />
          )}

          {use.subPages.states.isInventory && isAddForm && (
            <InventoryForm use={use} formType="add" />
          )}

          {use.subPages.states.isInventory && isUpdateForm && current && (
            <InventoryForm use={use} formType="update" />
          )}

          {use.subPages.states.isShip && isAddForm && (
            <ShipForm use={use} formType="add" />
          )}

          {use.subPages.states.isShip && isUpdateForm && current && (
            <ShipForm use={use} formType="update" />
          )}

          {use.subPages.states.isAttributes && isAddForm && (
            <AttributesForm use={use} formType="add" />
          )}

          {use.subPages.states.isAttributes && isUpdateForm && current && (
            <AttributesForm use={use} formType="update" />
          )}

          {use.subPages.states.isAdvanced && isAddForm && (
            <AdvancedForm use={use} formType="add" />
          )}

          {use.subPages.states.isAdvanced && isUpdateForm && current && (
            <AdvancedForm use={use} formType="update" />
          )}
        </>
      </ModelForm>
    </div>
  );
};
