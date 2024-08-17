"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriBudget = useGafpriBudget;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriBudget(_ref) {
  var token = _ref.token,
    useEntity = _ref.useEntity,
    useProducts = _ref.useProducts;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var useProductItems = (0, _Abstract.useGafpriAttributesBudgetItems)({
    useError: error
  });
  var attributes = (0, _Abstract.useGafpriAttributesBudget)({
    useProductItems: useProductItems
  });
  var data = (0, _Abstract.useGafpriDataBudget)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsBudget)({
    useData: data
  });
  var pages = (0, _Abstract.useGafpriPagesBudget)({
    useAttributes: attributes,
    useEntity: useEntity,
    useProducts: useProducts,
    useProductItems: useProductItems
  });
  var api = (0, _Abstract.useGafpriApiBudget)({
    token: token,
    useError: error,
    useAttributes: attributes,
    usePages: pages,
    useProductItems: useProductItems
  });
  return {
    attributes: attributes,
    pages: pages,
    paginations: paginations,
    useProductItems: useProductItems,
    api: api,
    data: data,
    error: error
  };
}