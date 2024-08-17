"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriBankType = useGafpriBankType;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriBankType(_ref) {
  var token = _ref.token,
    useSites = _ref.useSites,
    useCurrencies = _ref.useCurrencies;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesBankType)({
    useSites: useSites,
    useCurrencies: useCurrencies
  });
  var subPages = (0, _Abstract.useGafpriSubPagesBankType)();
  var pages = (0, _Abstract.useGafpriPagesBankType)({
    attributes: attributes,
    subPages: subPages
  });
  var data = (0, _Abstract.useGafpriDataBankType)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsBankType)({
    data: data
  });
  var api = (0, _Abstract.useGafpriApiBankType)({
    token: token,
    useError: error,
    pages: pages,
    attributes: attributes
  });
  return {
    attributes: attributes,
    pages: pages,
    subPages: subPages,
    paginations: paginations,
    api: api,
    data: data,
    error: error
  };
}