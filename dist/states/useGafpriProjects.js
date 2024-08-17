"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriProjects = useGafpriProjects;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriProjects(_ref) {
  var token = _ref.token;
  /**
   * States
   *
   *
   */

  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesProjects)();
  var pages = (0, _Abstract.useGafpriPagesProjects)({
    attributes: attributes
  });
  var data = (0, _Abstract.useGafpriDataProjects)({
    token: token
  });
  var paginations = (0, _Abstract.useGafpriPaginationsProjects)({
    data: data
  });
  var api = (0, _Abstract.useGafpriApiProjects)({
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