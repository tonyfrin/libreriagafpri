"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriProducts = useGafpriProducts;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriProducts(_ref) {
  var token = _ref.token,
    useTaxClasses = _ref.useTaxClasses,
    useCategory = _ref.useCategory,
    siteOptions = _ref.siteOptions;
  /**
   * States
   *
   *
   */

  var optionsTaxClasses = useTaxClasses.data.actions.getOptions();
  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesProducts)({
    optionsTaxClasses: optionsTaxClasses,
    useError: error,
    useCategory: useCategory
  });
  var subPages = (0, _Abstract.useGafpriSubPagesProducts)();
  var pages = (0, _Abstract.useGafpriPagesProducts)({
    attributes: attributes,
    subPages: subPages
  });
  var data = (0, _Abstract.useGafpriDataProducts)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsProducts)({
    data: data
  });
  var api = (0, _Abstract.useGafpriApiProducts)({
    token: token,
    useError: error,
    pages: pages,
    attributes: attributes,
    siteOptions: siteOptions
  });
  return {
    attributes: attributes,
    pages: pages,
    subPages: subPages,
    paginations: paginations,
    api: api,
    data: data,
    error: error
  };
}