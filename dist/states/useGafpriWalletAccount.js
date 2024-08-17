"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriWalletAccount = useGafpriWalletAccount;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriWalletAccount(_ref) {
  var token = _ref.token,
    useCurrencies = _ref.useCurrencies,
    useUser = _ref.useUser;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesWalletAccount)({
    useCurrencies: useCurrencies
  });
  var pages = (0, _Abstract.useGafpriPagesWalletAccount)({
    attributes: attributes,
    useUser: useUser,
    useError: error
  });
  var data = (0, _Abstract.useGafpriDataWalletAccount)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsWalletAccount)({
    data: data
  });
  var api = (0, _Abstract.useGafpriApiWalletAccount)({
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