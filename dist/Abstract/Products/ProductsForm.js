"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _Form = require("../Form");
var _Menu = require("../Menu");
var _fa = require("react-icons/fa");
var _GeneralForm = require("./GeneralForm");
var _PriceForm = require("./PriceForm");
var _CatalogForm = require("./CatalogForm");
var _InventoryForm = require("./InventoryForm");
var _ShipForm = require("./ShipForm");
var _AttributesForm = require("./AttributesForm");
var _AdvancedForm = require("./AdvancedForm");
var ProductsForm = exports.ProductsForm = function ProductsForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  var title1Text = isAddForm ? 'Nuevo Producto' : 'Actualizar Producto';
  var title2Text = isAddForm ? 'Agrega un Producto' : "Actualiza la informaci\xF3n del producto ".concat(current === null || current === void 0 ? void 0 : current.sku);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;
  var handleActions = function handleActions(action, value) {
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
  var itemMenu = [{
    id: '1',
    label: 'General',
    onClick: function onClick() {
      return use.subPages.actions.onGeneral();
    },
    icon: _fa.FaCog
  }, {
    id: '2',
    label: 'Precios',
    onClick: function onClick() {
      return use.subPages.actions.onPrice();
    },
    icon: _fa.FaDollarSign
  }, {
    id: '3',
    label: 'Catálogo',
    onClick: function onClick() {
      return use.subPages.actions.onCatalog();
    },
    icon: _fa.FaBook
  }, {
    id: '4',
    label: 'Inventario',
    onClick: function onClick() {
      return use.subPages.actions.onInventory();
    },
    icon: _fa.FaBoxOpen
  }, {
    id: '5',
    label: 'Envío',
    onClick: function onClick() {
      return use.subPages.actions.onShip();
    },
    icon: _fa.FaTruck
  }, {
    id: '6',
    label: 'Atributos',
    onClick: function onClick() {
      return use.subPages.actions.onAttributes();
    },
    icon: _fa.FaTag
  }, {
    id: '7',
    label: 'Avanzado',
    onClick: function onClick() {
      return use.subPages.actions.onAdvanced();
    },
    icon: _fa.FaCogs
  }];
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.skuValid, use.attributes.states.nameValid, use.attributes.states.salesPriceValid, use.attributes.states.typeValid, use.attributes.states.statusValid, use.attributes.states.visibilityValid]);
  _react["default"].useEffect(function () {
    if (current) {
      if (current.name) use.attributes.actions.changeName(current.name);
      if (current.publicName) use.attributes.actions.changePublicName(current.publicName);
      if (current.image) use.attributes.actions.setPhoto(current.image);
      if (current.posts.permanentLink) use.attributes.actions.changeLink(current.posts.permanentLink);
      if (current.description) use.attributes.actions.changeDescription(current.description);
      if (current.posts.status) {
        var status = use.attributes.actions.getStatusOptionByValue(current.posts.status);
        if (status) use.attributes.actions.changeStatus(status);
      }
      if (current.posts.visibility) {
        var visibility = use.attributes.actions.getVisibilityOptionByValue(current.posts.visibility);
        if (visibility) {
          use.attributes.actions.changeVisibility(visibility);
        }
      }
      if (current.type) {
        var type = use.attributes.actions.getTypeOptionByValue(current.type);
        if (type) use.attributes.actions.changeType(type);
      }
      if (current.salesPrice) use.attributes.actions.changeSalesPrice("".concat(current.salesPrice));
      if (current.offerPrice) use.attributes.actions.changeOfferPrice("".concat(current.offerPrice));
      if (current.cost) use.attributes.actions.changeCost("".concat(current.cost));
      if (current.packageType) {
        var options = use.attributes.actions.getPackageTypeOptionByValue(current.packageType);
        if (options) use.attributes.actions.changePackageType(options);
      }
      if (current.qtyPack) use.attributes.actions.changeQtyPack("".concat(current.qtyPack));
      if (current.undCbm) use.attributes.actions.changeUndCbm("".concat(current.undCbm));
      if (current.weight) use.attributes.actions.changeWeight("".concat(current.weight));
      if (current.height) use.attributes.actions.changeHeight("".concat(current.height));
      if (current.width) use.attributes.actions.changeWidth("".concat(current.width));
      if (current.length) use.attributes.actions.changeLength("".concat(current.length));
      if (current.galleryImage) use.attributes.actions.setGalleryImage(current.galleryImage);
      if (current.categoryId) use.attributes.actions.changeCategory(current.categoryId);
      if (current.tags) use.attributes.actions.setTags(current.tags);
      if (current.catalogOrder) use.attributes.actions.changeCatalogOrder("".concat(current.catalogOrder));
      if (current.sku) use.attributes.actions.changeSku(current.sku);
      if (current.attributes) use.attributes.actions.setAttributes(current.attributes);
      if (current.taxStatus) {
        var taxOption = use.attributes.actions.getTaxStatusOptionByValue(current.taxStatus);
        if (taxOption) {
          use.attributes.actions.changeTaxStatus(taxOption);
        }
      }
      if (current.taxClass) {
        var taxClassOption = use.attributes.actions.getTaxClassesOptionByValue(current.taxClass);
        if (taxClassOption) {
          use.attributes.actions.changeTaxClasses(taxClassOption);
        }
      }
      if (current.note) use.attributes.actions.changeNote(current.note);
      if (current.reviews) use.attributes.actions.setReviews(current.reviews);
    }
  }, [current]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    boxProps: {
      styles: {
        width: '90%'
      }
    },
    childrenContainerProps: {
      styles: {
        width: '100%'
      }
    },
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: use.error.states.error,
    buttonConditional: use.subPages.states.isAdvanced,
    buttonNextId: "general-product"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Menu.HorizontalMenu, {
    items: itemMenu
  }), use.subPages.states.isGeneral && isAddForm && /*#__PURE__*/_react["default"].createElement(_GeneralForm.GeneralForm, {
    use: use,
    formType: "add"
  }), use.subPages.states.isGeneral && isUpdateForm && current && /*#__PURE__*/_react["default"].createElement(_GeneralForm.GeneralForm, {
    use: use,
    formType: "update"
  }), use.subPages.states.isPrice && isAddForm && /*#__PURE__*/_react["default"].createElement(_PriceForm.PriceForm, {
    use: use,
    formType: "add"
  }), use.subPages.states.isPrice && isUpdateForm && current && /*#__PURE__*/_react["default"].createElement(_PriceForm.PriceForm, {
    use: use,
    formType: "update"
  }), use.subPages.states.isCatalog && isAddForm && /*#__PURE__*/_react["default"].createElement(_CatalogForm.CatalogForm, {
    use: use,
    formType: "add"
  }), use.subPages.states.isCatalog && isUpdateForm && current && /*#__PURE__*/_react["default"].createElement(_CatalogForm.CatalogForm, {
    use: use,
    formType: "update"
  }), use.subPages.states.isInventory && isAddForm && /*#__PURE__*/_react["default"].createElement(_InventoryForm.InventoryForm, {
    use: use,
    formType: "add"
  }), use.subPages.states.isInventory && isUpdateForm && current && /*#__PURE__*/_react["default"].createElement(_InventoryForm.InventoryForm, {
    use: use,
    formType: "update"
  }), use.subPages.states.isShip && isAddForm && /*#__PURE__*/_react["default"].createElement(_ShipForm.ShipForm, {
    use: use,
    formType: "add"
  }), use.subPages.states.isShip && isUpdateForm && current && /*#__PURE__*/_react["default"].createElement(_ShipForm.ShipForm, {
    use: use,
    formType: "update"
  }), use.subPages.states.isAttributes && isAddForm && /*#__PURE__*/_react["default"].createElement(_AttributesForm.AttributesForm, {
    use: use,
    formType: "add"
  }), use.subPages.states.isAttributes && isUpdateForm && current && /*#__PURE__*/_react["default"].createElement(_AttributesForm.AttributesForm, {
    use: use,
    formType: "update"
  }), use.subPages.states.isAdvanced && isAddForm && /*#__PURE__*/_react["default"].createElement(_AdvancedForm.AdvancedForm, {
    use: use,
    formType: "add"
  }), use.subPages.states.isAdvanced && isUpdateForm && current && /*#__PURE__*/_react["default"].createElement(_AdvancedForm.AdvancedForm, {
    use: use,
    formType: "update"
  }))));
};