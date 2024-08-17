"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAccountsReceivable = useGafpriAccountsReceivable;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriAccountsReceivable(_ref) {
  var token = _ref.token,
    useEntity = _ref.useEntity;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesAccountsReceivable)();
  var pages = (0, _Abstract.useGafpriPagesAccountsReceivable)({
    useAttributes: attributes,
    useEntity: useEntity
  });
  var data = (0, _Abstract.useGafpriDataAccountsReceivable)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsAccountsReceivable)({
    data: data
  });
  var api = (0, _Abstract.useGafpriApiAccountsReceivable)({
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