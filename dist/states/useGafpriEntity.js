"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriEntity = useGafpriEntity;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriEntity(_ref) {
  var token = _ref.token,
    useTypeDocumentId = _ref.useTypeDocumentId,
    getAddData = _ref.getAddData,
    getUpdateData = _ref.getUpdateData;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesEntity)({
    useError: error,
    useTypeDocumentId: useTypeDocumentId
  });
  var pages = (0, _Abstract.useGafpriPagesEntity)({
    useAttributes: attributes
  });
  var data = (0, _Abstract.useGafpriDataEntity)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsEntity)({
    useData: data
  });
  var api = (0, _Abstract.useGafpriApiEntity)({
    token: token,
    useError: error,
    useAttributes: attributes,
    usePages: pages,
    getAddData: getAddData,
    getUpdateData: getUpdateData
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