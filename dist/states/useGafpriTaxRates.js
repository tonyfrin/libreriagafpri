"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriTaxRates = useGafpriTaxRates;
var _useGafpriError = require("./useGafpriError");
var _useGafpriAttributesTaxRates = require("../Abstract/states/taxes/taxRates/useGafpriAttributesTaxRates");
var _useGafpriPagesTaxRates = require("../Abstract/states/taxes/taxRates/useGafpriPagesTaxRates");
var _useGafpriDataTaxRates = require("../Abstract/states/taxes/taxRates/useGafpriDataTaxRates");
var _useGafpriPaginationsTaxRates = require("../Abstract/states/taxes/taxRates/useGafpriPaginationsTaxRates");
var _useGafpriApiTaxRates = require("../Abstract/states/taxes/taxRates/useGafpriApiTaxRates");
function useGafpriTaxRates(_ref) {
  var token = _ref.token,
    closeModalPage = _ref.closeModalPage;
  /**
   * States
   *
   *
   */
  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _useGafpriAttributesTaxRates.useGafpriAttributesTaxRates)();
  var pages = (0, _useGafpriPagesTaxRates.useGafpriPagesTaxRates)({
    attributes: attributes,
    closeModalPage: closeModalPage
  });
  var data = (0, _useGafpriDataTaxRates.useGafpriDataTaxRates)({
    token: token
  });
  var paginations = (0, _useGafpriPaginationsTaxRates.useGafpriPaginationsTaxRates)();
  var api = (0, _useGafpriApiTaxRates.useGafpriApiTaxRates)({
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