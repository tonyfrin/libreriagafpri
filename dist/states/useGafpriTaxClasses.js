"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriTaxClasses = useGafpriTaxClasses;
var _useGafpriError = require("./useGafpriError");
var _useGafpriAttributesTaxClasses = require("../Abstract/states/taxes/taxClasses/useGafpriAttributesTaxClasses");
var _useGafpriPagesTaxClasses = require("../Abstract/states/taxes/taxClasses/useGafpriPagesTaxClasses");
var _useGafpriDataTaxClasses = require("../Abstract/states/taxes/taxClasses/useGafpriDataTaxClasses");
var _useGafpriPaginationsTaxClasses = require("../Abstract/states/taxes/taxClasses/useGafpriPaginationsTaxClasses");
var _useGafpriApiTaxClasses = require("../Abstract/states/taxes/taxClasses/useGafpriApiTaxClasses");
var _useGafpriTaxRates = require("./useGafpriTaxRates");
function useGafpriTaxClasses(_ref) {
  var token = _ref.token;
  /**
   * States
   *
   *
   */
  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _useGafpriAttributesTaxClasses.useGafpriAttributesTaxClasses)();
  var pages = (0, _useGafpriPagesTaxClasses.useGafpriPagesTaxClasses)({
    attributes: attributes
  });
  var data = (0, _useGafpriDataTaxClasses.useGafpriDataTaxClasses)({
    token: token
  });
  var paginations = (0, _useGafpriPaginationsTaxClasses.useGafpriPaginationsTaxClasses)({
    data: data
  });
  var api = (0, _useGafpriApiTaxClasses.useGafpriApiTaxClasses)({
    token: token,
    useError: error,
    pages: pages,
    attributes: attributes
  });
  var useTaxRates = (0, _useGafpriTaxRates.useGafpriTaxRates)({
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
    useTaxRates: useTaxRates
  };
}