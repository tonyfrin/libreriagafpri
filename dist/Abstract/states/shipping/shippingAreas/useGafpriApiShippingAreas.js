"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiShippingAreas = useGafpriApiShippingAreas;
var _helpers = require("../../../../helpers");
var _constants = require("../../../../constants");
function useGafpriApiShippingAreas(_ref) {
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
    if (attributes.states.nameValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.SHIPPING_AREAS_ROUTE,
        initCredentials: {
          name: attributes.states.name
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: function functionSuccess(data) {
          return pages.actions.goUpdateFromAdd(data);
        },
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
    if (attributes.states.nameValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.SHIPPING_AREAS_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          name: attributes.states.name
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
        initRoute: "".concat(_constants.SHIPPING_AREAS_ROUTE, "/").concat(id),
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