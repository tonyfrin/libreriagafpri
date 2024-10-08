"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriSites = useGafpriSites;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriSites(_ref) {
  var token = _ref.token,
    useCurrencies = _ref.useCurrencies;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesSites)({
    useError: error,
    useCurrencies: useCurrencies
  });
  var pages = (0, _Abstract.useGafpriPagesSites)({
    attributes: attributes
  });
  var data = (0, _Abstract.useGafpriDataSites)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsSites)();
  var api = (0, _Abstract.useGafpriApiSites)({
    token: token,
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