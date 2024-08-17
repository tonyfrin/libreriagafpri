"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriExpensesType = useGafpriExpensesType;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriExpensesType(_ref) {
  var token = _ref.token;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesExpensesType)({
    useError: error
  });
  var pages = (0, _Abstract.useGafpriPagesExpensesType)({
    attributes: attributes
  });
  var data = (0, _Abstract.useGafpriDataExpensesType)({
    token: token,
    attributes: attributes
  });
  var paginations = (0, _Abstract.useGafpriPaginationsExpensesType)();
  var api = (0, _Abstract.useGafpriApiExpensesType)({
    token: token,
    useError: error,
    pages: pages,
    attributes: attributes,
    data: data
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