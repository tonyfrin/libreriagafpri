"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriOrder = useGafpriOrder;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriOrder(_ref) {
  var token = _ref.token,
    useEntity = _ref.useEntity,
    useProducts = _ref.useProducts,
    siteOptions = _ref.siteOptions,
    salesChannel = _ref.salesChannel;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var useProductItems = (0, _Abstract.useGafpriAttributesOrderItems)({
    useError: error,
    siteOptions: siteOptions
  });
  var attributes = (0, _Abstract.useGafpriAttributesOrder)({
    salesChannel: salesChannel,
    useProductItems: useProductItems
  });
  var data = (0, _Abstract.useGafpriDataOrder)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsOrder)({
    useData: data
  });
  var pages = (0, _Abstract.useGafpriPagesOrder)({
    useAttributes: attributes,
    useEntity: useEntity,
    useProducts: useProducts,
    useProductItems: useProductItems
  });
  var api = (0, _Abstract.useGafpriApiOrder)({
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