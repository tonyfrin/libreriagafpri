"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPaymentTransferBank = useGafpriPaymentTransferBank;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriPaymentTransferBank(_ref) {
  var token = _ref.token,
    siteOptions = _ref.siteOptions,
    useBankType = _ref.useBankType;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesPaymentTransferBank)({
    siteOptions: siteOptions,
    bankType: useBankType
  });
  var pages = (0, _Abstract.useGafpriPagesPaymentTransferBank)({
    useAttributes: attributes
  });
  var api = (0, _Abstract.useGafpriApiPaymentTransferBank)({
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