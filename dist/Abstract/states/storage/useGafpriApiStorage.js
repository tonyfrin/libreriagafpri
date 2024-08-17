"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiStorage = useGafpriApiStorage;
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function useGafpriApiStorage(_ref) {
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
    if (attributes.states.nameValid && attributes.states.address1Valid && attributes.states.address2Valid && attributes.states.cityValid && attributes.states.stateCountryValid && attributes.states.countryValid && attributes.states.postCodeValid && attributes.states.siteValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.STORAGE_ROUTE,
        initCredentials: {
          name: attributes.states.name,
          address1: attributes.states.address1,
          address2: attributes.states.address2,
          city: attributes.states.city,
          state: attributes.states.state,
          country: attributes.states.country,
          postCode: attributes.states.postCode,
          sitesId: attributes.states.site
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
    if (attributes.states.nameValid && attributes.states.address1Valid && attributes.states.address2Valid && attributes.states.cityValid && attributes.states.stateCountryValid && attributes.states.countryValid && attributes.states.postCodeValid && attributes.states.siteValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.STORAGE_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          name: attributes.states.name,
          address1: attributes.states.address1,
          address2: attributes.states.address2,
          city: attributes.states.city,
          state: attributes.states.state,
          country: attributes.states.country,
          postCode: attributes.states.postCode,
          sitesId: attributes.states.site
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
        initRoute: "".concat(_constants.STORAGE_ROUTE, "/").concat(id),
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
    update: update,
    add: add,
    erase: erase
  };
  return {
    actions: actions
  };
}