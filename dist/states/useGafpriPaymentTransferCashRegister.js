"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPaymentTransferCashRegister = useGafpriPaymentTransferCashRegister;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriPaymentTransferCashRegister(_ref) {
  var token = _ref.token,
    useCurrencies = _ref.useCurrencies,
    siteOptions = _ref.siteOptions,
    useCashRegisterType = _ref.useCashRegisterType;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesPaymentTransferCashRegister)({
    currencies: useCurrencies,
    siteOptions: siteOptions,
    cashRegisterType: useCashRegisterType
  });
  var pages = (0, _Abstract.useGafpriPagesPaymentTransferCashRegister)({
    useAttributes: attributes
  });
  var api = (0, _Abstract.useGafpriApiPaymentTransferCashRegister)({
    token: token,
    useError: error,
    useAttributes: attributes,
    usePages: pages
  });
  return {
    attributes: attributes,
    pages: pages,
    api: api,
    error: error
  };
}