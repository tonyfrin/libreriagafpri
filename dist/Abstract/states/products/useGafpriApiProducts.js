"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiProducts = useGafpriApiProducts;
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function useGafpriApiProducts(_ref) {
  var token = _ref.token,
    useError = _ref.useError,
    pages = _ref.pages,
    attributes = _ref.attributes,
    siteOptions = _ref.siteOptions;
  var newErrorAdd = function newErrorAdd(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onAdd
    });
  };
  var add = function add() {
    if (attributes.states.skuValid && attributes.states.nameValid && attributes.states.salesPriceValid && attributes.states.typeValid && attributes.states.statusValid && attributes.states.visibilityValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.PRODUCTS_ROUTE,
        initCredentials: {
          categoryId: attributes.states.category,
          tags: attributes.states.tags,
          sku: attributes.states.sku,
          name: attributes.states.name,
          publicName: attributes.states.publicName,
          description: attributes.states.description,
          image: attributes.states.photo,
          galleryImage: attributes.states.galleryImage,
          note: attributes.states.note,
          salesPrice: parseFloat(attributes.states.salesPrice),
          type: attributes.states.type,
          taxStatus: attributes.states.taxStatus,
          taxClass: attributes.states.taxClasses,
          packageType: attributes.states.packageType,
          qtyPack: parseFloat(attributes.states.qtyPack),
          undCbm: parseFloat(attributes.states.undCbm),
          attributes: attributes.states.attributes,
          weight: parseFloat(attributes.states.weight),
          height: parseFloat(attributes.states.height),
          width: parseFloat(attributes.states.width),
          length: parseFloat(attributes.states.length),
          catalogOrder: parseFloat(attributes.states.catalogOrder),
          reviews: attributes.states.reviews,
          posts: {
            status: attributes.states.status,
            visibility: attributes.states.visibility,
            permanentLink: attributes.states.permanentLink
          },
          sitesProducts: {
            sitesId: parseInt("".concat(siteOptions.id), 10),
            manageStock: true,
            thereIsStock: false,
            isAvailable: true,
            cost: parseFloat(attributes.states.cost)
          }
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorAdd
      });
    }
  };
  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onUpdate
    });
  };
  var update = function update() {
    if (attributes.states.skuValid && attributes.states.nameValid && attributes.states.salesPriceValid && attributes.states.typeValid && attributes.states.statusValid && attributes.states.visibilityValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.PRODUCTS_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          categoryId: attributes.states.category,
          tags: attributes.states.tags,
          sku: attributes.states.sku,
          name: attributes.states.name,
          publicName: attributes.states.publicName,
          description: attributes.states.description,
          image: attributes.states.photo,
          galleryImage: attributes.states.galleryImage,
          note: attributes.states.note,
          salesPrice: parseFloat(attributes.states.salesPrice),
          offerPrice: parseFloat(attributes.states.offerPrice),
          cost: parseFloat(attributes.states.cost),
          type: attributes.states.type,
          taxStatus: attributes.states.taxStatus,
          taxClass: attributes.states.taxClasses,
          packageType: attributes.states.packageType,
          qtyPack: parseFloat(attributes.states.qtyPack),
          undCbm: parseFloat(attributes.states.undCbm),
          attributes: attributes.states.attributes,
          weight: parseFloat(attributes.states.weight),
          height: parseFloat(attributes.states.height),
          width: parseFloat(attributes.states.width),
          length: parseFloat(attributes.states.length),
          catalogOrder: parseFloat(attributes.states.catalogOrder),
          reviews: attributes.states.reviews,
          posts: {
            status: attributes.states.status,
            visibility: attributes.states.visibility,
            permanentLink: attributes.states.permanentLink
          }
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorUpdate
      });
    }
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.returnInit
    });
  };
  var erase = function erase(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_constants.PRODUCTS_ROUTE, "/").concat(id),
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorDelete
      });
    }
  };

  /**
   * Export
   *
   *
   */

  var actions = {
    add: add,
    update: update,
    erase: erase
  };
  return {
    actions: actions
  };
}