"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriShippingMethods = useGafpriShippingMethods;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriShippingMethods(_ref) {
  var token = _ref.token,
    closeModalPage = _ref.closeModalPage;
  /**
   * States
   *
   *
   */
  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesShippingMethods)();
  var pages = (0, _Abstract.useGafpriPagesShippingMethods)({
    attributes: attributes,
    closeModalPage: closeModalPage
  });
  var data = (0, _Abstract.useGafpriDataShippingMethods)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsShippingMethods)();
  var api = (0, _Abstract.useGafpriApiShippingMethods)({
    token: token,
    useError: error,
    pages: pages,
    attributes: attributes
  });
  return {
    attributes: attributes,
    pages: pages,
    paginations: paginations,
    api: api,
    data: data,
    error: error
  };
}