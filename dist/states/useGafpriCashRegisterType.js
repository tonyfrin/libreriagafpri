"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriCashRegisterType = useGafpriCashRegisterType;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriCashRegisterType(_ref) {
  var token = _ref.token,
    useSites = _ref.useSites,
    useUser = _ref.useUser;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var crtu = (0, _Abstract.useGafpriAttributesCashRegisterTypeUser)({
    useUser: useUser
  });
  var attributes = (0, _Abstract.useGafpriAttributesCashRegisterType)({
    useSites: useSites,
    useCrtu: crtu
  });
  var subPages = (0, _Abstract.useGafpriSubPagesCashRegisterType)();
  var pages = (0, _Abstract.useGafpriPagesCashRegisterType)({
    attributes: attributes,
    subPages: subPages
  });
  var data = (0, _Abstract.useGafpriDataCashRegisterType)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsCashRegisterType)({
    data: data
  });
  var api = (0, _Abstract.useGafpriApiCashRegisterType)({
    token: token,
    useError: error,
    pages: pages,
    attributes: attributes,
    crtu: crtu
  });
  return {
    attributes: attributes,
    pages: pages,
    subPages: subPages,
    paginations: paginations,
    api: api,
    data: data,
    error: error,
    crtu: crtu
  };
}