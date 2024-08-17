"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiTaxRates = useGafpriApiTaxRates;
var _helpers = require("../../../../helpers");
var _constants = require("../../../../constants");
function useGafpriApiTaxRates(_ref) {
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
    if (attributes.states.taxClassesIdValid && attributes.states.rateValid && attributes.states.cityValid && attributes.states.stateCountryValid && attributes.states.countryValid && attributes.states.postCodeValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.TAX_RATES_ROUTE,
        initCredentials: {
          taxClassesId: attributes.states.taxClassesId,
          rate: attributes.states.rate,
          city: attributes.states.city,
          state: attributes.states.state,
          country: attributes.states.country,
          postCode: attributes.states.postCode
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
    if (attributes.states.rateValid && attributes.states.cityValid && attributes.states.stateCountryValid && attributes.states.countryValid && attributes.states.postCodeValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.TAX_RATES_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          rate: attributes.states.rate,
          city: attributes.states.city,
          state: attributes.states.state,
          country: attributes.states.country,
          postCode: attributes.states.postCode
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
        initRoute: "".concat(_constants.TAX_RATES_ROUTE, "/").concat(id),
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