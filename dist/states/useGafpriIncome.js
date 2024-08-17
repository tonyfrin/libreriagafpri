"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriIncome = useGafpriIncome;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriIncome(_ref) {
  var token = _ref.token,
    useEntity = _ref.useEntity,
    useProject = _ref.useProject,
    useCurrencies = _ref.useCurrencies;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesIncome)({
    currencies: useCurrencies,
    projects: useProject
  });
  var data = (0, _Abstract.useGafpriDataIncome)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsIncome)({
    useData: data
  });
  var pages = (0, _Abstract.useGafpriPagesIncome)({
    useAttributes: attributes,
    useEntity: useEntity
  });
  var api = (0, _Abstract.useGafpriApiIncome)({
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