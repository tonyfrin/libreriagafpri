"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriExpenses = useGafpriExpenses;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriExpenses(_ref) {
  var token = _ref.token,
    useEntity = _ref.useEntity,
    useProject = _ref.useProject,
    useCurrencies = _ref.useCurrencies,
    useExpensesType = _ref.useExpensesType;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesExpenses)({
    currencies: useCurrencies,
    projects: useProject,
    expensesType: useExpensesType
  });
  var data = (0, _Abstract.useGafpriDataExpenses)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsExpenses)({
    useData: data
  });
  var pages = (0, _Abstract.useGafpriPagesExpenses)({
    useAttributes: attributes,
    useEntity: useEntity
  });
  var api = (0, _Abstract.useGafpriApiExpenses)({
    token: token,
    useError: error,
    useAttributes: attributes,
    usePages: pages
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