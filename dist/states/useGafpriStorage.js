"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriStorage = useGafpriStorage;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriStorage(_ref) {
  var token = _ref.token,
    useSites = _ref.useSites;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesStorage)({
    useError: error,
    useSites: useSites
  });
  var pages = (0, _Abstract.useGafpriPagesStorage)({
    attributes: attributes
  });
  var data = (0, _Abstract.useGafpriDataStorage)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsStorage)({
    data: data
  });
  var api = (0, _Abstract.useGafpriApiStorage)({
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