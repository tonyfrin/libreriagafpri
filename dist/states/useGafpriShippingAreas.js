"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriShippingAreas = useGafpriShippingAreas;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
var _useGafpriShippingMethods = require("./useGafpriShippingMethods");
function useGafpriShippingAreas(_ref) {
  var token = _ref.token;
  /**
   * States
   *
   *
   */
  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesShippingAreas)();
  var pages = (0, _Abstract.useGafpriPagesShippingAreas)({
    attributes: attributes
  });
  var data = (0, _Abstract.useGafpriDataShippingAreas)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsShippingAreas)({
    data: data
  });
  var api = (0, _Abstract.useGafpriApiShippingAreas)({
    token: token,
    useError: error,
    pages: pages,
    attributes: attributes
  });
  var useShippingMethoods = (0, _useGafpriShippingMethods.useGafpriShippingMethods)({
    token: token,
    closeModalPage: pages.actions.closeModalPage
  });
  return {
    attributes: attributes,
    pages: pages,
    paginations: paginations,
    api: api,
    data: data,
    error: error,
    useShippingMethoods: useShippingMethoods
  };
}