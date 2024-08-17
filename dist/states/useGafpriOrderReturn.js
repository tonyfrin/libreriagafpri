"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriOrderReturn = useGafpriOrderReturn;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriOrderReturn(_ref) {
  var token = _ref.token,
    useEntity = _ref.useEntity,
    useOrder = _ref.useOrder;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var useProductItems = (0, _Abstract.useGafpriAttributesOrderReturnItems)({
    useError: error
  });
  var attributes = (0, _Abstract.useGafpriAttributesOrderReturn)({
    useProductItems: useProductItems
  });
  var data = (0, _Abstract.useGafpriDataOrderReturn)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsOrderReturn)({
    useData: data
  });
  var pages = (0, _Abstract.useGafpriPagesOrderReturn)({
    useAttributes: attributes,
    useOrder: useOrder,
    useEntity: useEntity,
    useProductItems: useProductItems,
    useError: error
  });
  return {
    attributes: attributes,
    pages: pages,
    paginations: paginations,
    useProductItems: useProductItems,
    data: data,
    error: error
  };
}