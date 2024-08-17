"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiShippingMethods = useGafpriApiShippingMethods;
var _helpers = require("../../../../helpers");
var _constants = require("../../../../constants");
function useGafpriApiShippingMethods(_ref) {
  var token = _ref.token,
    useError = _ref.useError,
    pages = _ref.pages,
    attributes = _ref.attributes;
  var newErrorAdd = function newErrorAdd(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onAdd
    });
  };
  var add = function add() {
    if (attributes.states.shippingAreasIdValid && attributes.states.nameValid && attributes.states.descriptionValid && attributes.states.costValid && attributes.states.typeValid && attributes.states.shippingTimeDaysValid && attributes.states.availableShippingServicesValid && attributes.states.taxStatusValid && attributes.states.taxClassValid && attributes.states.statusValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.SHIPPING_METHODS_ROUTE,
        initCredentials: {
          shippingAreasId: attributes.states.shippingAreasId,
          name: attributes.states.name,
          description: attributes.states.description,
          cost: attributes.states.cost,
          type: attributes.states.type,
          shippingTimeDays: attributes.states.shippingTimeDays,
          availableShippingServices: attributes.states.availableShippingServices,
          taxStatus: attributes.states.taxStatus,
          taxClass: attributes.states.taxClass,
          status: attributes.states.status
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
    if (attributes.states.nameValid && attributes.states.descriptionValid && attributes.states.costValid && attributes.states.typeValid && attributes.states.shippingTimeDaysValid && attributes.states.availableShippingServicesValid && attributes.states.taxStatusValid && attributes.states.taxClassValid && attributes.states.statusValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.SHIPPING_METHODS_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          name: attributes.states.name,
          description: attributes.states.description,
          cost: attributes.states.cost,
          type: attributes.states.type,
          shippingTimeDays: attributes.states.shippingTimeDays,
          availableShippingServices: attributes.states.availableShippingServices,
          taxStatus: attributes.states.taxStatus,
          taxClass: attributes.states.taxClass,
          status: attributes.states.status
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
        initRoute: "".concat(_constants.SHIPPING_METHODS_ROUTE, "/").concat(id),
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